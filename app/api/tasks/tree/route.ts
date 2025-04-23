import { NextResponse } from 'next/server';
import { PrismaClient, Task } from '@prisma/client'; 
import {
  TaskTreeData,
  PortfolioNode,
  ProjectNode,
  SectionNode,
  TaskNode,
  SubtaskNode,
} from '@/types/task-tree'; 
import { PORTFOLIO_PROJECT_SECTION } from '@/config/TASK_FIELD_CONFIG'; 

const prisma = new PrismaClient();

function buildSubtaskHierarchy(
  taskId: string,
  allTasks: Task[],
  taskMap: Map<string, Task>
): SubtaskNode[] {
  const children: SubtaskNode[] = [];
  for (const task of allTasks) {
    if (task.parent_task_id && task.parent_task_id === taskId) {
      // Ensure the subtask itself has an ID before recursing
      if (task.task_id) {
          children.push({
            id: task.task_id,
            name: task.name ?? 'Unnamed Subtask',
            status: task.ai_workflow_status ?? 'No Status',
            type: 'subtask',
            subtasks: buildSubtaskHierarchy(task.task_id, allTasks, taskMap), // task_id is now guaranteed string
          });
      } else {
          console.warn(`Subtask with null ID encountered under parent ${taskId}: ${task.name ?? 'Unnamed Subtask'}`);
      }
    }
  }
  return children;
}

export async function GET() {
  try {
    // 1. Build the initial tree skeleton 
    const taskTree: TaskTreeData = [];
    const portfolioMap = new Map<string, PortfolioNode>();
    const projectMap = new Map<string, ProjectNode>();
    const sectionMap = new Map<string, SectionNode>();

    for (const portfolioName in PORTFOLIO_PROJECT_SECTION) {
        // ... skeleton building logic ... 
        const portfolioNode: PortfolioNode = { id: portfolioName, name: portfolioName, type: 'portfolio', projects: [] };
        taskTree.push(portfolioNode);
        portfolioMap.set(portfolioName, portfolioNode);
        const projects = PORTFOLIO_PROJECT_SECTION[portfolioName];
        for (const projectName in projects) {
            const projectNode: ProjectNode = { id: projectName, name: projectName, type: 'project', sections: [] };
            portfolioNode.projects.push(projectNode);
            projectMap.set(projectName, projectNode);
            const sections = projects[projectName];
            for (const sectionName of sections) {
                const sectionNode: SectionNode = { id: sectionName, name: sectionName, type: 'section', tasks: [] };
                projectNode.sections.push(sectionNode);
                sectionMap.set(sectionName, sectionNode);
            }
        }
    }


    // 2. Fetch all tasks ...
    const allTasks = await prisma.task.findMany({
       orderBy: { created_at: 'asc' },
    });

    // Create a map for efficient lookup, checking for task_id
    const taskMap = new Map<string, Task>();
    allTasks.forEach(task => {
        if (task.task_id) { // Check task_id before setting map key
            taskMap.set(task.task_id, task);
        } else {
             console.warn(`Task with null ID found during map creation: ${task.name ?? 'Unnamed Task'}`);
        }
    });

    // 3. Iterate through tasks and place them into the skeleton
    const processedTaskIds = new Set<string>();

    for (const task of allTasks) {
        // Ensure task has an ID before processing
        if (!task.task_id) continue;

        // Skip subtasks whose parent exists (explicit null check for parent_task_id)
        if (task.parent_task_id !== null && taskMap.has(task.parent_task_id)) {
            continue;
        }

        // We know task.task_id is valid here
        processedTaskIds.add(task.task_id);

        // ... (logic for finding targetSectionNode remains the same)
        const targetPortfolioName = task.portfolio?.[0] ?? null;
        const targetProjectName = task.project?.[0] ?? null;
        const targetSectionName = task.section?.[0] ?? null;
        let targetSectionNode: SectionNode | undefined = undefined;
        if (targetPortfolioName && targetProjectName && targetSectionName) {
             const portfolio = portfolioMap.get(targetPortfolioName);
             const project = portfolio?.projects.find(p => p.name === targetProjectName);
             targetSectionNode = project?.sections.find(s => s.name === targetSectionName);
             if (!targetSectionNode && targetSectionName) {
                 targetSectionNode = sectionMap.get(targetSectionName);
             }
        } else if (targetSectionName) {
             targetSectionNode = sectionMap.get(targetSectionName);
        }


        if (targetSectionNode) {
            // task.task_id is guaranteed non-null here
            const taskNode: TaskNode = {
                id: task.task_id,
                name: task.name ?? 'Unnamed Task',
                status: task.ai_workflow_status ?? 'No Status',
                type: 'task',
                subtasks: buildSubtaskHierarchy(task.task_id, allTasks, taskMap),
            };
            targetSectionNode.tasks.push(taskNode);
        } else {
             console.warn(`Task "${task.name ?? 'Unnamed Task'}" (ID: ${task.task_id}) could not be placed. Target: P=${targetPortfolioName}, Pr=${targetProjectName}, S=${targetSectionName}`);
        }
    }

    return NextResponse.json(taskTree);
  } catch (error) {
    // ... (error handling) ...
    console.error('Error fetching task tree:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  } finally {
    // ... (disconnect) ...
    await prisma.$disconnect();
  }
}
