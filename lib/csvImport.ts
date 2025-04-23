import type { Task } from '@prisma/client';
import { TASK_FIELD_CONFIG } from '@/config/TASK_FIELD_CONFIG';
import Papa from 'papaparse';

interface ParsedTaskData {
  [key: string]: any;
}

interface ParsingResult {
  parsedTasks: Partial<Task>[];
  errors: string[];
  warnings: string[];
}

/**
 * Helper function to properly split CSV values respecting quotes
 */
const splitCsvWithQuotes = (str: string): string[] => {
  if (!str) return [];
  
  const result: string[] = [];
  let currentValue = '';
  let insideQuotes = false;
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (char === '"') {
      // Toggle quote state
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      // End of value (only if not inside quotes)
      result.push(currentValue.trim());
      currentValue = '';
    } else {
      // Add character to current value
      currentValue += char;
    }
  }
  
  // Add the last value
  if (currentValue.trim()) {
    result.push(currentValue.trim());
  }
  
  // Remove any surrounding quotes from values
  return result.map(item => {
    const trimmed = item.trim();
    if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
      return trimmed.slice(1, -1).trim();
    }
    return trimmed;
  }).filter(Boolean);
};

/**
 * Parse CSV content into task data using robust papaparse parser
 * 
 * @param csvContent The CSV content to parse
 * @returns Object containing parsed tasks and any errors/warnings that occurred during parsing
 */
export const parseCSV = (csvContent: string): ParsingResult => {
  const result: ParsingResult = {
    parsedTasks: [],
    errors: [],
    warnings: []
  };

  try {
    // Use papaparse to handle the CSV parsing
    const parseResult = Papa.parse<Record<string, string>>(csvContent, {
      header: true,
      skipEmptyLines: 'greedy',
      delimiter: ',', // Using comma as the column delimiter
      quoteChar: '"', // Set quote character
      escapeChar: '"', // Set escape character for quotes within quoted fields
      transformHeader: (header) => header.trim(),
      transform: (value) => value.trim(),
    });

    // Handle any errors from parsing
    if (parseResult.errors && parseResult.errors.length > 0) {
      parseResult.errors.forEach((error) => {
        result.warnings.push(`CSV parsing error: ${error.message} at row ${error.row ?? 'unknown'}`);
      });
    }

    if (!parseResult.data || !Array.isArray(parseResult.data) || parseResult.data.length === 0) {
      result.errors.push('No valid data rows found in CSV');
      return result;
    }

    // Log headers for debugging
    const firstRow = parseResult.data[0];
    const headers = Object.keys(firstRow);
    console.log('CSV Headers:', headers);

    // Map headers to DB fields
    const headerMapping = mapCsvHeadersToDbFields(headers);
    console.log('Header mapping:', headerMapping);

    // Field types from config for proper type conversion
    const fieldTypes: Record<string, { type: string, options?: string[] }> = {};
  
    // Set up field types based on database schema
    Object.entries(TASK_FIELD_CONFIG).forEach(([fieldName, config]) => {
      if (config.type) {
        // Map field types from config
        const type = config.type === 'multi-select' ? 'array' : 
                    (config.type === 'dropdown' ? 'select' : config.type);
        
        fieldTypes[fieldName] = { 
          type, 
          options: config.options || undefined
        };
      }
    });
  
    // Always treat these fields as array types regardless of config
    const forceArrayFields = [
      'portfolio', 'project', 'section', 'tags', 'desired_output_format',
      'desired_style_tone', 'ai_action_process_dropdown', 'required_tools_software',
      'required_hardware', 'required_skills', 'required_devices',
      'optimal_time_of_day', 'related_portfolios', 'related_projects',
      'related_sections', 'related_entities'
    ];
  
    forceArrayFields.forEach(field => {
      fieldTypes[field] = { type: 'array' };
    });
  
    // Always treat these fields as date types
    const forceDateFields = [
      'due_date', 'start_date', 'created_at', 'completed_at', 'last_modified_at'
    ];
  
    forceDateFields.forEach(field => {
      fieldTypes[field] = { type: 'date' };
    });
  
    // Numeric fields
    const forceNumberFields = ['estimated_cost_budget', 'number_of_variations'];
    forceNumberFields.forEach(field => {
      fieldTypes[field] = { type: 'number' };
    });

    console.log('Field types configured:', Object.keys(fieldTypes).length);

    // Process each row in the CSV data
    parseResult.data.forEach((row: Record<string, string>, index: number) => {
      try {
        const task: Record<string, any> = {};
        
        // For each field in the row...
        Object.keys(row).forEach(header => {
          // Skip empty headers
          if (!header.trim()) return;
          
          // Get the corresponding database field
          const dbField = headerMapping[header];
          if (!dbField) {
            result.warnings.push(`Row ${index + 1}: Unknown header "${header}" - skipping`);
            return;
          }
          
          // Get the value and convert based on field type
          const value = row[header];
          
          // Get type config for this field
          const typeConfig = fieldTypes[dbField] || { type: 'text' };
          
          // Parse field value with appropriate conversion
          const parsedValue = parseFieldValue(dbField, value, typeConfig, result, index);
          
          // Only add non-null values to avoid overwriting defaults
          if (parsedValue !== null && parsedValue !== undefined) {
            task[dbField] = parsedValue;
          }
        });
        
        // Add the parsed task to our result
        result.parsedTasks.push(task as Partial<Task>);
        
      } catch (error) {
        result.errors.push(`Failed to process row ${index + 1}: ${(error as Error).message}`);
      }
    });

    return result;
  } catch (error) {
    result.errors.push(`Failed to parse CSV: ${(error as Error).message}`);
    return result;
  }
};

