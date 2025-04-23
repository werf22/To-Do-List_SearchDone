// components/TaskForm.tsx
'use client'; // Needed for useState

import { useState } from 'react';
import type { Task } from '@prisma/client'; // Import Task type for the callback prop

// Define the structure of the props this component expects
interface TaskFormProps {
  // Callback function to notify the parent when a task is successfully created
  onTaskCreated: (newTask: Task) => void;
}

export default function TaskForm({ onTaskCreated }: TaskFormProps) {
  // --- Form State ---
  // State for each input field in the MVP form
  const [name, setName] = useState('');
  const [taskGoal, setTaskGoal] = useState('');
  const [inputDataContext, setInputDataContext] = useState('');
  const [portfolio, setPortfolio] = useState(''); // Example optional field (single select for MVP)
  const [priority, setPriority] = useState('P3 - Medium'); // Example optional field with default
  const [dueDate, setDueDate] = useState(''); // Date as string initially

  // State for handling submission process
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- Handle Form Submission ---
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default browser form submission
    setIsSubmitting(true);
    setError(null); // Reset error on new submission

    // --- Basic Client-Side Validation ---
    if (!name.trim() || !taskGoal.trim() || !inputDataContext.trim()) {
      setError('Task Name, Goal, and Input Data & Context are required fields.');
      setIsSubmitting(false);
      return; // Stop submission if validation fails
    }

    // --- Prepare Data Payload ---
    const payload = {
      name: name.trim(),
      task_goal: taskGoal.trim(),
      input_data_context: inputDataContext.trim(),
      // Include optional fields only if they have a value (or send default)
      ...(portfolio && { portfolio: portfolio }),
      ...(priority && { priority: priority }),
      ...(dueDate && { due_date: dueDate }), // Send date string, API will parse
      // Add other MVP form fields here if needed
      // e.g., suggested_initial_steps_subtasks: '...',
    };
    console.log("Submitting task data:", payload);


    // --- API Call ---
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Handle non-successful responses
      if (!response.ok) {
        let errorMsg = `Failed to create task (Status: ${response.status})`;
        try {
            const errorData = await response.json();
            errorMsg = errorData.error || errorMsg; // Use specific error from API if available
        } catch (jsonError) {
             console.warn("Could not parse error response as JSON:", jsonError);
        }
        throw new Error(errorMsg);
      }

      // Task created successfully
      const newTask: Task = await response.json();
      console.log("Task created:", newTask);

      // --- Notify Parent Component & Reset Form ---
      onTaskCreated(newTask); // Call the callback passed from the parent

      // Reset form fields to empty/default values
      setName('');
      setTaskGoal('');
      setInputDataContext('');
      setPortfolio('');
      setPriority('P3 - Medium');
      setDueDate('');
      setError(null); // Clear any previous error

    } catch (e: any) {
      console.error("Form Submission Error:", e);
      setError(e.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  // --- Rendering the Form ---
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      {/* Display Error Messages */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm" role="alert">
          {error}
        </div>
      )}

      {/* Task Name Input */}
      <div>
        <label htmlFor="task-name" className="block text-sm font-medium text-gray-700 mb-1">
          Task Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="task-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Verb + Object + Context (e.g., Write blog post about Pomodoro)"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
        />
      </div>

      {/* Task Goal Input */}
      <div>
        <label htmlFor="task-goal" className="block text-sm font-medium text-gray-700 mb-1">
          Task Goal (What is "Done"?) <span className="text-red-500">*</span>
        </label>
        <textarea
          id="task-goal"
          value={taskGoal}
          onChange={(e) => setTaskGoal(e.target.value)}
          placeholder="Specific, measurable outcome (e.g., Draft of blog post ready for review)"
          required
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
        />
      </div>

      {/* Input Data & Context Input */}
      <div>
        <label htmlFor="input-data-context" className="block text-sm font-medium text-gray-700 mb-1">
          Input Data & Context <span className="text-red-500">*</span>
        </label>
        <textarea
          id="input-data-context"
          value={inputDataContext}
          onChange={(e) => setInputDataContext(e.target.value)}
          placeholder="Why? Target Audience? Resources (links)? Keywords? Constraints?"
          required
          rows={5}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
        />
      </div>

       {/* --- Optional MVP Fields --- */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Portfolio Dropdown (Example) */}
            <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                Portfolio (Optional)
                </label>
                <select
                    id="portfolio"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 h-[42px]" // Added fixed height
                >
                    <option value="">-- Select Portfolio --</option>
                    {/* Populate options from your config or constants */}
                    <option value="GLOBAL (Global)">GLOBAL (Global)</option>
                    <option value="Osobný Život & Rozvoj (Osobné & Rozvoj)">Osobný Život & Rozvoj</option>
                    <option value="Pracovný Život & Administratíva (Práca & Admin)">Pracovný Život & Admin</option>
                    <option value="Koučing & Terapia (Koučing & Terapia)">Koučing & Terapia</option>
                    <option value="Kurzy & Workshopy (Kurzy & Workshopy)">Kurzy & Workshopy</option>
                    <option value="DJing (DJing)">DJing</option>
                    <option value="Umenie (Umenie)">Umenie</option>
                    <option value="AI & Technológie (AI & Tech)">AI & Technológie</option>
                    <option value="Projekty & Produkty (Nápady)">Projekty & Produkty (Nápady)</option>
                    <option value="Social Media & Marketing (Marketing)">Social Media & Marketing</option>
                    <option value="Cestovanie & Logistika (Cestovanie)">Cestovanie & Logistika</option>
                    <option value="Znalostná Báza & Výskum (Arzenál)">Znalostná Báza & Výskum</option>
                    <option value="Crypto (Crypto)">Crypto</option>
                    <option value="Organizovanie Eventov (Eventy)">Organizovanie Eventov</option>
                </select>
            </div>

            {/* Priority Dropdown (Example) */}
            <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                Priority (Optional)
                </label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 h-[42px]" // Added fixed height
                >
                    <option value="P0 - NOW">P0 - NOW</option>
                    <option value="P1 - Critical">P1 - Critical</option>
                    <option value="P2 - High">P2 - High</option>
                    <option value="P3 - Medium">P3 - Medium</option>
                    <option value="P4 - Low">P4 - Low</option>
                </select>
            </div>

            {/* Due Date Input (Example) */}
            <div>
                 <label htmlFor="due-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Due Date (Optional)
                 </label>
                 <input
                    type="date"
                    id="due-date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                 />
            </div>
       </div>


      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Adding Task...' : 'Add Task'}
        </button>
      </div>
    </form>
  );
}