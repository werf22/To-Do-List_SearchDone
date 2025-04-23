// app/api/tasks/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Import the initialized Prisma Client instance
import { Task } from '@prisma/client'; // Import the generated Task type for type safety
import { getNextTaskId } from '@/lib/taskIdGenerator'; // Import the task ID generator
import { Prisma } from '@prisma/client';

/**
 * Handles GET requests to fetch all tasks.
 * Retrieves tasks from the database, ordered by creation date descending.
 * Supports comprehensive filtering based on FilterOptions defined in FilterBar.tsx.
 */
export async function GET(request: Request) {
  console.log("GET /api/tasks called"); // Basic logging
  
  // Parse query parameters
  const url = new URL(request.url);
  
  // Extract all possible filter parameters
  const taskId = url.searchParams.get('taskId');
  
  const portfolio = url.searchParams.get('portfolio');
  const project = url.searchParams.get('project');
  const section = url.searchParams.get('section');
  const priority = url.searchParams.get('priority');
  
  // Tags and related items - arrays need special handling
  const tags = url.searchParams.getAll('tags');
  const relatedEntities = url.searchParams.getAll('related_entities');
  const relatedTasks = url.searchParams.getAll('related_tasks');
  
  // Dates
  const dueDateBefore = url.searchParams.get('due_date_before');
  const dueDateAfter = url.searchParams.get('due_date_after');
  const createdAtBefore = url.searchParams.get('created_at_before');
  const createdAtAfter = url.searchParams.get('created_at_after');
  
  // Dropdown selections
  const financialAspect = url.searchParams.get('financial_aspect');
  const taskType = url.searchParams.get('task_type');
  const deadlineType = url.searchParams.get('deadline_type');
  const recurrenceFrequency = url.searchParams.get('recurrence_frequency');
  const internetRequirement = url.searchParams.get('internet_requirement');
  const waitingFor = url.searchParams.get('waiting_for');
  
  // Search in text fields
  const nameContains = url.searchParams.get('name_contains');
  const descriptionContains = url.searchParams.get('description_contains');
  const notesContains = url.searchParams.get('notes_contains');
  const subtasksContains = url.searchParams.get('subtasks_for_user_contains');
  
  // Multiselects - arrays need special handling
  const requiredToolsSoftware = url.searchParams.getAll('required_tools_software');
  const requiredHardware = url.searchParams.getAll('required_hardware');
  const requiredSkills = url.searchParams.getAll('required_skills');
  const requiredDevices = url.searchParams.getAll('required_devices');
  const optimalTimeOfDay = url.searchParams.getAll('optimal_time_of_day');
  
  // AI fields
  const aiWorkflowStatus = url.searchParams.get('ai_workflow_status');
  const allowAutonomousExecution = url.searchParams.get('allow_autonomous_execution');
  const aiActionProcessDropdown = url.searchParams.getAll('ai_action_process_dropdown');
  
  // Other
  const cognitiveLoad = url.searchParams.get('cognitive_load');
  const energyLevelRequired = url.searchParams.get('energy_level_required');
  const estimatedCostBudgetMin = url.searchParams.get('estimated_cost_budget_min');
  const estimatedCostBudgetMax = url.searchParams.get('estimated_cost_budget_max');
  
  // Global Full-Text Search
  const search = url.searchParams.get('search');

  console.log(`Prisma Client Version (Runtime): ${Prisma.prismaVersion.client}`);
  console.log(`Received search param: ${search}`);

  try {
    // Build the WHERE clause for Prisma based on query parameters
    const whereClause: Prisma.TaskWhereInput = {}; // Use Prisma.TaskWhereInput for better type safety

    // Apply search filter manually if search term exists
    let tasks: Task[] = []; // Declare tasks variable here with the correct type

    if (search) {
      console.log(`Executing Raw SQL search for: "${search}"`);
      // Prepare search term for ILIKE
      const searchTerm = `%${search}%`;
      const searchTermLower = search.toLowerCase();

      // Conditionally add boolean checks
      let booleanChecks = Prisma.empty;
      if (searchTermLower === 'true') {
        booleanChecks = Prisma.sql`
            OR "allow_autonomous_execution" = true
            OR "allow_notifications" = true
            OR "completion_criteria_met" = true
            OR "ai_help_needed" = true
            OR "task_requires_ai_agent" = true
        `;
      } else if (searchTermLower === 'false') {
        booleanChecks = Prisma.sql`
            OR "allow_autonomous_execution" = false
            OR "allow_notifications" = false
            OR "completion_criteria_met" = false
            OR "ai_help_needed" = false
            OR "task_requires_ai_agent" = false
        `;
      }

      // Base SQL query structure
      const query = Prisma.sql`
        SELECT * FROM "Task"
        WHERE
          (
            -- String checks
            "name" ILIKE ${searchTerm} OR
            "description" ILIKE ${searchTerm} OR
            "notes" ILIKE ${searchTerm} OR
            "task_comments" ILIKE ${searchTerm} OR
            "parent_task" ILIKE ${searchTerm} OR
            "subtasks_for_user" ILIKE ${searchTerm} OR
            "subtasks_for_ai" ILIKE ${searchTerm} OR
            "subtasks_in_system" ILIKE ${searchTerm} OR
            "dependents" ILIKE ${searchTerm} OR
            "outgoing_dependents" ILIKE ${searchTerm} OR
            "related_tasks" ILIKE ${searchTerm} OR
            "priority" ILIKE ${searchTerm} OR
            "deadline_type" ILIKE ${searchTerm} OR
            "recurrence_frequency" ILIKE ${searchTerm} OR
            "assignee" ILIKE ${searchTerm} OR
            "type" ILIKE ${searchTerm} OR
            "collaborators" ILIKE ${searchTerm} OR
            "ai_workflow_status" ILIKE ${searchTerm} OR
            "allow_autonomous_execution" ILIKE ${searchTerm} OR
            "ai_behavior_on_uncertainty" ILIKE ${searchTerm} OR
            "ai_creativity_level" ILIKE ${searchTerm} OR
            "ai_processing_priority" ILIKE ${searchTerm} OR
            "ai_agent_status_log" ILIKE ${searchTerm} OR
            "feedback_for_ai" ILIKE ${searchTerm} OR
            "ai_output_rating" ILIKE ${searchTerm} OR
            "action_required_from_user" ILIKE ${searchTerm} OR
            "task_goal" ILIKE ${searchTerm} OR
            "input_data_context" ILIKE ${searchTerm} OR
            "specific_constraints_instructions" ILIKE ${searchTerm} OR
            "ai_action_process_free_text" ILIKE ${searchTerm} OR
            "ai_brainstorm_ideas_on_how_it_can_help_me" ILIKE ${searchTerm} OR
            "task_type" ILIKE ${searchTerm} OR
            "estimated_user_time" ILIKE ${searchTerm} OR
            "cognitive_load" ILIKE ${searchTerm} OR
            "energy_level_required" ILIKE ${searchTerm} OR
            "location" ILIKE ${searchTerm} OR
            "execution_location" ILIKE ${searchTerm} OR
            "internet_requirement" ILIKE ${searchTerm} OR
            "focus_requirement" ILIKE ${searchTerm} OR
            "target_audience" ILIKE ${searchTerm} OR
            "task_purpose" ILIKE ${searchTerm} OR
            "expected_impact_success_metric" ILIKE ${searchTerm} OR
            "waiting_for" ILIKE ${searchTerm} OR
            "financial_return_value_speed" ILIKE ${searchTerm} OR
            "financial_aspect" ILIKE ${searchTerm} OR
            "suggested_initial_steps_subtasks" ILIKE ${searchTerm} OR
            "related_areas_for_ai_to_consider" ILIKE ${searchTerm} OR
            "potential_dependencies_related_tasks" ILIKE ${searchTerm} OR

            -- Int checks (cast to TEXT)
            "number_of_variations"::TEXT ILIKE ${searchTerm} OR

            -- Float checks (cast to TEXT)
            "estimated_cost_budget"::TEXT ILIKE ${searchTerm} OR

            -- DateTime checks (cast to TEXT)
            "completed_at"::TEXT ILIKE ${searchTerm} OR
            "due_date"::TEXT ILIKE ${searchTerm} OR
            "start_date"::TEXT ILIKE ${searchTerm} OR

            -- String[] checks (unnest and check elements)
            EXISTS (SELECT 1 FROM unnest("portfolio") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("project") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("section") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("tags") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("desired_output_format") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("desired_style_tone") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("ai_action_process_dropdown") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("required_tools_software") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("required_hardware") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("required_skills") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("required_devices") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("optimal_time_of_day") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("related_portfolios") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("related_projects") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("related_sections") elem WHERE elem ILIKE ${searchTerm}) OR
            EXISTS (SELECT 1 FROM unnest("related_entities") elem WHERE elem ILIKE ${searchTerm})
            -- Boolean checks (match exact 'true' or 'false' case-insensitively)
            ${booleanChecks}
          )
          ${aiWorkflowStatus ? Prisma.sql`AND "ai_workflow_status" = ${aiWorkflowStatus}` : Prisma.empty}
          ${priority ? Prisma.sql`AND "priority" = ${priority}` : Prisma.empty}
        ORDER BY "created_at" DESC;
      `;

      // Execute the raw query
      tasks = await prisma.$queryRaw(query);

      console.log(`Fetched ${tasks.length} tasks`);
      return NextResponse.json(tasks);
    } else {
      // Specific Field 'Contains' Filters (Only if no global search)
      if (nameContains) {
        whereClause.name = { contains: nameContains, mode: 'insensitive' };
      }
      if (descriptionContains) {
        whereClause.description = { contains: descriptionContains, mode: 'insensitive' };
      }
      if (notesContains) {
        whereClause.notes = { contains: notesContains, mode: 'insensitive' };
      }
      if (subtasksContains) {
        whereClause.subtasks_for_user = { contains: subtasksContains, mode: 'insensitive' };
      }

      // Date Filters
      const dateFilters: any = {}; // Temporary object for date ranges
      if (dueDateBefore) {
        dateFilters.lte = new Date(dueDateBefore);
      }
      if (dueDateAfter) {
        dateFilters.gte = new Date(dueDateAfter);
      }
      if (Object.keys(dateFilters).length > 0) {
        whereClause.due_date = dateFilters;
      }

      const createdAtFilters: any = {};
      if (createdAtBefore) {
        createdAtFilters.lte = new Date(createdAtBefore);
      }
      if (createdAtAfter) {
        createdAtFilters.gte = new Date(createdAtAfter);
      }
      if (Object.keys(createdAtFilters).length > 0) {
        whereClause.created_at = createdAtFilters;
      }

      // Simple Equality/Dropdown Filters
      if (portfolio) {
        whereClause.portfolio = { has: portfolio }; // Assuming single select for portfolio
      }
      if (project) {
        whereClause.project = { has: project }; // Assuming single select for project
      }
      if (section) {
        whereClause.section = { has: section }; // Assuming single select for section
      }
      if (priority) {
        whereClause.priority = priority;
      }

      // Array Filters (has, hasSome, hasEvery)
      // Tags (array contains ANY of the tags - 'hasSome')
      if (tags.length > 0) {
        whereClause.tags = { hasSome: tags };
      }

      // Related Entities (array contains ANY of the entities - 'hasSome')
      if (relatedEntities.length > 0) {
        whereClause.related_entities = { hasSome: relatedEntities };
      }

      // Related Tasks (array contains ANY of the tasks - 'hasSome')
      // Assuming related_tasks is also an array field in Prisma
      // if (relatedTasks.length > 0) { // Adjust if related_tasks is not an array field
      //   whereClause.related_tasks = { hasSome: relatedTasks };
      // }

      // Multiselects (contains ANY - 'hasSome')
      if (requiredToolsSoftware.length > 0) {
        whereClause.required_tools_software = { hasSome: requiredToolsSoftware };
      }
      if (requiredHardware.length > 0) {
        whereClause.required_hardware = { hasSome: requiredHardware };
      }
      if (requiredSkills.length > 0) {
        whereClause.required_skills = { hasSome: requiredSkills };
      }
      if (requiredDevices.length > 0) {
        whereClause.required_devices = { hasSome: requiredDevices };
      }
      if (optimalTimeOfDay.length > 0) {
        whereClause.optimal_time_of_day = { hasSome: optimalTimeOfDay };
      }

      // AI Filters
      if (aiWorkflowStatus) {
        whereClause.ai_workflow_status = aiWorkflowStatus;
      }
      if (allowAutonomousExecution !== null && allowAutonomousExecution !== undefined) {
        // Use explicit 'equals' filter for boolean
        // Cast boolean to 'any' to bypass persistent incorrect type error
        whereClause.allow_autonomous_execution = { equals: (allowAutonomousExecution === 'true') as any };
      }
      if (aiActionProcessDropdown.length > 0) {
        whereClause.ai_action_process_dropdown = { hasSome: aiActionProcessDropdown };
      }

      // Range/Comparison Filters
      if (cognitiveLoad) {
        // Assign string value directly as per schema
        whereClause.cognitive_load = cognitiveLoad;
      }
      if (energyLevelRequired) {
        // Assign string value directly as per schema
        whereClause.energy_level_required = energyLevelRequired;
      }
      const budgetFilters: any = {};
      if (estimatedCostBudgetMin) {
        budgetFilters.gte = parseFloat(estimatedCostBudgetMin);
      }
      if (estimatedCostBudgetMax) {
        budgetFilters.lte = parseFloat(estimatedCostBudgetMax);
      }
      if (Object.keys(budgetFilters).length > 0) {
        whereClause.estimated_cost_budget = budgetFilters;
      }

      // Specific Task ID Filter
      if (taskId) {
        whereClause.id = taskId; // Filter by specific task ID if provided
      }

      console.log("Constructed whereClause BEFORE findMany:", JSON.stringify(whereClause, null, 2));

      // Fetch tasks from the database using the constructed where clause
      tasks = await prisma.task.findMany({
        where: whereClause,
        orderBy: {
          created_at: 'desc', // Order by creation date descending
        },
      });

      console.log(`Fetched ${tasks.length} tasks`);
      return NextResponse.json(tasks);
    }
  } catch (error: any) { // Type error as any for logging
    console.error("--- API ROUTE: GET /api/tasks ERROR ---");
    console.error('Error fetching tasks:', error);
    // Log the specific Prisma error message and code
    console.error(`Prisma Error Code: ${error.code}, Message: ${error.message}`); 
    // Log the full error structure for deeper inspection
    console.error('Full Error Object:', JSON.stringify(error, null, 2)); 
    return NextResponse.json(
      {
        message: 'Failed to fetch tasks. Potential database issue.',
        // Provide more structured error info to the frontend
        errorDetails: { 
          message: error.message,
          code: error.code,
          clientVersion: error.clientVersion // Included in Prisma errors
        }
      },
      { status: 500 }
    );
  }
}

