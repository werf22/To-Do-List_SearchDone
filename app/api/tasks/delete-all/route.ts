// app/api/tasks/delete-all/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/**
 * DELETE handler to delete all tasks
 * WARNING: This is a dangerous operation and should be used with caution
 */
export async function DELETE() {
  console.log("DELETE /api/tasks/delete-all called");
  
  try {
    // Delete all tasks
    const deleteResult = await prisma.task.deleteMany({});
    
    console.log(`Deleted ${deleteResult.count} tasks`);
    
    return NextResponse.json({ 
      message: `Successfully deleted ${deleteResult.count} tasks` 
    });
  } catch (error: any) {
    console.error("API Error: Failed to delete all tasks:", error);
    
    return NextResponse.json(
      { error: `Failed to delete all tasks: ${error.message}` },
      { status: 500 }
    );
  }
}