/**
 * Parse a field value according to its type
 */
const parseFieldValue = (
  fieldName: string, 
  value: string, 
  fieldConfig: any, 
  result: ParsingResult, 
  rowIndex: number
): any => {
  if (!value || value === 'NaN' || value.toLowerCase() === 'nan') {
    return null;
  }
  
  try {
    // Handle different types based on the field configuration
    switch (fieldConfig.type) {
      case 'array':
        // For array types, split the string into an array
        // Use semicolon as the separator for arrays
        if (value.includes(';')) {
          return value.split(';').map(v => v.trim()).filter(Boolean);
        } else if (value.includes(',')) {
          // Fallback to comma separator if no semicolons are found (for backwards compatibility)
          return value.split(',').map(v => v.trim()).filter(Boolean);
        } else {
          // If only a single value, return as an array with one item
          return [value.trim()];
        }
        
      case 'select':
        // For dropdown/select types, just return the string value
        // Check if the value exists in allowed options
        if (fieldConfig.options && !fieldConfig.options.includes(value)) {
          result.warnings.push(`Row ${rowIndex + 1}, field "${fieldName}": Value "${value}" is not in allowed options`);
        }
        return value;
        
      case 'date':
        // Parse dates
        try {
          const parsedDate = new Date(value);
          if (isNaN(parsedDate.getTime())) {
            result.warnings.push(`Row ${rowIndex + 1}, field "${fieldName}": Invalid date format: "${value}"`);
            return null;
          }
          return parsedDate;
        } catch (e) {
          result.warnings.push(`Row ${rowIndex + 1}, field "${fieldName}": Error parsing date: "${value}"`);
          return null;
        }
        
      case 'number':
        // Parse numbers
        const num = parseFloat(value);
        if (isNaN(num)) {
          result.warnings.push(`Row ${rowIndex + 1}, field "${fieldName}": Invalid number format: "${value}"`);
          return null;
        }
        return num;
        
      default:
        // For other types, just return the string value
        return value;
    }
  } catch (error) {
    result.warnings.push(`Row ${rowIndex + 1}, field "${fieldName}": Error processing value: ${(error as Error).message}`);
    return null;
  }
};

/**
 * Map CSV headers to database fields
 */
