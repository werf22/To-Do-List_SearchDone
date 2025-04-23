'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';

export default function DeleteTaskButton({ taskId, onSuccess }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!confirm('Are you sure you want to delete this task?')) {
      return;
    }
    
    setIsDeleting(true);
    console.log('Deleting task:', taskId);
    
    try {
      const response = await fetch('/api/delete-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId }),
      });
      
      const data = await response.json();
      console.log('Delete response:', data);
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete task');
      }
      
      if (onSuccess) {
        onSuccess();
      }
      
      alert('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      alert(`Error deleting task: ${error.message}`);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="inline-flex items-center justify-center p-2 rounded-full text-red-500 hover:bg-red-100 focus:outline-none"
      title="Delete task"
    >
      {isDeleting ? (
        <span className="animate-pulse">Deleting...</span>
      ) : (
        <Trash2 size={18} />
      )}
    </button>
  );
}
