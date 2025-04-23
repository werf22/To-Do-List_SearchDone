// app/page.tsx
'use client'; // This directive is necessary for using React Hooks (useState, useEffect)

import { useState, useEffect, useCallback, useRef } from 'react';
import TaskForm from '@/components/TaskForm';     // Component for adding new tasks
import TaskList from '@/components/TaskList';     // Component for displaying tasks
import FilterBar from '@/components/FilterBar'; // Component for filtering tasks
import ImportCSVModal from '@/components/ImportCSVModal'; // Component for importing CSV
import TaskTree from '@/components/task-tree'; // Import TaskTree component
import type { Task } from '@prisma/client';      // Import Task type from generated Prisma Client
import { exportTasksToCSV } from '@/lib/csvExport'; // Import CSV export function
import { TASK_FIELD_CONFIG } from '@/config/TASK_FIELD_CONFIG'; // Task configuration
import { AllFiltersState, getDefaultValue } from '@/lib/filterUtils'; // Filter types and defaults

export default function HomePage() {
  // --- State Management ---
  const [tasks, setTasks] = useState<Task[]>([]); // Holds the list of tasks
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]); // Holds filtered tasks
  const [isLoading, setIsLoading] = useState<boolean>(true); // Tracks loading state for fetching
  const [error, setError] = useState<string | null>(null); // Holds potential error messages
  
  // Track if this is the first load of the component
  const isFirstLoad = useRef(true);
  
  // Initialize with empty filters
  const [filters, setFilters] = useState<AllFiltersState>(() => {
    const initialState: AllFiltersState = {};
    Object.keys(TASK_FIELD_CONFIG).forEach(key => {
      const config = TASK_FIELD_CONFIG[key as keyof typeof TASK_FIELD_CONFIG];
      if (config.filterable) {
        initialState[key as keyof typeof TASK_FIELD_CONFIG] = config.defaultFilterValue ?? getDefaultValue(config);
      }
    });
    initialState.hideEmptyFilters = true; // Default to hiding empty filters
    return initialState;
  });
  const [exportAllFields, setExportAllFields] = useState<boolean>(true); // Default to true to export all fields
  const [isImportModalOpen, setIsImportModalOpen] = useState<boolean>(false); // Controls visibility of import modal

  // --- Data Fetching ---
  // useCallback ensures fetchTasks function identity is stable across renders
  // unless its dependencies change (which are none here).
  const fetchTasks = useCallback(async (useCurrentFilters = true) => {
    console.log("Fetching tasks with filters:", useCurrentFilters ? "yes" : "no");
    setIsLoading(true);
    setError(null); // Reset error before fetching
    try {
      // For initial load, always make a direct call without any filters
      if (!useCurrentFilters) {
        console.log("Making direct API call without filters");
        const response = await fetch('/api/tasks');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        const data: Task[] = await response.json();
        console.log("Tasks fetched (initial load):", data.length);
        setTasks(data);
        setFilteredTasks(data);
        setIsLoading(false);
        return;
      }
      
      // For normal filtered loads, build URL with filter parameters
      const url = new URL('/api/tasks', window.location.origin);
      
      // Add basic filter parameters
      // Handle multi-select array filters for portfolio, project, section
      if (Array.isArray(filters.portfolio)) {
        filters.portfolio.forEach((p: string) => url.searchParams.append('portfolio', p));
      }
      if (Array.isArray(filters.project)) {
        filters.project.forEach((p: string) => url.searchParams.append('project', p));
      }
      if (Array.isArray(filters.section)) {
        filters.section.forEach((s: string) => url.searchParams.append('section', s));
      }
      // Handle single-select filters (assuming these remain single-select)
      if (filters.priority) url.searchParams.append('priority', filters.priority);
      if (filters.status) url.searchParams.append('status', filters.status);
      
      // Add array filters with type guards
      if (Array.isArray(filters.tags)) {
        filters.tags.forEach((tag: string) => url.searchParams.append('tags', tag));
      }
      if (Array.isArray(filters.related_entities)) {
        filters.related_entities.forEach((entity: string) => url.searchParams.append('related_entities', entity));
      }
      if (Array.isArray(filters.related_tasks)) {
        filters.related_tasks.forEach((task: string) => url.searchParams.append('related_tasks', task));
      }
      if (Array.isArray(filters.required_tools_software)) {
        filters.required_tools_software.forEach((tool: string) => url.searchParams.append('required_tools_software', tool));
      }
      if (Array.isArray(filters.required_hardware)) {
        filters.required_hardware.forEach((hw: string) => url.searchParams.append('required_hardware', hw));
      }
      if (Array.isArray(filters.required_skills)) {
        filters.required_skills.forEach((skill: string) => url.searchParams.append('required_skills', skill));
      }
      if (Array.isArray(filters.required_devices)) {
        filters.required_devices.forEach((device: string) => url.searchParams.append('required_devices', device));
      }
      if (Array.isArray(filters.optimal_time_of_day)) {
        filters.optimal_time_of_day.forEach((time: string) => url.searchParams.append('optimal_time_of_day', time));
      }
      if (Array.isArray(filters.ai_action_process_dropdown)) {
        filters.ai_action_process_dropdown.forEach((process: string) => url.searchParams.append('ai_action_process_dropdown', process));
      }
      // --- Portfolio/Project/Section --- 
      if (Array.isArray(filters.portfolio) && filters.portfolio.length > 0) {
        filters.portfolio.forEach((p: string) => url.searchParams.append('portfolio', p));
      }
      if (Array.isArray(filters.project) && filters.project.length > 0) {
        filters.project.forEach((p: string) => url.searchParams.append('project', p));
      }
      if (Array.isArray(filters.section) && filters.section.length > 0) {
        filters.section.forEach((s: string) => url.searchParams.append('section', s));
      }
      
      // Add date filters using temporary variables for type guarding
      const dueDateBefore = filters.due_date_before;
      if (dueDateBefore && dueDateBefore instanceof Date) {
        url.searchParams.append('due_date_before', dueDateBefore.toISOString());
      }
      const dueDateAfter = filters.due_date_after;
      if (dueDateAfter && dueDateAfter instanceof Date) {
        url.searchParams.append('due_date_after', dueDateAfter.toISOString());
      }
      const createdAtBefore = filters.created_at_before;
      if (createdAtBefore && createdAtBefore instanceof Date) {
        url.searchParams.append('created_at_before', createdAtBefore.toISOString());
      }
      const createdAtAfter = filters.created_at_after;
      if (createdAtAfter && createdAtAfter instanceof Date) {
        url.searchParams.append('created_at_after', createdAtAfter.toISOString());
      }
      
      // Add text search filters
      if (filters.name_contains) url.searchParams.append('name_contains', filters.name_contains);
      if (filters.description_contains) url.searchParams.append('description_contains', filters.description_contains);
      if (filters.notes_contains) url.searchParams.append('notes_contains', filters.notes_contains);
      if (filters.subtasks_for_user_contains) url.searchParams.append('subtasks_for_user_contains', filters.subtasks_for_user_contains);
      
      // Add dropdown selections
      if (filters.financial_aspect) url.searchParams.append('financial_aspect', filters.financial_aspect);
      if (filters.task_type) url.searchParams.append('task_type', filters.task_type);
      if (filters.deadline_type) url.searchParams.append('deadline_type', filters.deadline_type);
      if (filters.recurrence_frequency) url.searchParams.append('recurrence_frequency', filters.recurrence_frequency);
      if (filters.internet_requirement) url.searchParams.append('internet_requirement', filters.internet_requirement);
      if (filters.waiting_for) url.searchParams.append('waiting_for', filters.waiting_for);
      
      // Add AI-related filters (some might be boolean/string)
      if (filters.ai_workflow_status) url.searchParams.append('ai_workflow_status', filters.ai_workflow_status);
      if (filters.allow_autonomous_execution !== undefined) url.searchParams.append('allow_autonomous_execution', String(filters.allow_autonomous_execution));
      
      // Add number filters using temporary variables for type guarding
      const budgetMin = filters.estimated_cost_budget_min;
      if (budgetMin != null && typeof budgetMin === 'number') {
         url.searchParams.append('estimated_cost_budget_min', budgetMin.toString());
      }
      const budgetMax = filters.estimated_cost_budget_max;
      if (budgetMax != null && typeof budgetMax === 'number') {
        url.searchParams.append('estimated_cost_budget_max', budgetMax.toString());
      }
      
      // Add other filters
      if (filters.cognitive_load) url.searchParams.append('cognitive_load', filters.cognitive_load);
      if (filters.energy_level_required) url.searchParams.append('energy_level_required', filters.energy_level_required);

      // --- Add Global Search Filter ---
      if (filters.search && typeof filters.search === 'string' && filters.search.trim() !== '') {
        url.searchParams.append('search', filters.search.trim());
      }

      url.searchParams.sort(); // Ensure consistent parameter order for caching/debugging

      // Log the final URL before fetching
      console.log('>>> HomePage: Fetching from URL:', url.toString()); // <-- ADD LOG 3

      console.log("Fetching from URL:", url.toString());
      const response = await fetch(url.toString()); // Call the GET endpoint with filters

      if (!response.ok) {
        // Attempt to read error message from response body, otherwise use status text
        let errorMsg = `HTTP error! status: ${response.status} ${response.statusText}`;
        try {
            const errorData = await response.json();
            errorMsg = errorData.error || errorMsg;
        } catch (jsonError) {
            // Ignore if response body is not JSON or empty
            console.warn("Could not parse error response as JSON:", jsonError);
        }
        throw new Error(errorMsg);
      }

      const data: Task[] = await response.json();
      console.log("Tasks fetched:", data);
      setTasks(data); // Update state with fetched tasks
      setFilteredTasks(data); // No need for client-side filtering since API handles it

    } catch (e: any) {
      console.error("Error fetching tasks:", e);
      setError(`Failed to load tasks. ${e.message || 'Please try again later.'}`);
      setTasks([]); // Clear tasks on error to avoid showing stale data
      setFilteredTasks([]);
    } finally {
      setIsLoading(false); // Ensure loading is set to false in all cases
    }
  }, [filters]); // Dependency on filters to refetch when filters change

  // --- Initial Data Load --- Effect
  useEffect(() => {
    console.log('>>> HomePage: useEffect[filters] triggered. Current filters state:', JSON.stringify(filters)); // <-- ADD LOG 2
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      fetchTasks(false); // false means don't use current filters
    } else {
      // On subsequent filter changes, use the current filters
      fetchTasks(true);
    }
  }, [fetchTasks, filters]);

  // --- Handle Filter Changes (Memoized) ---
  const handleFilterChange = useCallback((newFilters: AllFiltersState) => {
    console.log(">>> HomePage: handleFilterChange received:", JSON.stringify(newFilters)); // <-- ADD LOG 1
    // Directly set the state to the complete newFilters object received from FilterBar
    // This correctly removes keys (like 'search') that are no longer present in newFilters
    setFilters(newFilters);
  }, []); // Empty dependency array because setFilters is stable

  // --- Handle Tasks Changed ---
  const handleTasksChanged = useCallback(() => {
    console.log("Tasks changed, refreshing...");
    fetchTasks();
  }, [fetchTasks]);

  // --- Handle Task Export ---
  const handleExportTasks = () => {
    // Export either filtered tasks (if filters are applied) or all tasks
    const tasksToExport = filteredTasks.length > 0 ? filteredTasks : tasks;
    
    // Generate filename with date
    const dateStr = new Date().toISOString().split('T')[0];
    const fileName = `ai-todo-tasks-${dateStr}.csv`;
    
    // Export tasks to CSV and trigger download
    exportTasksToCSV(tasksToExport, exportAllFields, fileName);
  };

  // --- Import Modal Controls ---
  const openImportModal = () => {
    setIsImportModalOpen(true);
  };

  const closeImportModal = () => {
    setIsImportModalOpen(false);
  };

  // Handler for when import is completed
  const handleImportComplete = () => {
    // Refresh the task list after import
    fetchTasks();
  };

  // --- Callback for TaskForm ---
  // This function will be passed to TaskForm and called when a new task is created
  const handleTaskCreated = (newTask: Task) => {
    console.log("New task created, updating list:", newTask);
    // Add the new task to the beginning of the list for immediate feedback
    setTasks((prevTasks) => [newTask, ...prevTasks]);

    // Optional: You could also trigger a full refetch instead:
    // fetchTasks();
    // Adding optimistically is generally a better UX unless ordering is critical.
  };

  // --- Get active filter count ---
  const getActiveFilterCount = (): number => {
    let count = 0;
    
    // Count basic filters
    if (filters.portfolio) count++;
    if (filters.project) count++;
    if (filters.section) count++;
    if (filters.priority) count++;
    if (filters.status) count++;
    
    // Count arrays
    count += (filters.tags?.length || 0);
    count += (filters.related_entities?.length || 0);
    count += (filters.related_tasks?.length || 0);
    count += (filters.required_tools_software?.length || 0);
    count += (filters.required_hardware?.length || 0);
    count += (filters.required_skills?.length || 0);
    count += (filters.required_devices?.length || 0);
    count += (filters.optimal_time_of_day?.length || 0);
    count += (filters.ai_action_process_dropdown?.length || 0);
    
    // Count dates
    if (filters.due_date_before) count++;
    if (filters.due_date_after) count++;
    if (filters.created_at_before) count++;
    if (filters.created_at_after) count++;
    
    // Count dropdowns
    if (filters.financial_aspect) count++;
    if (filters.task_type) count++;
    if (filters.deadline_type) count++;
    if (filters.recurrence_frequency) count++;
    if (filters.internet_requirement) count++;
    if (filters.waiting_for) count++;
    if (filters.ai_workflow_status) count++;
    if (filters.allow_autonomous_execution) count++;
    if (filters.cognitive_load) count++;
    if (filters.energy_level_required) count++;
    
    // Count search fields
    if (filters.name_contains) count++;
    if (filters.description_contains) count++;
    if (filters.notes_contains) count++;
    if (filters.subtasks_for_user_contains) count++;
    
    // Count number ranges
    if (filters.estimated_cost_budget_min || filters.estimated_cost_budget_max) count++;
    
    return count;
  };

  // --- Rendering ---
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">AI To-Do List</h1>
        
        <div className="flex flex-wrap gap-3 items-center">
          {/* Empty - removed duplicate buttons that are already at the task list section */}
        </div>
      </div>

      {/* Task Creation Form Section */}
      <section aria-labelledby="add-task-heading" className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h2 id="add-task-heading" className="text-xl font-semibold text-gray-700">Add New Task</h2>
          
          {/* New enhanced task form link moved here */}
          <a 
            href="/tasks/new" 
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            + Enhanced Form
          </a>
        </div>
        {/* Pass the callback function as a prop */}
        <TaskForm onTaskCreated={handleTaskCreated} />
      </section>

      {/* Task Hierarchy Tree Section */}
      <section aria-labelledby="task-hierarchy-heading" className="mb-8 border rounded-lg shadow-sm overflow-hidden">
          <h2 id="task-hierarchy-heading" className="sr-only">Task Hierarchy</h2> {/* Screen-reader only heading */}
          <TaskTree />
      </section>

      {/* Filter Bar Section */}
      <section aria-labelledby="filter-tasks-heading" className="mb-4">
        <h2 id="filter-tasks-heading" className="text-xl font-semibold text-gray-700 mb-3">Manage Tasks</h2>
        <FilterBar onFilterChange={handleFilterChange} />
      </section>

      {/* Task List Section */}
      <section aria-labelledby="task-list-heading">
        <div className="flex justify-between items-center mb-3">
          <h2 id="task-list-heading" className="text-xl font-semibold text-gray-700">Your Tasks</h2>
          
          {/* Import/Export controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={openImportModal}
              className="px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition duration-200"
            >
              Import CSV
            </button>
            
            {/* Hidden because we now always export all fields
            <label className="flex items-center gap-2 text-sm">
              <input 
                type="checkbox" 
                checked={exportAllFields}
                onChange={() => setExportAllFields(!exportAllFields)}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span>Export all fields</span>
            </label>
            */}
            
            <button
              onClick={handleExportTasks}
              disabled={tasks.length === 0}
              className={`px-4 py-2 rounded-md text-sm ${
                tasks.length > 0 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 transition duration-200'
                  : 'bg-gray-400 text-gray-100 cursor-not-allowed'
              }`}
            >
              Export CSV
            </button>
          </div>
        </div>
        
        {/* Conditional Rendering based on state */}
        {isLoading && (
          <div className="text-center py-4">
            <p className="text-gray-500">Loading tasks...</p>
            {/* Optional: Add a simple spinner */}
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}
        {!isLoading && !error && (
          // Render the TaskList component only when not loading and no error
          <>
            <div className="mb-2 text-sm text-gray-500">
              Showing {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'}
              {getActiveFilterCount() > 0 
                ? ` (filtered: ${getActiveFilterCount()} filters active)` 
                : ''}
            </div>
            <TaskList tasks={filteredTasks} onTasksChanged={handleTasksChanged} />
          </>
        )}
        {!isLoading && !error && filteredTasks.length === 0 && (
          <p className="text-gray-500 italic mt-4">
            {tasks.length === 0 
              ? 'No tasks found. Add one above!' 
              : 'No tasks match the current filters.'}
          </p>
        )}
      </section>

      {/* CSV Import Modal */}
      <ImportCSVModal 
        isOpen={isImportModalOpen}
        onClose={closeImportModal}
        onImportComplete={handleImportComplete}
      />
    </main>
  );
}