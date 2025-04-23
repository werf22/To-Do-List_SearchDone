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
  
  try {
    // Build the WHERE clause for Prisma based on query parameters
    const whereClause: any = {}; // Using 'any' type to bypass strict typing issues with complex Prisma filters
    
    // Common filters like text search
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
    
    // Date filters
    if (dueDateBefore) {
      whereClause.due_date = { ...(whereClause.due_date || {}), lte: new Date(dueDateBefore) };
    }
    
    if (dueDateAfter) {
      whereClause.due_date = { ...(whereClause.due_date || {}), gte: new Date(dueDateAfter) };
    }
    
    if (createdAtBefore) {
      whereClause.created_at = { ...(whereClause.created_at || {}), lte: new Date(createdAtBefore) };
    }
    
    if (createdAtAfter) {
      whereClause.created_at = { ...(whereClause.created_at || {}), gte: new Date(createdAtAfter) };
    }
    
    // Now add filters based on the query parameters - these construct the Prisma WHERE clause
    
    if (portfolio) {
      whereClause.portfolio = { has: portfolio };
    }
    
    if (project) {
      whereClause.project = { has: project };
    }
    
    if (section) {
      whereClause.section = { has: section };
    }
    
    if (priority) {
      whereClause.priority = priority;
    }
    
    // Tags (array contains) - use Prisma's 'has' operator for arrays
    if (tags.length > 0) {
      // If more than one tag, make a compound condition (has ANY of the tags)
      if (tags.length > 1) {
        whereClause.OR = tags.map(tag => ({
          tags: { has: tag }
        }));
      } else {
        // Just a single tag
        whereClause.tags = { has: tags[0] };
      }
    }
    
    // Related entities - create multiple OR conditions
    if (relatedEntities.length > 0) {
      // Use OR conditions for text fields containing the terms
      const orConditions = relatedEntities.map(entity => ({
        OR: [
          // We need to use type 'any' for these complex where conditions
          { related_entities: { contains: entity } } as any
        ]
      }));
      
      // Add these conditions to the main where clause
      if (!whereClause.OR) {
        whereClause.OR = orConditions;
      } else {
        whereClause.OR = [...whereClause.OR, ...orConditions.map(c => c.OR[0])];
      }
    }
    
    // Related tasks - similar approach to related entities
    if (relatedTasks.length > 0) {
      // Use OR conditions for text fields containing the terms
      const orConditions = relatedTasks.map(task => ({
        OR: [
          // We need to use type 'any' for these complex where conditions
          { related_tasks: { contains: task } } as any
        ]
      }));
      
      // Add these conditions to the main where clause
      if (!whereClause.OR) {
        whereClause.OR = orConditions;
      } else {
        whereClause.OR = [...whereClause.OR, ...orConditions.map(c => c.OR[0])];
      }
    }
    
    // Dropdown selections
    if (financialAspect) {
      whereClause.financial_aspect = financialAspect;
    }
    
    if (taskType) {
      whereClause.task_type = taskType;  
    }
    
    if (deadlineType) {
      whereClause.deadline_type = deadlineType;
    }
    
    if (recurrenceFrequency) {
      whereClause.recurrence_frequency = recurrenceFrequency;
    }
    
    if (internetRequirement) {
      whereClause.internet_requirement = internetRequirement;
    }
    
    if (waitingFor) {
      whereClause.waiting_for = waitingFor;
    }
    
    // Multiselects - use Prisma's 'has' operator for arrays
    if (requiredToolsSoftware.length > 0) {
      // For multi-select fields that are String[]
      if (requiredToolsSoftware.length > 1) {
        const toolConditions = requiredToolsSoftware.map(tool => ({
          required_tools_software: { has: tool }
        }));
        
        if (!whereClause.OR) {
          whereClause.OR = toolConditions;
        } else {
          whereClause.OR = [...whereClause.OR, ...toolConditions];
        }
      } else {
        whereClause.required_tools_software = { has: requiredToolsSoftware[0] };
      }
    }
    
    if (requiredHardware.length > 0) {
      if (requiredHardware.length > 1) {
        const hardwareConditions = requiredHardware.map(hw => ({
          required_hardware: { has: hw }
        }));
        
        if (!whereClause.OR) {
          whereClause.OR = hardwareConditions;
        } else {
          whereClause.OR = [...whereClause.OR, ...hardwareConditions];
        }
      } else {
        whereClause.required_hardware = { has: requiredHardware[0] };
      }
    }
    
    if (requiredSkills.length > 0) {
      if (requiredSkills.length > 1) {
        const skillsConditions = requiredSkills.map(skill => ({
          required_skills: { has: skill }
        }));
        
        if (!whereClause.OR) {
          whereClause.OR = skillsConditions;
        } else {
          whereClause.OR = [...whereClause.OR, ...skillsConditions];
        }
      } else {
        whereClause.required_skills = { has: requiredSkills[0] };
      }
    }
    
    if (requiredDevices.length > 0) {
      if (requiredDevices.length > 1) {
        const deviceConditions = requiredDevices.map(device => ({
          required_devices: { has: device }
        }));
        
        if (!whereClause.OR) {
          whereClause.OR = deviceConditions;
        } else {
          whereClause.OR = [...whereClause.OR, ...deviceConditions];
        }
      } else {
        whereClause.required_devices = { has: requiredDevices[0] };
      }
    }
    
    if (optimalTimeOfDay.length > 0) {
      if (optimalTimeOfDay.length > 1) {
        const timeConditions = optimalTimeOfDay.map(time => ({
          optimal_time_of_day: { has: time }
        }));
        
        if (!whereClause.OR) {
          whereClause.OR = timeConditions;
        } else {
          whereClause.OR = [...whereClause.OR, ...timeConditions];
        }
      } else {
        whereClause.optimal_time_of_day = { has: optimalTimeOfDay[0] };
      }
    }
    
    // AI action process dropdown - also an array field
    if (aiActionProcessDropdown.length > 0) {
      if (aiActionProcessDropdown.length > 1) {
        const processConditions = aiActionProcessDropdown.map(process => ({
          ai_action_process_dropdown: { has: process }
        }));
        
        if (!whereClause.OR) {
          whereClause.OR = processConditions;
        } else {
          whereClause.OR = [...whereClause.OR, ...processConditions];
        }
      } else {
        whereClause.ai_action_process_dropdown = { has: aiActionProcessDropdown[0] };
      }
    }
    
    // AI fields
    if (aiWorkflowStatus) {
      whereClause.ai_workflow_status = aiWorkflowStatus;
    }
    
    if (allowAutonomousExecution) {
      whereClause.allow_autonomous_execution = allowAutonomousExecution;
    }
    
    // Other filters
    if (cognitiveLoad) {
      whereClause.cognitive_load = cognitiveLoad;
    }
    
    if (energyLevelRequired) {
      whereClause.energy_level_required = energyLevelRequired;
    }
    
    // Budget range
    if (estimatedCostBudgetMin) {
      whereClause.estimated_cost_budget = {
        ...(whereClause.estimated_cost_budget || {}),
        gte: parseFloat(estimatedCostBudgetMin),
      };
    }
    
    if (estimatedCostBudgetMax) {
      whereClause.estimated_cost_budget = {
        ...(whereClause.estimated_cost_budget || {}),
        lte: parseFloat(estimatedCostBudgetMax),
      };
    }
    
    console.log('Filter conditions:', JSON.stringify(whereClause, null, 2));
    
    const tasks = await prisma.task.findMany({
      where: whereClause,
      orderBy: {
        created_at: 'desc', // Order by newest first
      },
      // Consider adding pagination in future enhancements
    });
    
    console.log(`Fetched ${tasks.length} tasks`);
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("API Error: Failed to fetch tasks:", error);
    // Provide a slightly more specific error message to the client
    let errorMessage = 'Internal Server Error: Could not fetch tasks.';
    if (error instanceof Error) {
      // You could potentially check for specific error types here,
      // but avoid sending raw database errors directly to the client.
      // For now, just indicate it might be a database issue.
      errorMessage = `Failed to fetch tasks. Potential database issue: ${error.message}`;
    }
    return NextResponse.json(
      { error: errorMessage },
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

  } catch (error: any) {
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
    } catch (error: any) {
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
  } catch (error: any) {
    console.error("API Error: Failed to update task:", error);

    // Generic server error for other cases
    return NextResponse.json(
      { error: 'Internal Server Error: Could not update task.' },
      { status: 500 }
    );
  }
}