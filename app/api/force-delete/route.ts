// app/api/force-delete/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { PrismaClient } from '@prisma/client';

// This is a nuclear option that will directly use Prisma Client to delete a task
export async function POST(request: NextRequest) {
  console.log('⚠️ FORCE DELETE ENDPOINT CALLED');
  
  try {
    const body = await request.json();
    console.log('Request body:', body);
    
    const { taskId } = body;
    
    if (!taskId) {
      console.error('No taskId provided');
      return NextResponse.json({ success: false, error: 'Task ID is required' }, { status: 400 });
    }
    
    console.log(`🚨 Force deleting task with ID: ${taskId}`);
    
    // Directly use Prisma to delete the task with raw SQL if necessary
    try {
      // First attempt: Standard Prisma delete operation
      const deleted = await prisma.task.delete({
        where: { id: taskId }
      });
      
      console.log('Task deleted successfully with standard Prisma:', deleted);
      return NextResponse.json({ success: true, message: 'Task deleted successfully' });
    } catch (err) {
      console.error('Standard deletion failed, trying direct database query:', err);
      
      // Second attempt: Raw SQL query (should work even if Prisma's ORM layer has issues)
      const deleted = await prisma.$executeRaw`DELETE FROM "Task" WHERE id = ${taskId}`;
      
      if (deleted) {
        console.log('Task deleted successfully with raw SQL query');
        return NextResponse.json({ success: true, message: 'Task deleted successfully with raw SQL' });
      } else {
        throw new Error('Failed to delete task with raw SQL');
      }
    }
  } catch (error) {
    console.error('Force delete error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 500 });
  }
}
