'use client';

import React, { useState, useEffect } from 'react';
import { Task } from '@prisma/client';
import type {
  SubtaskNode,
  TaskNode,
  SectionNode,
  ProjectNode,
  PortfolioNode,
  TaskTreeData
} from '@/types/task-tree';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { CaretSortIcon, ChevronDownIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Skeleton } from '@/components/ui/skeleton';

// Recursive component to render subtasks
const SubtaskTreeItem: React.FC<{ subtask: SubtaskNode; level: number }> = ({ subtask, level }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubtasks = subtask.subtasks && subtask.subtasks.length > 0;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="ml-4 space-y-1">
      <div className="flex items-center space-x-2">
        {hasSubtasks && (
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-6 w-6">
              {isOpen ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
              <span className="sr-only">Toggle Subtasks</span>
            </Button>
          </CollapsibleTrigger>
        )}
         {!hasSubtasks && <div className="w-6" />} {/* Placeholder for alignment */}
        <span className="text-sm font-medium flex-1 py-1">{subtask.name}</span>
        {/* Add other task details or actions here if needed */}
      </div>
      {hasSubtasks && (
        <CollapsibleContent className="pl-4 border-l border-muted ml-[7px]">
          {subtask.subtasks.map((st: SubtaskNode) => (
            <SubtaskTreeItem key={st.id} subtask={st} level={level + 1} />
          ))}
        </CollapsibleContent>
      )}
    </Collapsible>
  );
};

// Component to render tasks within a section
const TaskTreeItem: React.FC<{ task: TaskNode }> = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubtasks = task.subtasks && task.subtasks.length > 0;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="ml-4 space-y-1">
        <div className="flex items-center space-x-2">
            {hasSubtasks && (
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-0 h-6 w-6">
                        {isOpen ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
                        <span className="sr-only">Toggle Subtasks</span>
                    </Button>
                </CollapsibleTrigger>
            )}
             {!hasSubtasks && <div className="w-6" />} {/* Placeholder for alignment */}
            <span className="text-sm font-medium flex-1 py-1">{task.name}</span>
             {/* Add other task details or actions here if needed */}
        </div>
        {hasSubtasks && (
            <CollapsibleContent className="pl-4 border-l border-muted ml-[7px]">
                {task.subtasks.map((subtask: SubtaskNode) => (
                    <SubtaskTreeItem key={subtask.id} subtask={subtask} level={1} />
                ))}
            </CollapsibleContent>
        )}
    </Collapsible>
  );
};

// Component to render sections within a project
const SectionTreeItem: React.FC<{ section: SectionNode }> = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false); // Sections collapsed by default

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="ml-4 space-y-1">
      <div className="flex items-center space-x-2">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0 h-6 w-6">
            {isOpen ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
            <span className="sr-only">Toggle Section</span>
          </Button>
        </CollapsibleTrigger>
        <span className="text-sm font-semibold flex-1 py-1">{section.name}</span>
      </div>
      <CollapsibleContent className="pl-4 border-l border-muted ml-[7px]">
        {section.tasks.map((task: TaskNode) => (
          <TaskTreeItem key={task.id} task={task} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

// Component to render projects within a portfolio
const ProjectTreeItem: React.FC<{ project: ProjectNode }> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false); // Projects collapsed by default

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="ml-4 space-y-1">
      <div className="flex items-center space-x-2">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0 h-6 w-6">
            {isOpen ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
            <span className="sr-only">Toggle Project</span>
          </Button>
        </CollapsibleTrigger>
        <span className="text-md font-semibold flex-1 py-1">{project.name}</span>
      </div>
      <CollapsibleContent className="pl-4 border-l border-muted ml-[7px]">
        {project.sections.map((section: SectionNode) => (
          <SectionTreeItem key={section.name} section={section} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

// Component to render portfolios
const PortfolioTreeItem: React.FC<{ portfolio: PortfolioNode }> = ({ portfolio }) => {
  const [isOpen, setIsOpen] = useState(false); // Portfolios collapsed by default

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-1">
      <div className="flex items-center space-x-2">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0 h-6 w-6">
            {isOpen ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
            <span className="sr-only">Toggle Portfolio</span>
          </Button>
        </CollapsibleTrigger>
        <span className="text-lg font-bold flex-1 py-1">{portfolio.name}</span>
      </div>
      <CollapsibleContent className="pl-4 border-l border-muted ml-[7px]">
        {portfolio.projects.map((project: ProjectNode) => (
          <ProjectTreeItem key={project.name} project={project} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

// Main TaskTree component
const TaskTree: React.FC = () => {
  const [treeData, setTreeData] = useState<TaskTreeData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/tasks/tree');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: TaskTreeData = await response.json();
        setTreeData(data);
      } catch (e: any) {
        console.error('Failed to fetch task tree data:', e);
        setError(`Failed to load tasks: ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
        <div className="space-y-4 p-4">
            <Skeleton className="h-8 w-1/3" />
            <div className="pl-4 space-y-3">
                <Skeleton className="h-6 w-1/2" />
                <div className="pl-4 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-5 w-2/3" />
                </div>
                 <Skeleton className="h-6 w-1/2" />
                 <div className="pl-4 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                </div>
            </div>
            <Skeleton className="h-8 w-1/4" />
             <div className="pl-4 space-y-3">
                <Skeleton className="h-6 w-1/2" />
            </div>
        </div>
    );
  }

  if (error) {
    return <div className="text-destructive p-4">Error: {error}</div>;
  }

  if (!treeData || treeData.length === 0) {
    return <div className="p-4 text-muted-foreground">No tasks found.</div>;
  }

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-semibold mb-3">Task Hierarchy</h2>
      {treeData.map((portfolio: PortfolioNode) => (
        <PortfolioTreeItem key={portfolio.name} portfolio={portfolio} />
      ))}
    </div>
  );
};

export default TaskTree;
