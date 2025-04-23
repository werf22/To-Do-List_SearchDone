'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import type { Task } from '@prisma/client';
import { TASK_FIELD_CONFIG } from '@/config/TASK_FIELD_CONFIG';
import MultiSelect from '@/components/ui/MultiSelect';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'; // Corrected casing
import TaskDetailContent from '@/components/TaskDetailContent';

// Type of the parameters received by the page component
interface TaskDetailPageProps {
  // params: {
  //   id: string;
  // };
}

export default function TaskDetailPage() {
  const router = useRouter();
  const paramsFromHook = useParams(); // Use the hook
  // Safely access id, ensuring it's treated as a string or undefined
  const id = typeof paramsFromHook?.id === 'string' ? paramsFromHook.id : undefined;

  // State for the task data, loading status, error, and edit mode
  const [task, setTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState<Partial<Task>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch the task data when the component mounts
  useEffect(() => {
    async function fetchTask() {
      // Only fetch if id is a valid string
      if (!id) {
        setError('Task ID not found in URL.');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        console.log(`Fetching task ${id}...`);
        const response = await fetch(`/api/tasks/${id}`);
        
        if (!response.ok) {
          let errorMsg = `HTTP error! status: ${response.status} ${response.statusText}`;
          try {
            const errorData = await response.json();
            errorMsg = errorData.error || errorMsg;
          } catch (jsonError) {
            console.warn("Could not parse error response as JSON:", jsonError);
          }
          throw new Error(errorMsg);
        }
        
        const data = await response.json();
        console.log("Task fetched:", data);
        setTask(data);
        setEditedTask(data); // Initialize edited task with current data
      } catch (e: any) {
        console.error(`Error fetching task ${id}:`, e);
        setError(`Failed to load task. ${e.message || 'Please try again later.'}`);
        setTask(null);
      } finally {
        setIsLoading(false);
      }
    }
    
    if (id) {
      fetchTask();
    }
  }, [id]);

  // Handle field change in edit mode
  const handleFieldChange = (fieldName: string, newValue: any) => {
    console.log(`Changing field ${fieldName} to:`, newValue);
    setEditedTask((prev) => ({
      ...prev,
      [fieldName]: newValue,
    }));
  };

  // Save changes to the task
  const handleSave = async () => {
    if (!task || !editedTask) return;
    
    setIsSaving(true);
    setSaveError(null);
    
    try {
      console.log(`Saving changes to task ${id}...`);
      
      // Process multi-select fields before sending to backend
      const processedTask = { ...editedTask };
      
      // Helper function to properly split comma-separated values with quotes
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
      
      // Fields that should be arrays
      const arrayFields = [
        'portfolio', 'project', 'section', 'tags', 'desired_output_format', 
        'desired_style_tone', 'ai_action_process_dropdown', 'required_tools_software',
        'required_hardware', 'required_skills', 'required_devices',
        'optimal_time_of_day', 'related_portfolios', 'related_projects',
        'related_sections', 'related_entities'
      ];
      
      // Special hierarchical fields (portfolio, project, section)
      // These have a concept of "primary" value (first in array), but should be stored consistently
      const hierarchyFields = ['portfolio', 'project', 'section'];
      
      // Ensure array fields are properly formatted
      arrayFields.forEach(field => {
        if (field in processedTask) {
          const value = processedTask[field as keyof typeof processedTask];
          
          // For hierarchy fields (portfolio, project, section), ensure the first value is preserved
          // but still send all values as a proper array
          if (hierarchyFields.includes(field) && value !== null && value !== undefined) {
            console.log(`Processing hierarchy field ${field}:`, value);
            
            let arrayValue: string[] = [];
            
            // Convert to array if it's a string
            if (typeof value === 'string') {
              // Use proper CSV parsing that respects quotes
              arrayValue = splitCsvWithQuotes(value);
            } else if (Array.isArray(value)) {
              arrayValue = [...value]; // Create a copy to avoid modifying the original
            }
            
            // Ensure at least one value if it's a hierarchy field
            if (arrayValue.length === 0 && typeof value === 'string' && value.trim()) {
              arrayValue = [value.trim()];
            }
            
            console.log(`Processed hierarchy field ${field} to:`, arrayValue);
            (processedTask as any)[field] = arrayValue;
          } 
          // For regular multi-select fields
          else if (Array.isArray(value)) {
            // Keep arrays as arrays
            console.log(`Field ${field} is already an array:`, value);
          } else if (typeof value === 'string' && value) {
            // Convert string to array with quote-aware CSV parsing
            console.log(`Converting string ${field} to array:`, value);
            (processedTask as any)[field] = splitCsvWithQuotes(value);
          } else if (value === null || value === undefined) {
            // Use empty array for null/undefined
            console.log(`Setting empty array for ${field}`);
            (processedTask as any)[field] = [];
          }
        }
      });
      
      console.log("Processed task data:", processedTask);
      
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(processedTask),
      });
      
      if (!response.ok) {
        let errorMsg = `HTTP error! status: ${response.status} ${response.statusText}`;
        try {
          const errorData = await response.json();
          errorMsg = errorData.error || errorMsg;
        } catch (jsonError) {
          console.warn("Could not parse error response as JSON:", jsonError);
        }
        throw new Error(errorMsg);
      }
      
      const updatedTask = await response.json();
      console.log("Task updated:", updatedTask);
      setTask(updatedTask);
      setEditedTask(updatedTask);
      setIsEditing(false);
    } catch (e: any) {
      console.error(`Error updating task ${id}:`, e);
      setSaveError(`Failed to save changes. ${e.message || 'Please try again later.'}`);
    } finally {
      setIsSaving(false);
    }
  };

  // Delete the task
  const handleDelete = async () => {
    console.log('[handleDelete] Clicked'); // <-- Log: Click detected
    if (!task) {
      console.log('[handleDelete] No task loaded, exiting.');
      return;
    }

    console.log(`[handleDelete] Prompting user for task: ${task.name} (ID: ${id})`);
    if (window.confirm(`Are you sure you want to delete task "${task.name}"? This action cannot be undone.`)) {
      console.log('[handleDelete] User confirmed deletion.'); // <-- Log: Confirmation received
      setIsDeleting(true);
      setSaveError(null); // Clear previous errors
      try {
        console.log(`[handleDelete] Sending DELETE request to /api/tasks/${id}`); // <-- Log: Fetch initiated
        const response = await fetch(`/api/tasks/${id}`, {
          method: 'DELETE',
        });

        console.log(`[handleDelete] Received response status: ${response.status}`); // <-- Log: Response status

        if (!response.ok) {
          let errorMsg = `HTTP error! status: ${response.status} ${response.statusText}`;
          try {
            const errorData = await response.json();
            console.log('[handleDelete] Error response body:', errorData); // <-- Log: Error body
            errorMsg = errorData.error || errorMsg;
          } catch (jsonError) {
            console.warn("[handleDelete] Could not parse error response as JSON:", jsonError);
          }
          throw new Error(errorMsg);
        }

        console.log(`[handleDelete] Task ${id} deleted successfully via API.`);
        router.push('/'); // Redirect to home page after successful deletion

      } catch (e: any) {
        console.error(`[handleDelete] Error during deletion API call:`, e);
        setSaveError(`Failed to delete task. ${e.message || 'Please try again later.'}`); // Reuse saveError state
      } finally {
        console.log('[handleDelete] Resetting isDeleting state.');
        setIsDeleting(false);
      }
    } else {
      console.log('[handleDelete] User cancelled deletion.'); // <-- Log: Confirmation cancelled
    }
  };

  // Cancel editing and revert changes
  const handleCancel = () => {
    setEditedTask(task || {});
    setIsEditing(false);
    setSaveError(null);
  };

  // Helper function to format field values for display
  const formatFieldValue = (fieldName: string, value: any): string => {
    if (value === null || value === undefined) return 'N/A';
    
    // Handle different types of values
    if (Array.isArray(value)) {
      // Always join arrays with comma for display
      return value.join(', ');
    } else if (value instanceof Date) {
      return value.toLocaleDateString();
    } else if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
      // Format date string values
      const date = new Date(value);
      return isNaN(date.getTime()) ? value : date.toLocaleDateString();
    } else if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    } else if (typeof value === 'object') {
      return JSON.stringify(value);
    }
    
    return String(value);
  };

  // Render field based on its type
  const renderField = (fieldName: string) => {
    const config = TASK_FIELD_CONFIG[fieldName];
    if (!config || !editedTask) return null;

    if (!isEditing) {
      // Display the field value in read-only mode
      return (
        <div className="p-2 bg-gray-50 rounded-md break-words">
          {fieldName === 'notes' || fieldName === 'description' || fieldName === 'task_comments' ? (
            <div className="whitespace-pre-wrap">{editedTask[fieldName as keyof Task] ? String(editedTask[fieldName as keyof Task]) : 'N/A'}</div>
          ) : (
            formatFieldValue(fieldName, editedTask[fieldName as keyof Task])
          )}
        </div>
      );
    }

    // Edit Mode Logic
    switch (config.type) {
      case 'text':
      case 'textarea':
        const InputComponent = config.type === 'textarea' ? 'textarea' : 'input';
        return (
          <InputComponent
            value={editedTask[fieldName as keyof Task] as string || ''}
            onChange={(e) => handleFieldChange(fieldName, e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder={config.label || `Enter ${fieldName}...`}
            rows={config.type === 'textarea' ? 5 : undefined}
          />
        );
      case 'dropdown':
        // Fix 1: Correct Select component usage
        const currentValue = editedTask[fieldName as keyof Task] as string | undefined;
        return (
          <Select
            value={currentValue ?? ''} // Use correct value prop, handle undefined
            onValueChange={(value) => handleFieldChange(fieldName, value === '' ? undefined : value)} // Use correct handler prop
          >
            <SelectTrigger>
              <SelectValue placeholder={config.label || `Select ${fieldName}...`} />
            </SelectTrigger>
            <SelectContent>
              {config.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 'multi-select':
        const currentMultiValue = editedTask[fieldName as keyof Task] as string[] | undefined;
        return (
          <MultiSelect
            label=""
            value={currentMultiValue || []}
            onChange={(newValue) => handleFieldChange(fieldName, newValue)}
            options={config.options || []}
            placeholder={`Select ${config.label}...`}
          />
        );
      case 'date':
        // Fix 1, 2, 3: Add checks before formatting/parsing date
        const dateValue = editedTask[fieldName as keyof Task]; // Get the raw value
        let displayValue = ''; // Default to empty string for the input value

        if (dateValue instanceof Date) {
          try {
            displayValue = dateValue.toISOString().split('T')[0]; // Safe to call now
          } catch (e) { console.error("Error formatting date:", e); }
        } else if (typeof dateValue === 'string' && dateValue) {
          // Attempt to parse string and format, handle invalid date strings
          try {
            const parsedDate = new Date(dateValue); // Safe if dateValue is a valid string
            if (!isNaN(parsedDate.getTime())) {
              displayValue = parsedDate.toISOString().split('T')[0];
            }
          } catch (e) { console.error("Error parsing/formatting date string:", e); }
        }

        return (
          <input
            type="date"
            value={displayValue} // Use the safely formatted value
            // Pass the date string directly, or null if empty
            onChange={(e) => handleFieldChange(fieldName, e.target.value || null)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        );
      case 'number':
        return (
          <input
            type="number"
            value={editedTask[fieldName as keyof Task] as number || ''}
            onChange={(e) => handleFieldChange(fieldName, e.target.valueAsNumber || null)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        );
      default:
        return <span>Unsupported field type</span>;
    }
  };

  // Group fields by category for organized display
  const fieldGroups = {
    'Core Information': ['task_id', 'name', 'description', 'notes', 'task_comments'],
    'Hierarchy & Categorization': ['portfolio', 'project', 'section', 'parent_task', 'parent_task_id'],
    'Subtasks & Dependencies': [
      'subtasks_for_user', 'subtasks_for_ai', 'subtasks_in_system', 'subtasks_id_in_system',
      'dependents', 'dependents_id', 'outgoing_dependents', 'outgoing_dependents_id',
      'related_tasks', 'related_tasks_id'
    ],
    'Tagging & Attributes': [
      'tags', 'priority', 'due_date', 'start_date', 'deadline_type',
      'recurrence_frequency', 'created_at', 'completed_at', 'last_modified_at'
    ],
    'AI Workflow & Control': [
      'ai_workflow_status', 'allow_autonomous_execution', 'ai_behavior_on_uncertainty', 
      'ai_creativity_level', 'ai_processing_priority', 'ai_agent_status_log',
      'number_of_variations', 'feedback_for_ai', 'ai_output_rating', 'ai_output_result_link',
      'action_required_from_user'
    ],
    'AI Input & Context': [
      'task_goal', 'input_data_context', 'desired_output_format', 'desired_style_tone',
      'specific_constraints_instructions', 'ai_action_process_free_text', 'ai_action_process_dropdown',
      'ai_brainstorm_ideas_on_how_it_can_help_me'
    ],
    'User Context & Requirements': [
      'task_type', 'estimated_user_time', 'cognitive_load', 'energy_level_required',
      'required_tools_software', 'required_hardware', 'required_skills', 'location',
      'execution_location', 'required_devices', 'internet_requirement', 'focus_requirement',
      'optimal_time_of_day'
    ],
    'Relationships & Impact': [
      'related_portfolios', 'related_projects', 'related_sections', 'related_entities',
      'target_audience', 'task_purpose', 'expected_impact_success_metric', 'waiting_for'
    ],
    'Financials': [
      'estimated_cost_budget', 'financial_return_value_speed', 'financial_aspect'
    ],
    'Input-Only Fields': [
      'suggested_initial_steps_subtasks', 'related_areas_for_ai_to_consider', 
      'potential_dependencies_related_tasks'
    ]
  };

  // If loading
  if (isLoading) {
    return (
      <div className="container mx-auto max-w-5xl p-4 md:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Loading Task...</h1>
          <Link 
            href="/"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
          >
            Back to List
          </Link>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-36 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-60 bg-gray-200 rounded w-full mb-4"></div>
        </div>
      </div>
    );
  }

  // If error
  if (error) {
    return (
      <div className="container mx-auto max-w-5xl p-4 md:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Error</h1>
          <Link 
            href="/"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
          >
            Back to List
          </Link>
        </div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  // If no task
  if (!task) {
    return (
      <div className="container mx-auto max-w-5xl p-4 md:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Task Not Found</h1>
          <Link 
            href="/"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
          >
            Back to List
          </Link>
        </div>
        <p>The requested task does not exist or has been deleted.</p>
      </div>
    );
  }

  // Main render with task data
  return (
    <div className="container mx-auto max-w-5xl p-4 md:p-6 lg:p-8">
      {/* Header with task name and actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-800 break-words">{task.name}</h1>
          
          <div className="flex flex-wrap gap-2">
            {task.ai_workflow_status && (
              <span className={`px-3 py-1 rounded-full font-medium text-sm ${
                task.ai_workflow_status.startsWith('1') ? 'bg-gray-100 text-gray-700' :
                task.ai_workflow_status.startsWith('2') ? 'bg-yellow-100 text-yellow-700' :
                task.ai_workflow_status.startsWith('3') ? 'bg-blue-100 text-blue-700' :
                task.ai_workflow_status.startsWith('4') ? 'bg-purple-100 text-purple-700' :
                task.ai_workflow_status.startsWith('5') ? 'bg-pink-100 text-pink-700 font-bold' :
                task.ai_workflow_status.startsWith('6') ? 'bg-green-100 text-green-700' :
                task.ai_workflow_status.startsWith('7') ? 'bg-gray-300 text-gray-600' :
                'bg-gray-100 text-gray-700'
              }`}
              >
                {task.ai_workflow_status}
              </span>
            )}
            {task.priority && (
              <span className={`px-3 py-1 rounded-full font-medium text-sm ${
                task.priority.startsWith('P0') ? 'bg-red-100 text-red-800' :
                task.priority.startsWith('P1') ? 'bg-orange-100 text-orange-800' :
                task.priority.startsWith('P2') ? 'bg-yellow-100 text-yellow-800' :
                task.priority.startsWith('P3') ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}
              >
                {task.priority}
              </span>
            )}
            {task.due_date && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium text-sm">
                Due: {new Date(task.due_date).toLocaleDateString()}
              </span>
            )}
          </div>
          
          {/* Hierarchy Navigation */}
          <div className="text-sm text-gray-500 mt-2">
            {task.portfolio && task.portfolio.length > 0 && (
              <div className="flex flex-wrap items-center gap-1">
                <span>Portfolio:</span>
                {task.portfolio.map((p, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded">
                    {p}
                  </span>
                ))}
              </div>
            )}
            {task.project && task.project.length > 0 && (
              <div className="flex flex-wrap items-center gap-1 mt-1">
                <span>Project:</span>
                {task.project.map((p, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded">
                    {p}
                  </span>
                ))}
              </div>
            )}
            {task.section && task.section.length > 0 && (
              <div className="flex flex-wrap items-center gap-1 mt-1">
                <span>Section:</span>
                {task.section.map((s, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={handleCancel}
                disabled={isSaving}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Edit Task
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isDeleting ? 'Deleting...' : 'Delete Task'}
              </button>
              <Link 
                href="/"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              >
                Back to List
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Save error message */}
      {saveError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Error saving changes:</strong>
          <span className="block sm:inline"> {saveError}</span>
        </div>
      )}

      {/* Main Content Area - using our new component */}
      <TaskDetailContent
        task={task}
        isEditing={isEditing}
        editedTask={editedTask}
        handleFieldChange={handleFieldChange}
        renderField={renderField}
        formatFieldValue={formatFieldValue}
      />
    </div>
  );
}