const mapCsvHeadersToDbFields = (headers: string[]): Record<string, string> => {
  const result: Record<string, string> = {};
  
  // Define mappings from CSV headers to database fields
  const knownMappings: Record<string, string> = {
    // Direct field name matches (CSV field name = DB field name)
    'task_id': 'task_id',
    'name': 'name',
    'description': 'description',
    'notes': 'notes',
    'task_comments': 'task_comments',
    'portfolio': 'portfolio',
    'project': 'project',
    'section': 'section',
    'parent_task': 'parent_task',
    'parent_task_id': 'parent_task_id',
    'subtasks_for_user': 'subtasks_for_user',
    'subtasks_for_ai': 'subtasks_for_ai',
    'subtasks_in_system': 'subtasks_in_system',
    'subtasks_id_in_system': 'subtasks_id_in_system',
    'ai_brainstorm_ideas_on_how_it_can_help_me': 'ai_brainstorm_ideas_on_how_it_can_help_me',
    'dependents': 'dependents',
    'dependents_id': 'dependents_id',
    'outgoing_dependents': 'outgoing_dependents',
    'outgoing_dependents_id': 'outgoing_dependents_id',
    'tags': 'tags',
    'priority': 'priority',
    'due_date': 'due_date',
    'start_date': 'start_date',
    'deadline_type': 'deadline_type',
    'recurrence_frequency': 'recurrence_frequency',
    'created_at': 'created_at',
    'completed_at': 'completed_at',
    'last_modified_at': 'last_modified_at',
    'task_goal': 'task_goal',
    'input_data_context': 'input_data_context',
    'desired_output_format': 'desired_output_format',
    'ai_action_process_free_text': 'ai_action_process_free_text',
    'ai_action_process_dropdown': 'ai_action_process_dropdown',
    'ai_workflow_status': 'ai_workflow_status',
    'allow_autonomous_execution': 'allow_autonomous_execution',
    'number_of_variations': 'number_of_variations',
    'desired_style_tone': 'desired_style_tone',
    'specific_constraints_instructions': 'specific_constraints_instructions',
    'ai_behavior_on_uncertainty': 'ai_behavior_on_uncertainty',
    'ai_creativity_level': 'ai_creativity_level',
    'ai_processing_priority': 'ai_processing_priority',
    'ai_agent_status_log': 'ai_agent_status_log',
    'ai_output_result_link': 'ai_output_result_link',
    'action_required_from_user': 'action_required_from_user',
    'related_portfolios': 'related_portfolios',
    'related_projects': 'related_projects',
    'related_sections': 'related_sections',
    'related_tasks': 'related_tasks',
    'related_tasks_id': 'related_tasks_id',
    'related_entities': 'related_entities',
    'target_audience': 'target_audience',
    'task_purpose': 'task_purpose',
    'type': 'type',
    'task_type': 'task_type',
    'estimated_user_time': 'estimated_user_time',
    'cognitive_load': 'cognitive_load',
    'energy_level_required': 'energy_level_required',
    'required_tools_software': 'required_tools_software',
    'required_hardware': 'required_hardware',
    'required_skills': 'required_skills',
    'estimated_cost_budget': 'estimated_cost_budget',
    'expected_impact_success_metric': 'expected_impact_success_metric',
    'location': 'location',
    'execution_location': 'execution_location',
    'required_devices': 'required_devices',
    'internet_requirement': 'internet_requirement',
    'focus_requirement': 'focus_requirement',
    'optimal_time_of_day': 'optimal_time_of_day',
    'assignee': 'assignee',
    'collaborators': 'collaborators',
    'waiting_for': 'waiting_for',
    'financial_return_value_speed': 'financial_return_value_speed',
    'ai_output_rating': 'ai_output_rating',
    'feedback_for_ai': 'feedback_for_ai',
    'suggested_initial_steps_subtasks': 'suggested_initial_steps_subtasks',
    'related_areas_for_ai_to_consider': 'related_areas_for_ai_to_consider',
    'potential_dependencies_related_tasks': 'potential_dependencies_related_tasks',
    'financial_aspect': 'financial_aspect',
    
    // Legacy or alternative field names that might be in CSV
    'Task ID': 'task_id', 
    'ID': 'task_id',
    'Id': 'task_id',
    'Name': 'name',
    'Description': 'description',
    'Notes': 'notes',
    'Task Comments': 'task_comments',
    'Portfolio': 'portfolio',
    'Project': 'project',
    'Section': 'section', 
    'Sections': 'section',
    'Parent Task': 'parent_task',
    'Parent Task ID': 'parent_task_id',
    'Subtasks (for user)': 'subtasks_for_user',
    'Subtasks (for AI)': 'subtasks_for_ai',
    'Subtasks (in System)': 'subtasks_in_system',
    'Subtasks ID (in System)': 'subtasks_id_in_system',
    'AI Brainstorm Ideas on How It Can Help Me:': 'ai_brainstorm_ideas_on_how_it_can_help_me',
    'AI Brainstorm Ideas on How It Can Help Me': 'ai_brainstorm_ideas_on_how_it_can_help_me',
    'Task Goal': 'task_goal',
    'Input Data & Context': 'input_data_context',
    'Desired Output Format': 'desired_output_format',
    'AI Action / Process (Free Text)': 'ai_action_process_free_text',
    'AI Action / Process (Dropdown)': 'ai_action_process_dropdown',
    'Allow Autonomous Execution (for AI)': 'allow_autonomous_execution',
    'Number of Variations (If Applicable)': 'number_of_variations',
    'Desired Style / Tone': 'desired_style_tone',
    'Specific Constraints / Instructions (for AI)': 'specific_constraints_instructions',
    'AI Behavior on Uncertainty': 'ai_behavior_on_uncertainty',
    'AI Creativity Level': 'ai_creativity_level',
    'AI Processing Priority': 'ai_processing_priority',
    'AI Agent Status Log': 'ai_agent_status_log',
    'AI Output / Result Link': 'ai_output_result_link',
    'AI Output Rating': 'ai_output_rating',
    'Feedback for AI': 'feedback_for_ai',
    'AI Workflow Status': 'ai_workflow_status',
    'Dependents': 'dependents',
    'Dependents ID': 'dependents_id',
    'Outgoing Dependents': 'outgoing_dependents',
    'Outgoing Dependents ID': 'outgoing_dependents_id',
    'Tags': 'tags',
    'Priority': 'priority',
    'Due Date': 'due_date',
    'Start Date': 'start_date',
    'Deadline Type': 'deadline_type',
    'Recurrence / Frequency': 'recurrence_frequency',
    'Created At': 'created_at',
    'Completed At': 'completed_at',
    'Last Modified At': 'last_modified_at',
    'Action Required From User': 'action_required_from_user', 
    'Assignee': 'assignee',
    'Collaborators': 'collaborators',
    'Related Entity': 'related_entities',
    'Waiting For': 'waiting_for',
    'Related Portfolios': 'related_portfolios',
    'Related Projects': 'related_projects',
    'Related Sections': 'related_sections',
    'Related Tasks': 'related_tasks',
    'Related Tasks ID': 'related_tasks_id',
    'Related Entities': 'related_entities',
    'Target Audience': 'target_audience',
    'Task Purpose (Why)': 'task_purpose', 
    'Type': 'type',
    'Task Type': 'task_type',
    'Estimated User Time': 'estimated_user_time',
    'Cognitive Load (For User)': 'cognitive_load',
    'Energy Level Required (For User)': 'energy_level_required',
    'Required Tools / Software': 'required_tools_software',
    'Required Hardware': 'required_hardware',
    'Required Skills': 'required_skills',
    'Estimated Cost / Budget': 'estimated_cost_budget',
    'Expected Impact / Success Metric': 'expected_impact_success_metric',
    'Location': 'location',
    'Execution Location': 'execution_location',
    'Required Device(s)': 'required_devices',
    'Internet Requirement': 'internet_requirement',
    'Focus Requirement': 'focus_requirement',
    'Optimal Time of Day': 'optimal_time_of_day',
    'Financial Return (Value & Speed)': 'financial_return_value_speed',
    'Suggested Initial Steps / Subtasks': 'suggested_initial_steps_subtasks',
    'Related Areas for AI to Consider': 'related_areas_for_ai_to_consider',
    'Relatated Areas for AI to Consider': 'related_areas_for_ai_to_consider',
    'Potential Dependencies / Related Tasks': 'potential_dependencies_related_tasks',
    'Financial Aspect': 'financial_aspect'
  };
  
  // Map each header to its database field
  headers.forEach(header => {
    console.log(`Processing header: "${header}"`);
    if (knownMappings[header]) {
      result[header] = knownMappings[header];
      console.log(`Mapped "${header}" to "${knownMappings[header]}"`);
    } else {
      // For unknown headers, use a cleaned version of the header as fallback
      const cleaned = header
        .toLowerCase()
        .replace(/[^a-z0-9_]/g, '_') // Replace non-alphanumeric with underscores
        .replace(/__+/g, '_')        // Replace multiple underscores with single
        .replace(/^_|_$/g, '');      // Remove leading/trailing underscores
      
      result[header] = cleaned;
      console.log(`Unknown header "${header}" - using cleaned version: "${cleaned}"`);
    }
  });
  
  return result;
};

