// components/TaskList.tsx
import { useState } from 'react';
import type { Task } from '@prisma/client'; // Import the Task type from Prisma
import Link from 'next/link'; // Import Link for navigation
import { useRouter } from 'next/navigation';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';
import DeleteButton from './DeleteButton'; // Import the new DeleteButton component

// Define the props this component expects
interface TaskListProps {
  tasks: Task[]; // An array of Task objects
  onTasksChanged?: () => void; // Callback for when tasks are modified
}

export default function TaskList({ tasks, onTasksChanged }: TaskListProps) {
  const router = useRouter();
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMarkingComplete, setIsMarkingComplete] = useState(false);

  // If there are no tasks, don't render anything (the parent page handles the "No tasks" message)
  if (!tasks || tasks.length === 0) {
    return null;
  }

  const handleTaskSelection = (taskId: string) => {
    setSelectedTasks(prev => 
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const handleSelectAll = () => {
    if (selectedTasks.length === tasks.length) {
      // Deselect all if all are currently selected
      setSelectedTasks([]);
    } else {
      // Select all
      setSelectedTasks(tasks.map(task => task.id));
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedTasks.length === 0) return;
    
    if (!confirm(`Are you sure you want to delete ${selectedTasks.length} selected task(s)?`)) {
      return;
    }
    
    console.log("Starting deletion of tasks:", selectedTasks);
    setIsDeleting(true);
    
    try {
      // Delete tasks one by one for maximum reliability
      let successCount = 0;
      let failCount = 0;
      
      for (const taskId of selectedTasks) {
        try {
          console.log(`Deleting task ${taskId}...`);
          const response = await fetch(`/api/tasks/${taskId}`, {
            method: 'DELETE',
          });
          
          if (response.ok) {
            successCount++;
            console.log(`Successfully deleted task ${taskId}`);
          } else {
            failCount++;
            console.error(`Failed to delete task ${taskId}`);
          }
        } catch (error) {
          failCount++;
          console.error(`Error deleting task ${taskId}:`, error);
        }
      }
      
      // Clear selection
      setSelectedTasks([]);
      
      // Notify parent component about the change
      if (onTasksChanged) {
        onTasksChanged();
      }
      
      alert(`Successfully deleted ${successCount} task(s)${failCount > 0 ? `, failed to delete ${failCount} task(s)` : ''}`);
    } catch (error) {
      console.error('Error in delete operation:', error);
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleMarkSelectedAsComplete = async (complete: boolean) => {
    if (selectedTasks.length === 0) return;
    
    setIsMarkingComplete(true);
    
    try {
      const response = await fetch('/api/tasks/batch', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          taskIds: selectedTasks,
          update: { 
            completed_at: complete ? new Date().toISOString() : null,
            ai_workflow_status: complete ? '6 - Hotovo' : '1 - Nová (v Inboxe)'
          }
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update tasks');
      }
      
      // Clear selection
      setSelectedTasks([]);
      
      // Notify parent component about the change
      if (onTasksChanged) {
        onTasksChanged();
      }
    } catch (error) {
      console.error('Error updating tasks:', error);
      alert('Failed to update tasks. Please try again.');
    } finally {
      setIsMarkingComplete(false);
    }
  };

  const handleToggleComplete = async (task: Task) => {
    const isComplete = !!task.completed_at;
    
    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          completed_at: isComplete ? null : new Date().toISOString(),
          ai_workflow_status: isComplete ? '1 - Nová (v Inboxe)' : '6 - Hotovo'
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
      
      // Notify parent component about the change
      if (onTasksChanged) {
        onTasksChanged();
      }
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Failed to update task. Please try again.');
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    if (!confirm('Are you sure you want to delete this task?')) {
      return;
    }
    
    console.log("Deleting task:", taskId);
    setIsDeleting(true);
    
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        console.log(`Successfully deleted task ${taskId}`);
        
        // Notify parent component about the change
        if (onTasksChanged) {
          onTasksChanged();
        }
      } else {
        console.error(`Failed to delete task ${taskId}`);
        alert('Failed to delete task. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  // Render an unordered list of tasks
  return (
    <div>
      {/* Batch actions toolbar */}
      {selectedTasks.length > 0 && (
        <div className="bg-gray-100 p-2 mb-4 rounded-md flex items-center">
          <span className="mr-2">
            <strong>{selectedTasks.length}</strong> task(s) selected
          </span>
          <button
            onClick={() => handleMarkSelectedAsComplete(true)}
            disabled={isMarkingComplete}
            className="ml-2 px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 disabled:opacity-50 flex items-center gap-1"
          >
            <CheckCircle2 size={16} />
            Mark Complete
          </button>
          <button
            onClick={() => handleMarkSelectedAsComplete(false)}
            disabled={isMarkingComplete}
            className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 disabled:opacity-50 flex items-center gap-1"
          >
            <Circle size={16} />
            Mark Incomplete
          </button>
          <button
            onClick={handleDeleteSelected}
            disabled={isDeleting}
            className="ml-2 px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 disabled:opacity-50 flex items-center gap-1"
            type="button"
          >
            <Trash2 size={16} />
            Delete {isDeleting ? '...' : ''}
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-2 py-3 text-center">
                <input
                  type="checkbox"
                  checked={selectedTasks.length === tasks.length && tasks.length > 0}
                  onChange={handleSelectAll}
                  className="h-4 w-4 text-blue-600 rounded"
                />
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                {/* Complete icon column */}
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Portfolio
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr 
                key={task.id} 
                className={`hover:bg-gray-50 transition-colors ${task.completed_at ? 'bg-gray-50' : ''}`}
              >
                <td className="px-2 py-4 whitespace-nowrap text-center">
                  <input
                    type="checkbox"
                    checked={selectedTasks.includes(task.id)}
                    onChange={() => handleTaskSelection(task.id)}
                    className="h-4 w-4 text-blue-600 rounded"
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-center">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleComplete(task);
                    }}
                    className="text-gray-500 hover:text-green-600"
                  >
                    {task.completed_at ? (
                      <CheckCircle2 className="text-green-600" size={20} />
                    ) : (
                      <Circle size={20} />
                    )}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Link 
                      href={`/tasks/${task.id}`} 
                      className={`text-blue-600 hover:text-blue-800 font-medium ${task.completed_at ? 'line-through text-gray-500' : ''}`}
                    >
                      {task.name || '(Untitled Task)'}
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleDeleteTask(task.id);
                      }}
                      className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                      title="Delete task"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {task.portfolio && task.portfolio.length > 0 ? task.portfolio[0] : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {task.project && task.project.length > 0 ? task.project[0] : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {task.priority ? (
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      task.priority.startsWith('P0') ? 'bg-red-100 text-red-800' :
                      task.priority.startsWith('P1') ? 'bg-orange-100 text-orange-800' :
                      task.priority.startsWith('P2') ? 'bg-yellow-100 text-yellow-800' :
                      task.priority.startsWith('P3') ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800' // Default for P4 or unknown
                    }`}>
                      {task.priority}
                    </span>
                  ) : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {task.due_date ? new Date(task.due_date).toLocaleDateString() : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {task.ai_workflow_status ? (
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      task.ai_workflow_status.startsWith('1') ? 'bg-gray-100 text-gray-700' :
                      task.ai_workflow_status.startsWith('2') ? 'bg-yellow-100 text-yellow-700' :
                      task.ai_workflow_status.startsWith('3') ? 'bg-blue-100 text-blue-700' :
                      task.ai_workflow_status.startsWith('4') ? 'bg-purple-100 text-purple-700' :
                      task.ai_workflow_status.startsWith('5') ? 'bg-pink-100 text-pink-700 font-bold' :
                      task.ai_workflow_status.startsWith('6') ? 'bg-green-100 text-green-700' :
                      task.ai_workflow_status.startsWith('7') ? 'bg-gray-300 text-gray-600 line-through' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {task.ai_workflow_status.includes('-') ? 
                        task.ai_workflow_status.substring(task.ai_workflow_status.indexOf('-') + 2) : 
                        task.ai_workflow_status}
                    </span>
                  ) : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}