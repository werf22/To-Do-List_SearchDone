'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NukeTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch tasks on page load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/tasks');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const forceDeleteTask = async (taskId) => {
    if (!confirm(`Are you ABSOLUTELY SURE you want to delete this task? This action cannot be undone!`)) {
      return;
    }

    setIsDeleting(true);
    setMessage(`Attempting extreme force delete for task ${taskId}...`);

    try {
      const response = await fetch('/api/force-delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId }),
      });

      const result = await response.json();
      console.log('Delete result:', result);

      if (response.ok) {
        setMessage(`🎉 SUCCESS! Task ${taskId} was deleted.`);
        fetchTasks(); // Refresh the list
      } else {
        setMessage(`⚠️ ERROR: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Delete error:', error);
      setMessage(`⚠️ ERROR: ${error.message || 'Unknown error'}`);
    } finally {
      setIsDeleting(false);
    }
  };

  const deleteAllTasks = async () => {
    if (!confirm(`⚠️ DANGER! This will DELETE ALL TASKS in the database. Are you ABSOLUTELY SURE?`)) {
      return;
    }
    
    if (!confirm(`⚠️ FINAL WARNING! This is your last chance to cancel. ALL TASKS WILL BE DELETED!`)) {
      return;
    }

    setIsDeleting(true);
    setMessage('Nuclear option activated: Deleting ALL tasks...');

    try {
      let successCount = 0;
      let failCount = 0;

      for (const task of tasks) {
        try {
          const response = await fetch('/api/force-delete', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskId: task.id }),
          });

          if (response.ok) {
            successCount++;
          } else {
            failCount++;
          }
        } catch (error) {
          console.error(`Failed to delete task ${task.id}:`, error);
          failCount++;
        }
      }

      setMessage(`Operation complete: ${successCount} tasks deleted, ${failCount} failed.`);
      fetchTasks(); // Refresh the list
    } catch (error) {
      console.error('Mass delete error:', error);
      setMessage(`⚠️ ERROR: ${error.message || 'Unknown error'}`);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-red-600">⚠️ EMERGENCY TASK DELETION ⚠️</h1>
          <Link href="/" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Return to Dashboard
          </Link>
        </div>
        <p className="mt-2 text-gray-700">
          Use this page with extreme caution! It provides direct access to force delete tasks when normal deletion fails.
        </p>
      </header>

      {message && (
        <div className={`p-4 mb-6 rounded ${message.includes('SUCCESS') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message}
        </div>
      )}

      <div className="mb-8">
        <button
          onClick={deleteAllTasks}
          disabled={isDeleting || tasks.length === 0}
          className="px-6 py-3 bg-red-600 text-white rounded-md font-bold hover:bg-red-700 disabled:opacity-50"
        >
          {isDeleting ? 'DELETING ALL TASKS...' : '☢️ NUCLEAR OPTION: DELETE ALL TASKS ☢️'}
        </button>
        <p className="mt-2 text-sm text-gray-500">
          ⚠️ This is an irreversible operation! It will attempt to delete every task in the database.
        </p>
      </div>

      {loading ? (
        <p className="text-center py-4">Loading tasks...</p>
      ) : error ? (
        <p className="text-red-500 text-center py-4">Error: {error}</p>
      ) : tasks.length === 0 ? (
        <p className="text-center py-4">No tasks found.</p>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Tasks In Database ({tasks.length})</h2>
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">{task.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {task.name || '(Untitled Task)'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(task.created_at).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => forceDeleteTask(task.id)}
                        disabled={isDeleting}
                        className="text-red-600 hover:text-red-900 font-bold"
                      >
                        FORCE DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
