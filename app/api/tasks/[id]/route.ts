// app/api/tasks/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type RouteParams = {
  params: {
    id: string;
  };
}

/**
 * GET handler to fetch a specific task by ID
 */
export async function GET(request: NextRequest, { params }: RouteParams) {
  console.log(`GET /api/tasks/${params.id} called`);
  
  try {
    // Validate task ID
    const taskId = params.id;
    if (!taskId) {
      return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
    }

    // Fetch the task by ID
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    // Return 404 if task is not found
    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    // Return the task
    return NextResponse.json(task);
  } catch (error: any) {
    console.error(`API Error: Failed to fetch task ${params.id}:`, error);
    return NextResponse.json(
      { error: 'Internal Server Error: Could not fetch task.' },
      { status: 500 }
    );
  }
}

/**
 * PATCH handler to update a specific task by ID
 */
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  console.log(`PATCH /api/tasks/${params.id} called`);
  
  try {
    // Validate task ID
    const taskId = params.id;
    if (!taskId) {
      return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
    }

    // Parse the request body
    const body = await request.json();
    console.log("Update request body:", body);

    // Check if task exists before doing any processing
    const existingTask = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!existingTask) {
      return NextResponse.json(
        { error: "Task not found" },
        { status: 404 }
      );
    }

    // Process arrays correctly
    const updateData = { ...body };
    
    // Handle multi-select fields that need to be stored as arrays
    const arrayFields = [
      'portfolio', 'project', 'section', 'tags', 'desired_output_format', 
      'desired_style_tone', 'ai_action_process_dropdown', 'required_tools_software',
      'required_hardware', 'required_skills', 'required_devices',
      'optimal_time_of_day', 'related_portfolios', 'related_projects',
      'related_sections', 'related_entities'
    ];

    // Special hierarchical fields with "primary" value concept (first in array)
    const hierarchyFields = ['portfolio', 'project', 'section'];

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

    console.log("Before processing, updateData:", JSON.stringify(updateData, null, 2));

    // Process array fields
    arrayFields.forEach(field => {
      if (updateData[field] !== undefined) {
        // Special handling for hierarchy fields (portfolio, project, section)
        if (hierarchyFields.includes(field)) {
          console.log(`Processing hierarchy field ${field}:`, updateData[field]);
          
          // If it's a string, convert to array
          if (typeof updateData[field] === 'string') {
            if (updateData[field].trim()) {
              // Handle JSON array format if applicable
              if (updateData[field].startsWith('[') && updateData[field].endsWith(']')) {
                try {
                  const parsed = JSON.parse(updateData[field]);
                  if (Array.isArray(parsed)) {
                    updateData[field] = parsed.map((item: any) => 
                      item === null || item === undefined ? '' : String(item).trim()
                    ).filter(Boolean);
                  } else {
                    updateData[field] = [String(parsed).trim()].filter(Boolean);
                  }
                } catch (e) {
                  // If JSON parse fails, use CSV parsing
                  updateData[field] = splitCsvWithQuotes(updateData[field]);
                }
              } else {
                // Use regular CSV parsing
                updateData[field] = splitCsvWithQuotes(updateData[field]);
              }
            } else {
              updateData[field] = [];
            }
          } 
          // If it's already an array, ensure all items are strings
          else if (Array.isArray(updateData[field])) {
            updateData[field] = updateData[field]
              .map((item: any) => item === null || item === undefined ? '' : String(item).trim())
              .filter(Boolean);
          }
          // Any other type (null, undefined) becomes an empty array
          else {
            updateData[field] = updateData[field] === null ? [] : [String(updateData[field])].filter(Boolean);
          }
          
          console.log(`Processed hierarchy field ${field} to:`, updateData[field]);
        }
        // If it's already an array, validate and normalize it
        else if (Array.isArray(updateData[field])) {
          // Convert all items to strings for consistency
          updateData[field] = updateData[field].map((item: any) => 
            item === null || item === undefined ? '' : String(item).trim()
          ).filter(Boolean);
        }
        // If it's a string, convert to array
        else if (typeof updateData[field] === 'string') {
          if (updateData[field].trim()) {
            updateData[field] = splitCsvWithQuotes(updateData[field]);
          } else {
            updateData[field] = [];
          }
        }
        // Any other type becomes an empty array or single-item array
        else {
          updateData[field] = updateData[field] === null ? [] : [String(updateData[field])].filter(Boolean);
        }
      }
    });

    console.log("After processing, updateData:", JSON.stringify(updateData, null, 2));

    // Process date fields
    const dateFields = ['due_date', 'start_date', 'created_at', 'completed_at', 'last_modified_at'];
    
    dateFields.forEach(field => {
      if (updateData[field] !== undefined) {
        if (updateData[field] && typeof updateData[field] === 'string') {
          try {
            updateData[field] = new Date(updateData[field]);
          } catch (e) {
            console.warn(`Could not parse date field ${field}:`, e);
            // Keep as string if parsing fails
          }
        } else if (updateData[field] === null || updateData[field] === '') {
          updateData[field] = null;
        }
      }
    });

    // Allow updating task_id field
    if (updateData.task_id !== undefined) {
      console.log(`Updating task_id from ${existingTask.task_id || 'none'} to: ${updateData.task_id}`);
    }

    // Log the final data being sent to the database
    console.log("Final data being sent to database:", JSON.stringify(updateData, null, 2));

    // Update the task
    const updatedTask = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: updateData,
    });

    // Return the updated task
    return NextResponse.json(updatedTask);
  } catch (error: any) {
    console.error(`API Error: Failed to update task ${params.id}:`, error);
    
    // Handle specific error types
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    
    return NextResponse.json(
      { error: 'Internal Server Error: Could not update task.' },
      { status: 500 }
    );
  }
}

/**
 * DELETE handler to delete a specific task by ID
 */
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const taskId = params.id;
  console.log(`[API DELETE /api/tasks/${taskId}] Received request.`); // <-- Log: Request received

  if (!taskId) {
    console.log(`[API DELETE /api/tasks/${taskId}] Error: Task ID is missing.`);
    return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
  }

  try {
    console.log(`[API DELETE /api/tasks/${taskId}] Attempting to delete task from database...`); // <-- Log: Prisma call attempt
    await prisma.task.delete({
      where: { id: taskId },
    });
    console.log(`[API DELETE /api/tasks/${taskId}] Task successfully deleted from database.`); // <-- Log: Prisma success
    return NextResponse.json({ success: true, message: 'Task deleted successfully' });
  } catch (error: any) {
    console.error(`[API DELETE /api/tasks/${taskId}] Error during database deletion:`, error); // <-- Log: Prisma error

    // Handle specific Prisma errors if needed
    if (error.code === 'P2025') { // Record to delete does not exist
      console.log(`[API DELETE /api/tasks/${taskId}] Error: Task not found.`);
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    // Generic server error
    console.log(`[API DELETE /api/tasks/${taskId}] Returning generic 500 error.`);
    return NextResponse.json({ error: 'Failed to delete task', details: error.message || 'Unknown error' }, { status: 500 });
  }
}
