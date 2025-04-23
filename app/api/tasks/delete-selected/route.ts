// app/api/tasks/delete-selected/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  console.log('DELETE SELECTED endpoint called');
  
  try {
    const body = await request.json();
    console.log('Request body:', body);
    
    const { ids } = body;
    
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      console.error('Invalid or empty ids array');
      return NextResponse.json({ error: 'Invalid or empty ids array' }, { status: 400 });
    }
    
    console.log(`Attempting to delete ${ids.length} tasks:`, ids);
    
    // Delete tasks one by one
    let deletedCount = 0;
    
    for (const id of ids) {
      try {
        await prisma.task.delete({
          where: { id }
        });
        deletedCount++;
        console.log(`Successfully deleted task ${id}`);
      } catch (error) {
        console.error(`Error deleting task ${id}:`, error);
      }
    }
    
    console.log(`Deleted ${deletedCount} out of ${ids.length} tasks`);
    
    return NextResponse.json({ 
      success: true,
      message: `Deleted ${deletedCount} out of ${ids.length} tasks` 
    });
    
  } catch (error) {
    console.error('Error in delete-selected endpoint:', error);
    return NextResponse.json({ 
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