/**
 * Handles POST requests to create a new task.
 * Expects essential task details in the request body.
 * Saves the new task to the database.
 * Returns the newly created task data.
 */
export async function POST(request: Request) {
  console.log("POST /api/tasks called"); // Basic logging
  
  try {
    const body = await request.json();
    
    // Apply validation & sanitization as needed
    // For MVP, we'll just ensure basic required fields
    if (!body.name) {
      return NextResponse.json({ error: "Task name is required" }, { status: 400 });
    }
    
    // Apply any default values
    const taskData: Partial<Task> = {
      ...body,
      // Only set created_at if not already provided
      created_at: body.created_at || new Date(),
      // Only set last_modified_at if not already provided
      last_modified_at: body.last_modified_at || new Date(),
    };
    
    // Check if task_id is provided - if not, generate a new one
    if (!taskData.task_id) {
      console.log("No task_id provided, generating a new one");
      taskData.task_id = await getNextTaskId();
    } else {
      console.log("Using provided task_id:", taskData.task_id);
    }
    
    // --- Create Task in Database ---
    console.log("Attempting to create task with data:", taskData);
    
    const newTask = await prisma.task.create({
      // Explicitly cast taskData to the correct type expected by Prisma,
      // ensuring only valid fields are included.
      data: taskData as any, // Use 'as any' cautiously or define a stricter type for creation data
    });
    console.log("Task created successfully:", newTask);

    // --- Placeholder for AI Trigger (Future Step) ---
    // TODO: After successful creation, enqueue or trigger an async job
    //       to perform AI auto-categorization and enrichment for `newTask.id`.
    //       Example: await triggerAIProcessing(newTask.id);

    // --- Return Success Response ---
    // Return the full newly created task object
    return NextResponse.json(newTask, { status: 201 });

  } catch (error: any) { // Type error as any for logging
    console.error("API Error: Failed to create task:", error);

    // Handle potential Prisma-specific errors (e.g., unique constraint violation)
    if (error.code === 'P2002') { // Example: Prisma code for unique constraint violation
        return NextResponse.json({ error: `Unique constraint violation: ${error.meta?.target}` }, { status: 409 });
    }
    // Handle validation errors more gracefully if you implement a validation library
    if (error.name === 'ValidationError') {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Generic server error for other cases
    return NextResponse.json(
      { error: 'Internal Server Error: Could not create task.' },
      { status: 500 }
    );
  }
}

/**
 * Handles PATCH requests to update an existing task.
 * Expects task ID and updated fields in the request body.
 */
export async function PATCH(request: Request) {
  console.log("PATCH /api/tasks called"); // Basic logging
  try {
    const body = await request.json();
    console.log("Request Body:", body);

    // Extract required task_id for identification
    const { task_id, id } = body;

    if (!id && !task_id) {
      console.error("Validation Error: Missing 'id' or 'task_id'");
      return NextResponse.json({ error: "Task 'id' or 'task_id' is required to update a task." }, { status: 400 });
    }

    // Prepare data for update - remove id and task_id from update data
    const updateData = { ...body };
    delete updateData.id; // Remove ID from update data
    delete updateData.task_id; // Also remove task_id to avoid unique constraint violations
    
    // Handle date fields correctly
    if (updateData.due_date) updateData.due_date = new Date(updateData.due_date);
    if (updateData.start_date) updateData.start_date = new Date(updateData.start_date);
    if (updateData.created_at) updateData.created_at = new Date(updateData.created_at);
    if (updateData.completed_at) updateData.completed_at = new Date(updateData.completed_at);
    if (updateData.last_modified_at) updateData.last_modified_at = new Date(updateData.last_modified_at);
    
    // Update last_modified_at automatically
    updateData.last_modified_at = new Date();

    // Ensure arrays are properly formatted for Prisma
    // Some fields might come in as empty arrays which can cause issues with Prisma
    const arrayFields = [
      'portfolio', 'project', 'section', 'tags', 'desired_output_format',
      'desired_style_tone', 'ai_action_process_dropdown', 'required_tools_software',
      'required_hardware', 'required_skills', 'required_devices',
      'optimal_time_of_day', 'related_portfolios', 'related_projects', 
      'related_sections'
    ];
    
    // Ensure each array field has at least one value or is set to an empty array
    arrayFields.forEach(field => {
      if (field in updateData) {
        // If it's null or empty string, set to empty array
        if (updateData[field] === null || updateData[field] === '') {
          updateData[field] = [];
        }
        // If it's not an array but should be, convert to array
        else if (!Array.isArray(updateData[field])) {
          try {
            // Try to parse as JSON if it's a string
            if (typeof updateData[field] === 'string') {
              const parsed = JSON.parse(updateData[field]);
              updateData[field] = Array.isArray(parsed) ? parsed : [updateData[field]];
            } else {
              // Otherwise wrap in array
              updateData[field] = [updateData[field]];
            }
          } catch (e) {
            // If parsing fails, just wrap in array
            updateData[field] = [updateData[field]];
          }
        }
      }
    });

    // Filter condition - can update by either database id or task_id
    const whereCondition = id 
      ? { id } 
      : { task_id };
      
    console.log("Updating task with condition:", whereCondition);
    console.log("Update data:", JSON.stringify(updateData, null, 2));

    try {
      // Update task in database
      const updatedTask = await prisma.task.update({
        where: whereCondition,
        data: updateData as any,
      });
  
      console.log("Task updated successfully:", updatedTask);
      return NextResponse.json(updatedTask);
    } catch (error: any) { // Type error as any for logging
      console.error("Prisma Error Details:", error);
      
      // Check for specific Prisma error codes
      if (error.code === 'P2025') {
        return NextResponse.json({ error: 'Task not found.' }, { status: 404 });
      } else if (error.code === 'P2002') {
        return NextResponse.json({ 
          error: `Database error: Unique constraint failed on the fields: (${error.meta?.target})` 
        }, { status: 409 });
      } else if (error.code?.startsWith('P')) {
        return NextResponse.json({ error: `Database error: ${error.message}` }, { status: 400 });
      } else {
        throw error; // Re-throw to be caught by outer catch
      }
    }
  } catch (error: any) { // Type error as any for logging
    console.error("API Error: Failed to update task:", error);

    // Generic server error for other cases
    return NextResponse.json(
      { error: 'Internal Server Error: Could not update task.' },
      { status: 500 }
    );
  }
}