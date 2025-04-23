'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TASK_FIELD_CONFIG } from '@/config/TASK_FIELD_CONFIG';
import InfoTooltip from '@/components/ui/InfoTooltip';
import { PORTFOLIO_PROJECT_SECTION } from '@/config/TASK_FIELD_CONFIG';

export default function NewTaskPage() {
  const router = useRouter();
  
  // Basic fields
  const [name, setName] = useState('');
  const [taskGoal, setTaskGoal] = useState('');
  const [inputDataContext, setInputDataContext] = useState('');
  const [portfolio, setPortfolio] = useState<string[]>([]);
  const [project, setProject] = useState<string[]>([]);
  const [section, setSection] = useState<string[]>([]);
  const [dueDate, setDueDate] = useState('');
  const [deadlineType, setDeadlineType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [priority, setPriority] = useState('');
  const [relatedAreas, setRelatedAreas] = useState('');
  const [potentialDependencies, setPotentialDependencies] = useState('');
  const [suggestedInitialSteps, setSuggestedInitialSteps] = useState('');
  const [relatedEntity, setRelatedEntity] = useState('');
  const [desiredOutputFormat, setDesiredOutputFormat] = useState<string[]>([]);
  const [aiActionFreeText, setAiActionFreeText] = useState('');
  const [aiActionDropdown, setAiActionDropdown] = useState('');
  const [specificConstraints, setSpecificConstraints] = useState('');
  const [aiBehaviorUncertainty, setAiBehaviorUncertainty] = useState('');
  const [aiWorkflowStatus, setAiWorkflowStatus] = useState("1 - Nová (v Inboxe)");
  const [allowAutonomousExecution, setAllowAutonomousExecution] = useState("Len Kategorizuj a Generuj Kroky/Plán");
  const [financialAspect, setFinancialAspect] = useState('');
  const [financialReturnValueSpeed, setFinancialReturnValueSpeed] = useState('');
  
  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Options for dropdowns
  const aiActionOptions = TASK_FIELD_CONFIG.ai_action_process_dropdown.options || [];
  const aiBehaviorOptions = TASK_FIELD_CONFIG.ai_behavior_on_uncertainty.options || [];
  const aiWorkflowStatusOptions = TASK_FIELD_CONFIG.ai_workflow_status.options || [];
  const allowAutonomousExecutionOptions = TASK_FIELD_CONFIG.allow_autonomous_execution.options || [];
  const outputFormatOptions = TASK_FIELD_CONFIG.desired_output_format.options || [];
  const priorityOptions = TASK_FIELD_CONFIG.priority.options || [];
  const deadlineTypeOptions = TASK_FIELD_CONFIG.deadline_type.options || [];
  const financialAspectOptions = TASK_FIELD_CONFIG.financial_aspect.options || [];
  const financialReturnValueSpeedOptions = TASK_FIELD_CONFIG.financial_return_value_speed.options || [];
  
  // Available project options based on selected portfolio
  const [availableProjects, setAvailableProjects] = useState<string[]>([]);
  
  // Available sections based on selected portfolio and project
  const [availableSections, setAvailableSections] = useState<string[]>([]);

  // Update available projects when portfolio changes
  useEffect(() => {
    if (portfolio.length === 0) {
      setAvailableProjects([]);
      return;
    }

    let projects: string[] = [];
    
    portfolio.forEach(p => {
      if (PORTFOLIO_PROJECT_SECTION[p]) {
        projects = [...projects, ...Object.keys(PORTFOLIO_PROJECT_SECTION[p])];
      }
    });
    
    setAvailableProjects([...new Set(projects)]);
  }, [portfolio]);

  // Update available sections when portfolio or project changes
  useEffect(() => {
    if (portfolio.length === 0 && project.length === 0) {
      setAvailableSections([]);
      return;
    }

    let sections: string[] = [];
    
    if (project.length > 0) {
      portfolio.forEach(p => {
        if (PORTFOLIO_PROJECT_SECTION[p]) {
          project.forEach(pr => {
            if (PORTFOLIO_PROJECT_SECTION[p][pr]) {
              sections = [...sections, ...PORTFOLIO_PROJECT_SECTION[p][pr]];
            }
          });
        }
      });
    } else {
      portfolio.forEach(p => {
        if (PORTFOLIO_PROJECT_SECTION[p]) {
          Object.values(PORTFOLIO_PROJECT_SECTION[p]).forEach(sectionArray => {
            sections = [...sections, ...sectionArray];
          });
        }
      });
    }
    
    setAvailableSections([...new Set(sections)]);
  }, [portfolio, project]);

  // Handle multi-select change
  const handleMultiSelectChange = (
    value: string, 
    currentValues: string[], 
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (currentValues.includes(value)) {
      setter(currentValues.filter(v => v !== value));
    } else {
      setter([...currentValues, value]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
    
    // Validate required fields
    if (!name || !taskGoal || !inputDataContext) {
      setError('Name, Task Goal, and Input Data & Context are required fields');
      setIsSubmitting(false);
      return;
    }
    
    // Prepare payload
    const payload = {
      name,
      task_goal: taskGoal,
      input_data_context: inputDataContext,
      portfolio: portfolio.length > 0 ? portfolio : undefined,
      project: project.length > 0 ? project : undefined,
      section: section.length > 0 ? section : undefined,
      due_date: dueDate || undefined,
      deadline_type: deadlineType || undefined,
      start_date: startDate || undefined,
      priority: priority || undefined,
      related_areas_for_ai_to_consider: relatedAreas || undefined,
      potential_dependencies_related_tasks: potentialDependencies || undefined,
      suggested_initial_steps_subtasks: suggestedInitialSteps || undefined,
      related_entity: relatedEntity || undefined,
      desired_output_format: desiredOutputFormat.length > 0 ? desiredOutputFormat : undefined,
      ai_action_process_free_text: aiActionFreeText || undefined,
      ai_action_process_dropdown: aiActionDropdown || undefined,
      specific_constraints_instructions: specificConstraints || undefined,
      ai_behavior_on_uncertainty: aiBehaviorUncertainty || undefined,
      ai_workflow_status: aiWorkflowStatus || "1 - Nová (v Inboxe)",
      allow_autonomous_execution: allowAutonomousExecution || "Len Kategorizuj a Generuj Kroky/Plán",
      financial_aspect: financialAspect || undefined,
      financial_return_value_speed: financialReturnValueSpeed || undefined
    };
    
    try {
      // API call to create task
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        let errorMessage = `Failed to create task (Status: ${response.status})`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          console.error('Could not parse error response:', e);
        }
        throw new Error(errorMessage);
      }
      
      const newTask = await response.json();
      setSuccess('Task created successfully!');
      
      // Redirect to the task detail page after a brief delay
      setTimeout(() => {
        router.push(`/tasks/${newTask.id}`);
      }, 1500);
      
    } catch (err: any) {
      setError(err.message || 'An error occurred while creating the task');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Add New Task</h1>
        <Link 
          href="/"
          className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
        >
          Back to Tasks
        </Link>
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
          {success}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        {/* Name */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <InfoTooltip content="Basic identification of the task. Should be clear, concise, and start with an action verb. Format: [Verb] + [Goal/Object] + [Brief Context]. E.g.: 'Write blog post about Pomodoro technique'" />
          </div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Verb + Object + Brief Context (e.g., Write blog post about Pomodoro)"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            required
          />
        </div>
        
        {/* Task Goal */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="taskGoal" className="block text-sm font-medium text-gray-700">
              Task Goal <span className="text-red-500">*</span>
            </label>
            <InfoTooltip content="Clear and measurable definition of what is to be achieved. This is the main assignment for the AI (and for you). Be as specific as possible. Instead of 'Write blog', write 'Write first draft of blog (800 words) about X with 3 key points and CTA on Y'." />
          </div>
          <textarea
            id="taskGoal"
            value={taskGoal}
            onChange={(e) => setTaskGoal(e.target.value)}
            placeholder="Define a specific, measurable outcome for this task"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            rows={2}
            required
          />
        </div>
        
        {/* Input Data & Context */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="inputDataContext" className="block text-sm font-medium text-gray-700">
              Input Data & Context <span className="text-red-500">*</span>
            </label>
            <InfoTooltip content="Provide ALL necessary information and materials for the AI to process the task. This is the 'fuel'. A central place for your 'brain dump' of everything relevant to the task. Use structure: Why? Target audience? Resources? Keywords? Brief? Include all relevant links, texts, keywords, and notes." />
          </div>
          <textarea
            id="inputDataContext"
            value={inputDataContext}
            onChange={(e) => setInputDataContext(e.target.value)}
            placeholder="Why? Target audience? Resources (links)? Keywords? Brief? Constraints? Include all relevant details."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            rows={5}
            required
          />
        </div>
        
        {/* Portfolio, Project, Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Portfolio */}
          <div>
            <div className="flex items-center mb-1">
              <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">
                Portfolio
              </label>
              <InfoTooltip content="Primary categorization of the task into one of your main life/work areas. Key for high-level organization. If left empty, AI will attempt to determine the most appropriate portfolio." />
            </div>
            <div className="relative">
              <select
                id="portfolio"
                value=""
                onChange={(e) => handleMultiSelectChange(e.target.value, portfolio, setPortfolio)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              >
                <option value="">-- Select Portfolio --</option>
                {Object.keys(PORTFOLIO_PROJECT_SECTION).map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              
              <div className="mt-2 flex flex-wrap gap-2">
                {portfolio.map(p => (
                  <div key={p} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md text-sm flex items-center">
                    {p}
                    <button
                      type="button"
                      onClick={() => handleMultiSelectChange(p, portfolio, setPortfolio)}
                      className="ml-1 text-indigo-500 hover:text-indigo-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Project */}
          <div>
            <div className="flex items-center mb-1">
              <label htmlFor="project" className="block text-sm font-medium text-gray-700">
                Project
              </label>
              <InfoTooltip content="Categorization of the task into a specific initiative, product, or area of responsibility within the portfolio. If left empty, AI will determine the most appropriate project based on context." />
            </div>
            <div className="relative">
              <select
                id="project"
                value=""
                onChange={(e) => handleMultiSelectChange(e.target.value, project, setProject)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                disabled={availableProjects.length === 0}
              >
                <option value="">-- Select Project --</option>
                {availableProjects.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              
              <div className="mt-2 flex flex-wrap gap-2">
                {project.map(p => (
                  <div key={p} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md text-sm flex items-center">
                    {p}
                    <button
                      type="button"
                      onClick={() => handleMultiSelectChange(p, project, setProject)}
                      className="ml-1 text-indigo-500 hover:text-indigo-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Section */}
          <div>
            <div className="flex items-center mb-1">
              <label htmlFor="section" className="block text-sm font-medium text-gray-700">
                Section
              </label>
              <InfoTooltip content="Thematic section where the task should be visually placed within the target project. If left empty, AI will choose the most appropriate section (e.g., INBOX or a thematic section)." />
            </div>
            <div className="relative">
              <select
                id="section"
                value=""
                onChange={(e) => handleMultiSelectChange(e.target.value, section, setSection)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                disabled={availableSections.length === 0}
              >
                <option value="">-- Select Section --</option>
                {availableSections.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              
              <div className="mt-2 flex flex-wrap gap-2">
                {section.map(s => (
                  <div key={s} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md text-sm flex items-center">
                    {s}
                    <button
                      type="button"
                      onClick={() => handleMultiSelectChange(s, section, setSection)}
                      className="ml-1 text-indigo-500 hover:text-indigo-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Due Date */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
              Due Date
            </label>
            <InfoTooltip content="The date by which the task should be completed. This is the main deadline for the task." />
          </div>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            placeholder="YYYY-MM-DD"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>
        
        {/* Deadline Type */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="deadlineType" className="block text-sm font-medium text-gray-700">
              Deadline Type
            </label>
            <InfoTooltip content="The type of deadline for the task. This determines the level of flexibility for the deadline." />
          </div>
          <select
            id="deadlineType"
            value={deadlineType}
            onChange={(e) => setDeadlineType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          >
            <option value="">-- Select Deadline Type --</option>
            {deadlineTypeOptions.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        {/* Start Date */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <InfoTooltip content="The date on which the task should start. This is the earliest date on which work on the task can begin." />
          </div>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="YYYY-MM-DD"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>
        
        {/* Priority */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
              Priority
            </label>
            <InfoTooltip content="The level of importance for the task. This determines the order in which tasks are processed by the AI." />
          </div>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          >
            <option value="">-- Select Priority --</option>
            {priorityOptions.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        
        {/* Related Areas for AI to Consider */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="relatedAreas" className="block text-sm font-medium text-gray-700">
              Related Areas for AI to Consider
            </label>
            <InfoTooltip content="Indication of additional portfolios, projects, or broader areas related to the task, besides the primary one. Helps AI understand cross-area connections and will be used for proper categorization." />
          </div>
          <textarea
            id="relatedAreas"
            value={relatedAreas}
            onChange={(e) => setRelatedAreas(e.target.value)}
            placeholder="List other relevant portfolios, areas, or projects that this task relates to"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            rows={2}
          />
        </div>
        
        {/* Potential Dependencies / Related Tasks */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="potentialDependencies" className="block text-sm font-medium text-gray-700">
              Potential Dependencies / Related Tasks
            </label>
            <InfoTooltip content="Record connections to other tasks or resources that aren't formal dependencies but are important for context. Enter links to other tasks, relevant emails, documents, or briefly describe the relationship. If this is a subtask, include the parent task here." />
          </div>
          <textarea
            id="potentialDependencies"
            value={potentialDependencies}
            onChange={(e) => setPotentialDependencies(e.target.value)}
            placeholder="Enter parent task, links to related tasks, or resources - anything that's connected to this task"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            rows={2}
          />
        </div>
        
        {/* Suggested Initial Steps / Subtasks */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="suggestedInitialSteps" className="block text-sm font-medium text-gray-700">
              Suggested Initial Steps / Subtasks
            </label>
            <InfoTooltip content="Your initial idea of how the task could be broken down or what the first steps should be. Optional but helpful for complex tasks. These aren't final subtasks - AI will consider these, adapt them, or create new ones based on analysis." />
          </div>
          <textarea
            id="suggestedInitialSteps"
            value={suggestedInitialSteps}
            onChange={(e) => setSuggestedInitialSteps(e.target.value)}
            placeholder="List initial steps or subtasks that come to mind (e.g., 1. Research keywords, 2. Create outline, 3. Write first draft)"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            rows={3}
          />
        </div>
        
        {/* Related Entity */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="relatedEntity" className="block text-sm font-medium text-gray-700">
              Related Entity
            </label>
            <InfoTooltip content="Identify the main external or internal person, client, partner, or organization directly related to the task or with whom you'll primarily interact. Provides important context about the key actor, which may influence communication style, specific information searches, or next steps." />
          </div>
          <input
            type="text"
            id="relatedEntity"
            value={relatedEntity}
            onChange={(e) => setRelatedEntity(e.target.value)}
            placeholder="Enter name of person or organization (e.g., Peter Novák, WellBe Club)"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>
        
        {/* Desired Output Format */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="desiredOutputFormat" className="block text-sm font-medium text-gray-700">
              Desired Output Format
            </label>
            <InfoTooltip content="Specify the form in which the final result should be delivered. This gives both you and the AI clear expectations for the format of the deliverable." />
          </div>
          <div className="relative">
            <select
              id="desiredOutputFormat"
              value=""
              onChange={(e) => handleMultiSelectChange(e.target.value, desiredOutputFormat, setDesiredOutputFormat)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            >
              <option value="">-- Select Format --</option>
              {outputFormatOptions.map(format => (
                <option key={format} value={format}>{format}</option>
              ))}
            </select>
            
            <div className="mt-2 flex flex-wrap gap-2">
              {desiredOutputFormat.map(format => (
                <div key={format} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md text-sm flex items-center">
                  {format}
                  <button
                    type="button"
                    onClick={() => handleMultiSelectChange(format, desiredOutputFormat, setDesiredOutputFormat)}
                    className="ml-1 text-indigo-500 hover:text-indigo-700"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* AI Action / Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* AI Action / Process (Free Text) */}
          <div>
            <div className="flex items-center mb-1">
              <label htmlFor="aiActionFreeText" className="block text-sm font-medium text-gray-700">
                AI Action / Process (Free Text)
              </label>
              <InfoTooltip content="Define the primary operation or processing type that the AI Agent should perform based on the provided inputs. This is the main 'switch' that determines what logic or specialized prompt the AI should use. Options: 'AI' (AI chooses), 'All' (AI does everything), 'Categorize' (AI fills/refills all fields), or custom text." />
            </div>
            <input
              type="text"
              id="aiActionFreeText"
              value={aiActionFreeText}
              onChange={(e) => setAiActionFreeText(e.target.value)}
              placeholder="AI, All, Categorize, or custom instruction"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
          </div>
          
          {/* AI Action / Process (Dropdown) */}
          <div>
            <div className="flex items-center mb-1">
              <label htmlFor="aiActionDropdown" className="block text-sm font-medium text-gray-700">
                AI Action / Process (Dropdown)
              </label>
              <InfoTooltip content="Tell the AI what type of operation to perform. This is key for directing the AI Agent. Clearly define what you expect from the AI by selecting the main action from the predefined list (Generate, Research, Summarize, etc.)." />
            </div>
            <select
              id="aiActionDropdown"
              value={aiActionDropdown}
              onChange={(e) => setAiActionDropdown(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            >
              <option value="">-- Select Action --</option>
              {aiActionOptions.map(action => (
                <option key={action} value={action}>{action}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Specific Constraints / Instructions */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="specificConstraints" className="block text-sm font-medium text-gray-700">
              Specific Constraints / Instructions
            </label>
            <InfoTooltip content="Provide the AI with additional, specific rules or guidelines. This helps ensure the AI follows important conditions for your task. List in bullet points or short sentences any limitations or requirements (e.g., Max 500 words, Don't use passive voice, Focus on benefits for beginners)." />
          </div>
          <textarea
            id="specificConstraints"
            value={specificConstraints}
            onChange={(e) => setSpecificConstraints(e.target.value)}
            placeholder="List any specific rules, limitations, or requirements for the AI to follow"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            rows={2}
          />
        </div>
        
        {/* AI Behavior on Uncertainty */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="aiBehaviorUncertainty" className="block text-sm font-medium text-gray-700">
              AI Behavior on Uncertainty
            </label>
            <InfoTooltip content="Define how the AI should react if it encounters a problem or ambiguity. This sets the level of autonomy and need for your intervention. Select your preferred option based on task importance and your comfort level with AI decisions." />
          </div>
          <select
            id="aiBehaviorUncertainty"
            value={aiBehaviorUncertainty}
            onChange={(e) => setAiBehaviorUncertainty(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          >
            <option value="">-- Select Behavior --</option>
            {aiBehaviorOptions.map(behavior => (
              <option key={behavior} value={behavior}>{behavior}</option>
            ))}
          </select>
        </div>
        
        {/* AI Workflow Status */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="aiWorkflowStatus" className="block text-sm font-medium text-gray-700">
              AI Workflow Status
            </label>
            <InfoTooltip content="Define the current status of the task in the AI workflow. This helps track the task's progress and ensures the AI processes it correctly." />
          </div>
          <select
            id="aiWorkflowStatus"
            value={aiWorkflowStatus}
            onChange={(e) => setAiWorkflowStatus(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          >
            <option value="">-- Select Status --</option>
            {aiWorkflowStatusOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        {/* Allow Autonomous Execution */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="allowAutonomousExecution" className="block text-sm font-medium text-gray-700">
              Allow Autonomous Execution
            </label>
            <InfoTooltip content="Define the level of autonomy for the AI to execute the task. This determines how much the AI can do without your intervention." />
          </div>
          <select
            id="allowAutonomousExecution"
            value={allowAutonomousExecution}
            onChange={(e) => setAllowAutonomousExecution(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          >
            <option value="">-- Select Level of Autonomy --</option>
            {allowAutonomousExecutionOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        {/* Financial Aspect */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="financialAspect" className="block text-sm font-medium text-gray-700">
              Financial Aspect
            </label>
            <InfoTooltip content="Rýchla identifikácia úloh s finančným dopadom." />
          </div>
          <select
            id="financialAspect"
            value={financialAspect}
            onChange={(e) => setFinancialAspect(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          >
            <option value="">-- Select Financial Aspect --</option>
            {financialAspectOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        {/* Financial Return Value Speed */}
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <label htmlFor="financialReturnValueSpeed" className="block text-sm font-medium text-gray-700">
              Financial Return Value Speed
            </label>
            <InfoTooltip content="Rýchlosť návratnosti finančných prostriedkov." />
          </div>
          <select
            id="financialReturnValueSpeed"
            value={financialReturnValueSpeed}
            onChange={(e) => setFinancialReturnValueSpeed(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          >
            <option value="">-- Select Financial Return Value Speed --</option>
            {financialReturnValueSpeedOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating Task...' : 'Create Task'}
          </button>
        </div>
      </form>
    </div>
  );
}
