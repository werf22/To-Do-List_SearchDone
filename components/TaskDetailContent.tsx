import React from 'react';
import type { Task } from '@prisma/client';
import { TASK_FIELD_CONFIG } from '@/config/TASK_FIELD_CONFIG';

interface TaskDetailContentProps {
  task: Task;
  isEditing: boolean;
  editedTask: Partial<Task>;
  handleFieldChange: (fieldName: string, value: any) => void;
  renderField: (fieldName: string, fieldConfig: any) => React.ReactNode;
  formatFieldValue: (fieldName: string, value: any) => string;
}

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

// Primary fields that are shown in the main view (without expanding details)
const primaryFields = [
  'name', 
  'task_goal', 
  'input_data_context', 
  'notes', 
  'task_comments', 
  'ai_workflow_status',
  'priority', 
  'due_date',
  'portfolio',
  'project',
  'section',
  'tags',
  'subtasks_for_user',
  'action_required_from_user'
];

export const TaskDetailContent: React.FC<TaskDetailContentProps> = ({
  task,
  isEditing,
  editedTask,
  handleFieldChange,
  renderField,
  formatFieldValue
}) => {
  const [showAllDetails, setShowAllDetails] = React.useState(false);
  
  return (
    <div className="space-y-6">
      {/* Focused Primary View (always visible) */}
      <div className="space-y-6">
        {/* Task goal and context section */}
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 font-medium text-gray-700 border-b border-gray-200">
            Task Goal & Context
          </div>
          <div className="p-4 space-y-4">
            {/* Task Goal */}
            <div className="border-b border-gray-100 pb-4">
              <label className="font-medium text-gray-700 mb-1 block">
                {TASK_FIELD_CONFIG['task_goal'].label}
              </label>
              {renderField('task_goal', TASK_FIELD_CONFIG['task_goal'])}
            </div>
            
            {/* Input Data & Context */}
            <div>
              <label className="font-medium text-gray-700 mb-1 block">
                {TASK_FIELD_CONFIG['input_data_context'].label}
              </label>
              {renderField('input_data_context', TASK_FIELD_CONFIG['input_data_context'])}
            </div>
          </div>
        </div>
        
        {/* Notes panel (main information dashboard) */}
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3 font-medium text-gray-700 border-b border-gray-200 flex justify-between items-center">
            <span>📋 Notes (Main Information Panel)</span>
            {task.notes && (
              <button
                onClick={() => navigator.clipboard.writeText(task.notes || '')}
                className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600 transition"
              >
                Copy
              </button>
            )}
          </div>
          <div className="p-4 bg-gray-50 min-h-[120px]">
            {renderField('notes', TASK_FIELD_CONFIG['notes'])}
          </div>
        </div>
        
        {/* Communication Panel (Task Comments) */}
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-3 font-medium text-gray-700 border-b border-gray-200 flex justify-between items-center">
            <span>💬 AI Communication</span>
            {task.task_comments && (
              <button
                onClick={() => navigator.clipboard.writeText(task.task_comments || '')}
                className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600 transition"
              >
                Copy
              </button>
            )}
          </div>
          <div className="p-4 bg-gray-50 min-h-[200px]">
            {renderField('task_comments', TASK_FIELD_CONFIG['task_comments'])}
          </div>
        </div>
        
        {/* User Actions Section */}
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <div className="bg-gradient-to-r from-pink-50 to-amber-50 px-4 py-3 font-medium text-gray-700 border-b border-gray-200">
            Your Next Actions
          </div>
          <div className="p-4 space-y-4">
            {/* Subtasks for User */}
            <div className="border-b border-gray-100 pb-4">
              <label className="font-medium text-gray-700 mb-1 block">
                {TASK_FIELD_CONFIG['subtasks_for_user'].label}
              </label>
              {renderField('subtasks_for_user', TASK_FIELD_CONFIG['subtasks_for_user'])}
            </div>
            
            {/* Action Required From User */}
            <div>
              <label className="font-medium text-gray-700 mb-1 block">
                {TASK_FIELD_CONFIG['action_required_from_user'].label}
              </label>
              {renderField('action_required_from_user', TASK_FIELD_CONFIG['action_required_from_user'])}
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle Button for All Details */}
      <div className="flex justify-center my-6">
        <button
          onClick={() => setShowAllDetails(!showAllDetails)}
          className="px-4 py-2 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition shadow-sm border border-gray-300"
        >
          {showAllDetails ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Hide All Details
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Show All Details
            </>
          )}
        </button>
      </div>
      
      {/* All Details Section (conditionally rendered) */}
      {showAllDetails && (
        <div className="space-y-6 pt-2 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700">All Task Details</h2>
          
          {Object.entries(fieldGroups).map(([groupName, fieldNames]) => (
            <div key={groupName} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                {groupName}
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-4">
                  {fieldNames.map(fieldName => {
                    // Skip primary fields that are already shown in the main view
                    if (primaryFields.includes(fieldName) && fieldName !== 'name') return null;
                    
                    if (!TASK_FIELD_CONFIG[fieldName]) return null;
                    
                    return (
                      <div key={fieldName} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div className="flex flex-col">
                          <label className="font-medium text-gray-700 mb-1">
                            {TASK_FIELD_CONFIG[fieldName].label}
                            {TASK_FIELD_CONFIG[fieldName].description && (
                              <span className="ml-2 text-xs font-normal text-gray-500">
                                {TASK_FIELD_CONFIG[fieldName].description}
                              </span>
                            )}
                          </label>
                          {renderField(fieldName, TASK_FIELD_CONFIG[fieldName])}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskDetailContent;
