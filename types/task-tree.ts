import type { Task } from '@prisma/client';

// Define interfaces for the hierarchical structure
// These types are shared between the API route and the frontend component.

export type TreeNodeType = 'portfolio' | 'project' | 'section' | 'task' | 'subtask';

// Base interface for all nodes in the tree
interface BaseNode {
  id: string; // Unique ID (config name for structure, task ID for tasks/subtasks)
  name: string;
  type: TreeNodeType;
}

// Interface for Subtasks
export interface SubtaskNode extends BaseNode {
  type: 'subtask';
  status: string; // Status from the task's ai_workflow_status
  subtasks: SubtaskNode[]; // Nested subtasks
}

// Interface for Tasks
export interface TaskNode extends BaseNode {
  type: 'task';
  status: string; // Status from the task's ai_workflow_status
  subtasks: SubtaskNode[]; // Top-level subtasks for this task
}

// Interface for Sections
export interface SectionNode extends BaseNode {
  type: 'section';
  tasks: TaskNode[]; // Tasks directly within this section
}

// Interface for Projects
export interface ProjectNode extends BaseNode {
  type: 'project';
  sections: SectionNode[]; // Sections within this project
}

// Interface for Portfolios
export interface PortfolioNode extends BaseNode {
  type: 'portfolio';
  projects: ProjectNode[]; // Projects within this portfolio
}

// The final data structure expected by the frontend
export type TaskTreeData = PortfolioNode[];
