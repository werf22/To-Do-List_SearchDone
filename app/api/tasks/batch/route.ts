// app/api/tasks/batch/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Task } from '@prisma/client';

/**
 * PATCH handler to update multiple tasks at once
 */
export async function PATCH(request: NextRequest) {
  console.log(`PATCH /api/tasks/batch called`);
  
  try {
    const body = await request.json();
    const { taskIds, update } = body;
    
    // Validation
    if (!taskIds || !Array.isArray(taskIds) || taskIds.length === 0) {
      return NextResponse.json({ error: 'Task IDs array is required and cannot be empty' }, { status: 400 });
    }
    
    if (!update || typeof update !== 'object') {
      return NextResponse.json({ error: 'Update data is required and must be an object' }, { status: 400 });
    }
    
    console.log(`Updating ${taskIds.length} tasks:`, taskIds);
    console.log('With data:', update);
    
    // Handle date fields
    if (update.completed_at) {
      update.completed_at = new Date(update.completed_at);
    }
    
    // Update the tasks
    const result = await prisma.task.updateMany({
      where: {
        id: {
          in: taskIds
        }
      },
      data: update as Partial<Task>
    });
    
    console.log(`Updated ${result.count} tasks`);
    
    return NextResponse.json({ message: `Successfully updated ${result.count} tasks` });
  } catch (error: any) {
    console.error("API Error: Failed to update tasks:", error);
    return NextResponse.json(
      { error: `Failed to update tasks: ${error.message}` },
      { status: 500 }
    );
  }
}

/**
 * DELETE handler to delete multiple tasks at once
 */
export async function DELETE(request: NextRequest) {
  console.log(`DELETE /api/tasks/batch called`);
  
  try {
    // Log the full request for debugging
    console.log("DELETE request headers:", request.headers);
    
    const contentType = request.headers.get('content-type');
    console.log("Content-Type:", contentType);
    
    // Get request body and log it
    let body;
    try {
      body = await request.json();
      console.log("Request body parsed:", body);
    } catch (e) {
      console.error("Error parsing request body:", e);
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }
    
    const { taskIds } = body;
    
    // Validation with detailed logging
    if (!taskIds) {
      console.error("taskIds is missing from request body");
      return NextResponse.json({ error: 'Task IDs are required' }, { status: 400 });
    }
    
    if (!Array.isArray(taskIds)) {
      console.error("taskIds is not an array:", typeof taskIds);
      return NextResponse.json({ error: 'Task IDs must be an array' }, { status: 400 });
    }
    
    if (taskIds.length === 0) {
      console.error("taskIds array is empty");
      return NextResponse.json({ error: 'Task IDs array cannot be empty' }, { status: 400 });
    }
    
    console.log(`Attempting to delete ${taskIds.length} tasks:`, taskIds);
    
    // Delete the tasks with individual handling to ensure deletion works
    const result = { count: 0 };
    
    // Try deleting one by one if bulk delete fails
    for (const taskId of taskIds) {
      try {
        const deleteResult = await prisma.task.delete({
          where: {
            id: taskId
          }
        });
        
        if (deleteResult) {
          result.count++;
        }
      } catch (error) {
        console.error(`Failed to delete task ${taskId}:`, error);
        // Continue with other tasks even if one fails
      }
    }
    
    console.log(`Deleted ${result.count} tasks`);
    
    return NextResponse.json({ message: `Successfully deleted ${result.count} tasks` });
  } catch (error: any) {
    console.error("API Error: Failed to delete tasks:", error);
    return NextResponse.json(
      { error: `Failed to delete tasks: ${error.message}` },
      { status: 500 }
    );
  }
}
