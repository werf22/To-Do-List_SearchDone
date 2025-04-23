// components/DeleteButton.tsx
'use client';

import React from 'react';
import { Trash2 } from 'lucide-react';

interface DeleteButtonProps {
  taskId: string;
  onDeleted?: () => void;
}

export default function DeleteButton({ taskId, onDeleted }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = React.useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!confirm('Are you sure you want to delete this task?')) {
      return;
    }
    
    console.log('DeleteButton: Deleting task:', taskId);
    setIsDeleting(true);
    
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
      
      console.log('DeleteButton: Task deleted successfully');
      
      if (onDeleted) {
        onDeleted();
      }
    } catch (error) {
      console.error('DeleteButton: Error deleting task:', error);
      alert('Failed to delete task. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDeleting}
      className="text-red-500 hover:text-red-700"
      aria-label="Delete task"
      type="button"
    >
      <Trash2 size={18} />
      {isDeleting && <span className="ml-1">...</span>}
    </button>
  );
}
