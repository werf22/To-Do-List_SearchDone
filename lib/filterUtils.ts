import { TASK_FIELD_CONFIG, TaskFieldConfig } from '@/config/TASK_FIELD_CONFIG';

// Assuming RangeValue and AllFiltersState might be defined elsewhere or need definition
// For now, defining simple RangeValue here
export type RangeValue = { gte?: Date | number | null; lte?: Date | number | null };

// Centralized type definition for filter state - Using explicit properties
export type AllFiltersState = {
  // --- Multi-Select --- 
  portfolio?: string[] | undefined;
  project?: string[] | undefined;
  section?: string[] | undefined;
  tags?: string[] | undefined;
  related_entities?: string[] | undefined;
  related_tasks?: string[] | undefined;
  required_tools_software?: string[] | undefined;
  required_hardware?: string[] | undefined;
  required_skills?: string[] | undefined;
  required_devices?: string[] | undefined;
  optimal_time_of_day?: string[] | undefined;
  ai_action_process_dropdown?: string[] | undefined; // Assuming this is multi-select

  // --- Dates (allow null/undefined) --- 
  due_date_before?: Date | null | undefined;
  due_date_after?: Date | null | undefined;
  created_at_before?: Date | null | undefined;
  created_at_after?: Date | null | undefined;

  // --- Numbers (allow null/undefined) ---
  estimated_cost_budget_min?: number | null | undefined;
  estimated_cost_budget_max?: number | null | undefined;

  // --- Boolean --- 
  allow_autonomous_execution?: boolean | undefined;
  hideEmptyFilters?: boolean | undefined;

  // --- String/Dropdowns/Text etc. --- 
  priority?: string | undefined;
  status?: string | undefined;
  name_contains?: string | undefined;
  description_contains?: string | undefined;
  notes_contains?: string | undefined;
  subtasks_for_user_contains?: string | undefined;
  financial_aspect?: string | undefined;
  task_type?: string | undefined;
  deadline_type?: string | undefined;
  recurrence_frequency?: string | undefined;
  internet_requirement?: string | undefined;
  waiting_for?: string | undefined;
  ai_workflow_status?: string | undefined;
  cognitive_load?: string | undefined;
  energy_level_required?: string | undefined;
  time_required_estimated?: RangeValue;

  // --- Checkboxes (assuming these are the boolean fields not covered above) ---
  // Add any checkbox fields here explicitly, e.g.:
  // is_urgent?: boolean | undefined;

  // Add index signature back to allow dynamic access using string keys, including null
  [key: string]: string | string[] | boolean | number | Date | RangeValue | null | undefined;
}; // Removed & { hideEmptyFilters?: boolean }; as it's included now

// Helper type guard for RangeValue (can be refined)
function isRangeValue(value: any): value is RangeValue {
  return typeof value === 'object' && value !== null && ('gte' in value || 'lte' in value);
}

// Define the expected return type more accurately based on AllFiltersState
type FilterValue<T extends TaskFieldConfig['type']> =
    T extends 'text' | 'textarea' | 'dropdown' ? string | undefined :
    T extends 'multi-select' ? string[] | undefined : // Allow undefined for multi-select if no default
    T extends 'date' | 'number' ? RangeValue | undefined : // Allow undefined if no default range
    T extends 'checkbox' ? boolean | undefined :
    any; // Fallback

// Function to get the default value for a filter based on its configuration
export function getDefaultValue(config: TaskFieldConfig): any { // Return type 'any' is acceptable here, or could be refined further
    // Check for explicit defaultFilterValue first
    // Check if the property exists and is not undefined
    if ('defaultFilterValue' in config && config.defaultFilterValue !== undefined) {
        return config.defaultFilterValue;
    }

    // Otherwise, return type-based defaults
    switch (config.type) {
        case 'text':
        case 'textarea':
            return '';
        case 'dropdown':
            return undefined; // Separate case for clarity
        case 'multi-select':
            return []; // Empty array for multi-select
        case 'checkbox':
            return false; // Checkbox default is false
        case 'date':
        case 'number':
            // Default to an empty range object
             return { gte: null, lte: null };
        // Handle other potential types explicitly if needed, e.g., relation, url, email, phone, id
        // case 'relation':
        // case 'url':
        // ... return appropriate defaults ...
        default:
             // const exhaustiveCheck: never = config.type; // Temporarily comment out for non-exhaustive types like relation, url etc.
             return undefined; // Fallback for unknown types
    }
}

// Function to initialize the entire filter state
// NOTE: Needs TASK_FIELD_CONFIG import and correct implementation
export const getDefaultFiltersState = (): AllFiltersState => {
    // Implementation depends on TASK_FIELD_CONFIG structure
    // Need to import TASK_FIELD_CONFIG here
    // Example:
    // import { TASK_FIELD_CONFIG } from '@/config/TASK_FIELD_CONFIG';
    // return Object.entries(TASK_FIELD_CONFIG)
    //     .filter(([key, config]) => config.filterable)
    //     .reduce((acc, [key, config]) => {
    //         acc[key as keyof AllFiltersState] = getDefaultValue(config as TaskFieldConfig & { type: TaskFieldConfig['type'] });
    //         return acc;
    //     }, {} as AllFiltersState);
     return {}; // Placeholder - actual implementation needed
};
