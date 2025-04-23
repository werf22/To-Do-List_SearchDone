// lib/taskIdGenerator.ts
import prisma from '@/lib/prisma';

/**
 * Generates the next sequential task ID
 * Fetches all tasks, finds the highest task_id, and returns the next number
 * @returns The next sequential task ID as a string
 */
export async function getNextTaskId(): Promise<string> {
  try {
    // Get all tasks sorted by task_id
    const tasks = await prisma.task.findMany({
      select: {
        task_id: true
      },
      orderBy: {
        created_at: 'asc'
      }
    });

    // Find the highest current task_id
    let highestId = -1;
    tasks.forEach(task => {
      if (task.task_id) {
        const taskIdNum = parseInt(task.task_id, 10);
        if (!isNaN(taskIdNum) && taskIdNum > highestId) {
          highestId = taskIdNum;
        }
      }
    });

    // Return the next ID as a string
    return String(highestId + 1);
  } catch (error) {
    console.error("Error generating next task ID:", error);
    return "0"; // Default to 0 if an error occurs
  }
}
