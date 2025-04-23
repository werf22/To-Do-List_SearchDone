'use client';

import { useState, useRef } from 'react';
import { importTasksFromCSV } from '@/lib/csvImport';
import { TASK_FIELD_CONFIG } from '@/config/TASK_FIELD_CONFIG';

interface ImportCSVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportComplete: () => void;
}

export default function ImportCSVModal({ isOpen, onClose, onImportComplete }: ImportCSVModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [importedCount, setImportedCount] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetState = () => {
    setIsLoading(false);
    setErrors([]);
    setWarnings([]);
    setImportedCount(0);
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      // Reset previous import results
      setErrors([]);
      setWarnings([]);
      setImportedCount(0);
    }
  };

  const handleImport = async () => {
    if (!selectedFile) {
      setErrors(['Please select a CSV file to import.']);
      return;
    }

    setIsLoading(true);
    setErrors([]);
    setWarnings([]);

    try {
      // Read the file content
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          const csvContent = e.target?.result as string;
          console.log(`Starting to import CSV file (${csvContent.length} bytes)`);
          
          // Import tasks using the utility function
          const result = await importTasksFromCSV(csvContent);
          
          // Process results
          setErrors(result.errors);
          setWarnings(result.warnings);
          
          // Calculate how many tasks were likely successfully imported
          // This is a bit complex since we're working with an async API
          const successCount = result.errors.length === 0 
            ? result.parsedTasks.length 
            : Math.max(0, result.parsedTasks.length - result.errors.filter(e => e.includes('Failed to')).length);
          
          setImportedCount(successCount);
          
          // If import was successful (at least partially), notify parent
          if (successCount > 0) {
            onImportComplete();
          }
        } catch (error) {
          console.error('Error during CSV import:', error);
          setErrors([`Failed to import: ${(error as Error).message}`]);
        } finally {
          setIsLoading(false);
        }
      };
      
      reader.onerror = () => {
        setErrors(['Failed to read the file. Please try again.']);
        setIsLoading(false);
      };
      
      reader.readAsText(selectedFile);
    } catch (error) {
      console.error('Unexpected error during import:', error);
      setErrors([`An unexpected error occurred: ${(error as Error).message}`]);
      setIsLoading(false);
    }
  };

  // Generate list of required and optional fields based on TASK_FIELD_CONFIG
  const requiredFields = ['name']; // Name is always required
  const allFields = Object.keys(TASK_FIELD_CONFIG);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Import Tasks from CSV</h2>
        </div>
        
        <div className="p-6 overflow-y-auto flex-grow">
          {/* File Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select CSV File
            </label>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-medium
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              disabled={isLoading}
            />
            {selectedFile && (
              <p className="mt-2 text-sm text-gray-500">
                Selected file: {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
              </p>
            )}
          </div>
          
          {/* Import Format Info */}
          <div className="mb-6 bg-gray-50 p-4 rounded-md">
            <h3 className="text-sm font-medium text-gray-700 mb-2">CSV Format Information</h3>
            <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
              <li>First row must contain column headers matching task field names</li>
              <li>Required fields for new tasks: <code className="text-xs bg-gray-200 px-1 rounded">name</code></li>
              <li>To update existing tasks, include <code className="text-xs bg-gray-200 px-1 rounded">task_id</code> column</li>
              <li>Date fields should be in ISO format (YYYY-MM-DD)</li>
              <li>Use commas (<code className="text-xs bg-gray-200 px-1 rounded">,</code>) as column separators</li>
              <li>Use semicolons (<code className="text-xs bg-gray-200 px-1 rounded">;</code>) as separators inside multi-select fields</li>
              <li>Enclose <strong>all values</strong> in double quotes (<code className="text-xs bg-gray-200 px-1 rounded">"value"</code>)</li>
              <li>The string "NaN" will be treated as a null/empty value</li>
              <li>Field values for dropdown fields must match exactly the values in TASK_FIELD_CONFIG</li>
            </ul>
          </div>
          
          {/* Fields Table */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Available Fields</h3>
            <div className="max-h-60 overflow-y-auto border rounded">
              <table className="w-full text-xs border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2 text-left">Field Name</th>
                    <th className="border p-2 text-left">Type</th>
                    <th className="border p-2 text-left">Required</th>
                    <th className="border p-2 text-left">Allowed Values</th>
                  </tr>
                </thead>
                <tbody>
                  {allFields.map(field => (
                    <tr key={field} className="border-b">
                      <td className="border-r p-2">
                        <code className="text-xs bg-gray-100 px-1 rounded">{field}</code>
                      </td>
                      <td className="border-r p-2">
                        {TASK_FIELD_CONFIG[field]?.type || '-'}
                      </td>
                      <td className="border-r p-2">
                        {requiredFields.includes(field) ? 
                          <span className="text-red-600 font-medium">Yes</span> : 
                          <span className="text-gray-500">No</span>
                        }
                      </td>
                      <td className="p-2 max-w-[200px] truncate">
                        {TASK_FIELD_CONFIG[field]?.options ? (
                          <div className="group relative">
                            <span className="cursor-help underline decoration-dotted">
                              {TASK_FIELD_CONFIG[field]?.options?.length || 0} options
                            </span>
                            <div className="hidden group-hover:block absolute z-10 bg-white p-2 border shadow-lg rounded-md w-48 max-h-36 overflow-y-auto">
                              <ul className="text-xs">
                                {TASK_FIELD_CONFIG[field]?.options?.map((option, idx) => (
                                  <li key={idx} className="truncate">{option}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              <span className="font-medium">Note:</span> For dropdown and multi-select fields, use exactly the values defined in TASK_FIELD_CONFIG.
              Hover over the options count to see allowed values.
            </p>
          </div>
          
          {/* Import Results */}
          {importedCount > 0 && (
            <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
              Successfully imported {importedCount} task(s).
            </div>
          )}
          
          {/* Warnings */}
          {warnings.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-medium text-yellow-700 mb-2">Warnings ({warnings.length})</h3>
              <div className="max-h-40 overflow-y-auto">
                <ul className="text-xs text-yellow-600 space-y-1 list-disc list-inside bg-yellow-50 p-3 rounded-md">
                  {warnings.slice(0, 10).map((warning, index) => (
                    <li key={`warning-${index}`}>{warning}</li>
                  ))}
                  {warnings.length > 10 && (
                    <li>...and {warnings.length - 10} more warnings</li>
                  )}
                </ul>
              </div>
            </div>
          )}
          
          {/* Errors */}
          {errors.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-medium text-red-700 mb-2">Errors ({errors.length})</h3>
              <div className="max-h-40 overflow-y-auto">
                <ul className="text-xs text-red-600 space-y-1 list-disc list-inside bg-red-50 p-3 rounded-md">
                  {errors.slice(0, 10).map((error, index) => (
                    <li key={`error-${index}`}>{error}</li>
                  ))}
                  {errors.length > 10 && (
                    <li>...and {errors.length - 10} more errors</li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6 border-t flex justify-end space-x-3">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            disabled={isLoading}
          >
            {importedCount > 0 ? 'Close' : 'Cancel'}
          </button>
          <button
            onClick={handleImport}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={isLoading || !selectedFile}
          >
            {isLoading ? 'Importing...' : 'Import Tasks'}
          </button>
        </div>
      </div>
    </div>
  );
}
