import type { Task } from '@prisma/client';
import { TASK_FIELD_CONFIG } from '@/config/TASK_FIELD_CONFIG';

/**
 * Formats an ID as a simple sequential number
 * @param id The original ID
 * @param index The index in the task array (for sequential ordering)
 * @returns Formatted ID string (e.g., "1", "2", "3")
 */
const formatTaskId = (id: string, index: number): string => {
  // Use index + 1 to start from 1 instead of 0, and return as a simple number
  return String(index + 1);
};

/**
 * Converts a value to a CSV-friendly string.
 * Handles arrays, objects, dates, etc.
 * 
 * @param value The value to convert
 * @param fieldName The name of the field being formatted (for special handling)
 * @param index The index of the task in the array (for ID formatting)
 * @returns A string representation suitable for CSV
 */
const formatValueForCsv = (value: any, fieldName?: string, index?: number): string => {
  if (value === null || value === undefined) return '';
  
  // Special handling for ID fields to make them sequential with leading zeros
  if (fieldName === 'id' && index !== undefined) {
    return formatTaskId(String(value), index);
  }
  // Make task_id the same as id
  if (fieldName === 'task_id' && index !== undefined) {
    return formatTaskId(String(value), index);
  }
  
  if (Array.isArray(value)) {
    // List of fields that need special array handling
    const arrayFields = [
      'portfolio', 'project', 'section', 'tags', 'desired_output_format', 
      'desired_style_tone', 'ai_action_process_dropdown', 'required_tools_software',
      'required_hardware', 'required_skills', 'required_devices',
      'optimal_time_of_day', 'related_portfolios', 'related_projects',
      'related_sections', 'related_entities'
    ];

    // For multi-select fields, use semicolons as separators inside quotes
    if (fieldName && arrayFields.includes(fieldName)) {
      // Join with semicolons and wrap in quotes
      const content = value.join('; ');
      return `"${content.replace(/"/g, '""')}"`;
    } else {
      // For other arrays, use standard CSV format with commas
      return value.map(item => `"${String(item).replace(/"/g, '""')}"`).join(', ');
    }
  } else if (value instanceof Date) {
    // Format dates as ISO strings
    return value.toISOString();
  } else if (typeof value === 'object') {
    // Convert objects to JSON strings, wrapped in quotes
    return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
  } else if (typeof value === 'string') {
    // Escape quotes in strings and wrap in quotes
    return `"${value.replace(/"/g, '""')}"`;
  }
  
  // Return other types as strings
  return String(value);
};

/**
 * Exports an array of tasks to CSV format
 * 
 * @param tasks Array of tasks to export
 * @param includeAllFields Whether to include all fields (true) or only common fields (false)
 * @returns CSV string with header and data rows
 */
export const tasksToCSV = (tasks: Task[], includeAllFields = false): string => {
  // If no tasks, return empty string or header only
  if (!tasks || tasks.length === 0) {
    return 'No tasks to export';
  }
  
  // Sort tasks by creation date to ensure chronological IDs
  const sortedTasks = [...tasks].sort((a, b) => {
    const dateA = a.created_at instanceof Date ? a.created_at : new Date(a.created_at);
    const dateB = b.created_at instanceof Date ? b.created_at : new Date(b.created_at);
    return dateA.getTime() - dateB.getTime(); // Ascending order by creation date
  });
  
  // Determine which fields to include
  const fieldEntries = Object.entries(TASK_FIELD_CONFIG);
  const fieldsToInclude = includeAllFields 
    ? ['task_id', ...fieldEntries.map(([fieldName]) => fieldName).filter(field => field !== 'id' && field !== 'task_id')]
    : [
        'task_id', 'name', 'portfolio', 'project', 'section', 'priority',
        'due_date', 'task_goal', 'input_data_context', 'ai_workflow_status',
        'completed_at', 'created_at', 'updated_at'
      ];
  
  // Create header row
  const header = fieldsToInclude.map(fieldName => 
    `"${fieldName.replace(/"/g, '""')}"`
  ).join(',');
  
  // Create data rows
  const rows = sortedTasks.map((task, index) => {
    const values = fieldsToInclude.map(fieldName => {
      // Special case for task_id - just use the task index for a simple sequential number
      if (fieldName === 'task_id') {
        return String(index);
      }
      
      const value = task[fieldName as keyof Task];
      return formatValueForCsv(value, fieldName, index);
    });
    return values.join(',');
  });
  
  // Combine header and rows
  return [header, ...rows].join('\n');
};

/**
 * Creates and downloads a CSV file in the browser
 * 
 * @param csvContent CSV content as a string
 * @param filename Name of the file to download
 */
export const downloadCSV = (csvContent: string, filename = 'tasks.csv'): void => {
  // Create a blob with the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // Create a download link
  const link = document.createElement('a');
  
  // Set up the download
  if ('msSaveBlob' in navigator) {
    // For IE
    (navigator as any).msSaveBlob(blob, filename);
  } else {
    // For other browsers
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Clean up
  }
};

/**
 * Export tasks and trigger download of the CSV file
 * 
 * @param tasks Array of tasks to export
 * @param includeAllFields Whether to include all fields in the export
 * @param filename Name of the CSV file to download
 */
export const exportTasksToCSV = (
  tasks: Task[], 
  includeAllFields = false,
  filename = 'tasks.csv'
): void => {
  const csvContent = tasksToCSV(tasks, includeAllFields);
  downloadCSV(csvContent, filename);
};