/**
 * Import tasks from CSV content
 * 
 * @param csvContent The CSV content to import
 * @returns Promise resolving to the parsing result with added API responses
 */
export const importTasksFromCSV = async (csvContent: string): Promise<ParsingResult> => {
  console.log('Starting import from CSV...');
  
  // Parse the CSV content
  const result = parseCSV(csvContent);
  console.log('Parsed tasks:', result.parsedTasks.length, 'Warnings:', result.warnings.length, 'Errors:', result.errors.length);
  
  // If there are errors but we have tasks, convert errors to warnings and continue
  if (result.errors.length > 0 && result.parsedTasks.length > 0) {
    console.log('Converting errors to warnings and continuing with import since we have tasks');
    // Move errors to warnings
    result.warnings.push(...result.errors.map(error => `Import proceeded despite error: ${error}`));
    // Clear errors to allow import to proceed
    result.errors = [];
  } else if (result.parsedTasks.length === 0) {
    result.errors.push('No valid tasks found to import.');
    return result;
  }
  
  console.log('First task example:', JSON.stringify(result.parsedTasks[0], null, 2));
  
  // Import each task
  let successCount = 0;
  for (let i = 0; i < result.parsedTasks.length; i++) {
    const taskData = result.parsedTasks[i];
    try {
      console.log(`Importing task ${i+1}/${result.parsedTasks.length}:`, taskData.name || 'Unnamed task');
      
      // Make sure we have required fields
      if (!taskData.name) {
        result.errors.push(`Task at index ${i} is missing required 'name' field.`);
        continue;
      }
      
      if (!taskData.task_goal) {
        // Add a default task goal if it's missing
        taskData.task_goal = `Successfully complete: ${taskData.name}`;
      }
      
      if (!taskData.input_data_context) {
        // Add a default input context if it's missing
        taskData.input_data_context = 'No additional context provided.';
      }
      
      // Ensure required arrays are initialized
      if (!taskData.portfolio) taskData.portfolio = [];
      if (!taskData.project) taskData.project = [];
      if (!taskData.section) taskData.section = [];
      if (!taskData.tags) taskData.tags = [];

      // Check if task with this task_id already exists (for update)
      let existingTask = null;
      if (taskData.task_id) {
        console.log('Checking for existing task with task_id:', taskData.task_id);
        try {
          const searchResponse = await fetch(`/api/tasks?taskId=${encodeURIComponent(String(taskData.task_id))}`, {
            method: 'GET'
          });

          if (searchResponse.ok) {
            const tasks = await searchResponse.json();
            if (tasks && Array.isArray(tasks) && tasks.length > 0) {
              existingTask = tasks[0]; // Store the full task object
              console.log(`Found existing task with task_id ${taskData.task_id}, database ID: ${existingTask.id}`);
            } else {
              console.log(`No existing task found with task_id ${taskData.task_id}`);
            }
          } else {
            console.error(`Error searching for task with task_id ${taskData.task_id}:`, searchResponse.statusText);
          }
        } catch (error) {
          console.error(`Exception searching for task with task_id ${taskData.task_id}:`, error);
        }
      }

      // Handle date fields properly
      const processedTaskData: any = { ...taskData };
      
      // Convert date strings to proper Date objects for the API
      if (typeof processedTaskData.due_date === 'string' && processedTaskData.due_date !== 'NaN') {
        try {
          // Try parsing as date
          const parsedDate = new Date(processedTaskData.due_date);
          if (isNaN(parsedDate.getTime())) {
            result.warnings.push(`Row ${i + 1}, field "due_date": Invalid date format: "${processedTaskData.due_date}"`);
            delete processedTaskData.due_date; // Remove invalid date
          } else {
            processedTaskData.due_date = parsedDate;
          }
        } catch (e) {
          result.warnings.push(`Row ${i + 1}, field "due_date": Error parsing date: "${processedTaskData.due_date}"`);
          delete processedTaskData.due_date;
        }
      } else if (processedTaskData.due_date === 'NaN') {
        delete processedTaskData.due_date;
      }
      
      // Process other date fields similarly
      ['start_date', 'created_at', 'completed_at', 'last_modified_at'].forEach(field => {
        if (typeof processedTaskData[field] === 'string' && processedTaskData[field] !== 'NaN') {
          try {
            const date = new Date(processedTaskData[field]);
            if (!isNaN(date.getTime())) {
              processedTaskData[field] = date;
            } else {
              delete processedTaskData[field];
            }
          } catch (e) {
            delete processedTaskData[field];
          }
        } else if (processedTaskData[field] === 'NaN') {
          delete processedTaskData[field];
        }
      });
      
      // Handle text fields that might contain arrays or special characters needing transformation
      // These are fields that should be plain strings but might come in as arrays from CSV parsing
      const textFields = [
        'name', 'description', 'notes', 'task_comments', 'related_entities', 'related_tasks', 
        'task_goal', 'input_data_context', 'specific_constraints_instructions',
        'ai_action_process_free_text', 'ai_agent_status_log', 'ai_output_result_link',
        'feedback_for_ai', 'expected_impact_success_metric', 'subtasks_for_user', 
        'subtasks_for_ai', 'subtasks_in_system', 'potential_dependencies_related_tasks'
      ];
      
      textFields.forEach(field => {
        if (field in processedTaskData) {
          // If the field is an array but should be a string, join it
          if (Array.isArray(processedTaskData[field])) {
            processedTaskData[field] = processedTaskData[field].join(', ');
          }
          // Convert null to empty string for text fields
          if (processedTaskData[field] === null) {
            processedTaskData[field] = '';
          }
        }
      });
      
      // Clean up 'NaN' values in other fields
      Object.keys(processedTaskData).forEach(key => {
        if (processedTaskData[key] === 'NaN') {
          if (Array.isArray(processedTaskData[key])) {
            processedTaskData[key] = [];
          } else {
            processedTaskData[key] = null;
          }
        }
      });

      // Validate option fields against TASK_FIELD_CONFIG
      // First, identify dropdown and multi-select fields
      Object.entries(TASK_FIELD_CONFIG).forEach(([fieldName, config]) => {
        if (processedTaskData[fieldName] !== undefined && processedTaskData[fieldName] !== null) {
          if (config.type === 'dropdown' && config.options) {
            // For dropdown fields, check if value is in allowed options
            if (!config.options.includes(processedTaskData[fieldName])) {
              result.warnings.push(`Row ${i + 1}, field "${fieldName}": Value "${processedTaskData[fieldName]}" is not in allowed options`);
              // Keep the field value but with warning (don't fail the import)
            }
          } else if (config.type === 'multi-select' && config.options && Array.isArray(processedTaskData[fieldName])) {
            // For multi-select fields, check each value
            processedTaskData[fieldName] = processedTaskData[fieldName].filter(value => {
              if (!config.options?.includes(value)) {
                result.warnings.push(`Row ${i + 1}, field "${fieldName}": Value "${value}" is not in allowed options`);
                return false; // Filter out invalid values
              }
              return true;
            });
          }
        }
      });

      let response;
      
      try {
        if (existingTask) {
          // Update existing task
          console.log(`Updating existing task with ID ${existingTask.id}:`, processedTaskData.name);
          
          // Important: Don't send task_id in the update data to avoid unique constraint errors
          const updateData = { ...processedTaskData };
          delete updateData.task_id;
          
          response = await fetch(`/api/tasks`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...updateData,
              id: existingTask.id
            }),
          });
        } else {
          // Create new task
          console.log('Creating new task:', processedTaskData.name);
          
          // If task_id is provided, use it for the new task
          // No need to generate a new task_id if one is already provided
          // This allows importing tasks with specific IDs
          const createData = { ...processedTaskData };
          
          response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(createData),
          });
        }
      } catch (error) {
        result.errors.push(`API error for task ${i+1}: ${(error as Error).message}`);
        continue;
      }

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = existingTask 
          ? `Failed to update task with ID ${existingTask.id}` 
          : 'Failed to create new task';
        try {
          const errorData = JSON.parse(errorText);
          errorMessage += `: ${errorData.error || response.statusText}`;
        } catch {
          errorMessage += `: ${errorText || response.statusText}`;
        }
        result.errors.push(errorMessage);
      } else {
        successCount++;
      }
      
    } catch (error) {
      result.errors.push(`API error for task ${i+1}: ${(error as Error).message}`);
    }
  }
  
  console.log(`Import completed: ${successCount} tasks imported successfully out of ${result.parsedTasks.length}`);
  
  return result;
};

// Dummy for compatibility (not needed with papaparse, but keep for API)
const parseCSVRow = (line: string): string[] => {
  // Use PapaParse to parse a single line
  const parsed = Papa.parse(line, { delimiter: ',', skipEmptyLines: true });
  // Ensure we always return a string array
  return (parsed.data[0] as string[]) || [];
};
