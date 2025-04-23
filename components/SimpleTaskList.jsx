'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';

export default function SimpleTaskList({ initialTasks, onTasksChanged }) {
  const [tasks, setTasks] = useState(initialTasks || []);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    setTasks(initialTasks || []);
  }, [initialTasks]);
  
  const handleToggleComplete = async (taskId, isCompleted) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed_at: isCompleted ? null : new Date().toISOString(),
          ai_workflow_status: isCompleted ? '1 - Nová (v Inboxe)' : '6 - Hotovo'
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
      
      // Update local state
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === taskId 
            ? {
                ...task, 
                completed_at: isCompleted ? null : new Date().toISOString(),
                ai_workflow_status: isCompleted ? '1 - Nová (v Inboxe)' : '6 - Hotovo'
              }
            : task
        )
      );
      
      if (onTasksChanged) {
        onTasksChanged();
      }
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Failed to update task.');
    }
  };
  
  const handleDeleteTask = async (taskId) => {
    if (!confirm('Are you sure you want to delete this task?')) {
      return;
    }
    
    setIsDeleting(true);
    console.log('Deleting task:', taskId);
    
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Delete error response:', errorData);
        throw new Error(errorData.error || 'Failed to delete task');
      }
      
      // Update local state
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      
      if (onTasksChanged) {
        onTasksChanged();
      }
      
      console.log('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      alert(`Error deleting task: ${error.message}`);
    } finally {
      setIsDeleting(false);
    }
  };
  
  if (!tasks || tasks.length === 0) {
    return <p className="text-gray-500 text-center py-4">No tasks found.</p>;
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Priority</th>
            <th className="p-2 text-left">Due Date</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className="border-t">
              <td className="p-2">
                <button
                  onClick={() => handleToggleComplete(task.id, !!task.completed_at)}
                  className="text-gray-500 hover:text-green-600"
                  aria-label={task.completed_at ? "Mark as incomplete" : "Mark as complete"}
                >
                  {task.completed_at ? (
                    <CheckCircle2 className="text-green-600" size={20} />
                  ) : (
                    <Circle size={20} />
                  )}
                </button>
              </td>
              <td className="p-2">
                <Link 
                  href={`/tasks/${task.id}`}
                  className={`text-blue-600 hover:text-blue-800 ${task.completed_at ? 'line-through text-gray-500' : ''}`}
                >
                  {task.name || '(Untitled Task)'}
                </Link>
              </td>
              <td className="p-2">
                {task.priority || 'N/A'}
              </td>
              <td className="p-2">
                {task.due_date ? new Date(task.due_date).toLocaleDateString() : 'N/A'}
              </td>
              <td className="p-2">
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  disabled={isDeleting}
                  className="inline-flex items-center justify-center p-1 rounded-full text-red-500 hover:bg-red-100 focus:outline-none"
                  aria-label="Delete task"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
