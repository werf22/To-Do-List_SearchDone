'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertTriangle, X, FileUp, FileCheck, Loader2 } from 'lucide-react';
import { importTasksFromCSV, parseCSV } from '@/lib/csvImport';
import Papa from 'papaparse';
import { TASK_FIELD_CONFIG } from '@/config/TASK_FIELD_CONFIG';

interface CsvImportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onImportComplete?: () => void;
}

function normalizeHeader(header: string) {
  // Lowercase, remove diacritics, replace spaces/underscores, remove non-alphanum
  return header
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[_\s]+/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function getDefaultMapping(csvHeaders: string[], dbFields: string[]) {
  // Try to auto-map CSV headers to DB fields
  const mapping: Record<string, string> = {};
  const normDbFields = dbFields.map(f => ({ orig: f, norm: normalizeHeader(f) }));
  csvHeaders.forEach(csvHeader => {
    const norm = normalizeHeader(csvHeader);
    const match = normDbFields.find(f => f.norm === norm);
    if (match) {
      mapping[match.orig] = csvHeader;
    }
  });
  return mapping;
}

export default function CsvImportModal({ open, onOpenChange, onImportComplete }: CsvImportModalProps) {
  // Stepper: 0 = upload, 1 = preview/map, 2 = result
  const [step, setStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [csvContent, setCsvContent] = useState<string>('');
  const [csvHeaders, setCsvHeaders] = useState<string[]>([]);
  const [csvRows, setCsvRows] = useState<any[]>([]);
  const [mapping, setMapping] = useState<Record<string, string>>({});
  const [isImporting, setIsImporting] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    parsedCount: number;
    errors: string[];
    warnings: string[];
  } | null>(null);
  const [csvParseError, setCsvParseError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dbFields = Object.keys(TASK_FIELD_CONFIG).filter(f => f !== 'task_id');

  // Handle file upload and parse CSV for preview
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
      setResult(null);
      setCsvParseError(null);
      const content = await file.text();
      setCsvContent(content);
      // Parse CSV for preview
      const parsed = Papa.parse(content, { header: true, skipEmptyLines: true });
      const headers = parsed.meta.fields || [];
      const rows = parsed.data.slice(0, 10);
      // Debug logs
      console.log('[CSV DEBUG] Headers:', headers);
      console.log('[CSV DEBUG] First 10 rows:', rows);
      // Check for valid headers
      if (!headers.length || headers.every(h => !h || h.trim() === '')) {
        setCsvHeaders([]);
        setCsvRows([]);
        setMapping({});
        setCsvParseError('CSV file is missing a valid header row. Please ensure the first row contains column names.');
        return;
      }
      setCsvHeaders(headers);
      setCsvRows(rows);
      // Auto-mapping
      const autoMap = getDefaultMapping(headers, dbFields);
      console.log('[CSV DEBUG] Auto-mapping:', autoMap);
      setMapping(autoMap);
      setStep(1);
    }
  };

  // Handle mapping change
  const handleMappingChange = (dbField: string, csvHeader: string) => {
    setMapping(prev => ({ ...prev, [dbField]: csvHeader }));
  };

  // Prepare data for import according to mapping
  const getMappedData = () => {
    // Re-parse full CSV for import
    const parsed = Papa.parse(csvContent, { header: true, skipEmptyLines: true });
    return parsed.data.map((row: any) => {
      const mapped: Record<string, any> = {};
      dbFields.forEach(dbField => {
        const csvHeader = mapping[dbField];
        if (csvHeader && row[csvHeader] !== undefined) {
          mapped[dbField] = row[csvHeader];
        }
      });
      return mapped;
    });
  };

  // Handle import
  const handleImport = async () => {
    setIsImporting(true);
    setResult(null);
    try {
      // Prepare mapped data as CSV string for backend import
      const mappedRows = getMappedData();
      // Convert mappedRows to CSV string for importTasksFromCSV (simulate user upload)
      const csv = Papa.unparse(mappedRows);
      const importResult = await importTasksFromCSV(csv);
      setResult({
        success: importResult.errors.length === 0,
        message: importResult.errors.length === 0
          ? `Successfully imported ${importResult.parsedTasks.length} tasks`
          : 'Import completed with errors',
        parsedCount: importResult.parsedTasks.length,
        errors: importResult.errors,
        warnings: importResult.warnings
      });
      setStep(2);
      if (importResult.errors.length === 0 && onImportComplete) {
        onImportComplete();
      }
    } catch (error) {
      setResult({
        success: false,
        message: 'Error importing CSV',
        parsedCount: 0,
        errors: [(error as Error).message],
        warnings: []
      });
      setStep(2);
    } finally {
      setIsImporting(false);
    }
  };

  const resetForm = () => {
    setFile(null);
    setResult(null);
    setCsvContent('');
    setCsvHeaders([]);
    setCsvRows([]);
    setMapping({});
    setStep(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const closeAndReset = () => {
    onOpenChange(false);
    setTimeout(resetForm, 300);
  };

  // --- Render ---
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Import Tasks from CSV</DialogTitle>
          <DialogDescription>
            Upload a CSV file, review preview, map fields, and import tasks into your AI To-Do list.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {step === 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="csv-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 border-gray-300 dark:border-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {file ? (
                      <>
                        <FileCheck className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                          <span className="font-semibold">{file.name}</span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {(file.size / 1024).toFixed(2)} KB
                        </p>
                      </>
                    ) : (
                      <>
                        <FileUp className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          CSV files only
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    id="csv-file"
                    ref={fileInputRef}
                    type="file"
                    accept=".csv"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {csvParseError && (
                <Alert variant="destructive">
                  <div className="flex items-start">
                    <AlertTriangle className="h-4 w-4 mr-2 mt-0.5" />
                    <div className="flex-1">
                      <AlertTitle>CSV Error</AlertTitle>
                      <AlertDescription>{csvParseError}</AlertDescription>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button variant="outline" onClick={resetForm} size="sm">Try Another File</Button>
                  </div>
                </Alert>
              )}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 items-center mb-2">
                {dbFields.map(dbField => (
                  <div key={dbField} className="flex flex-col">
                    <label className="text-xs font-medium mb-1">{dbField}</label>
                    <select
                      className="border rounded px-2 py-1 text-xs"
                      value={mapping[dbField] || ''}
                      onChange={e => handleMappingChange(dbField, e.target.value)}
                    >
                      <option value="">None</option>
                      {csvHeaders.map(header => (
                        <option key={header} value={header}>{header}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <div className="overflow-x-auto border rounded bg-gray-50 dark:bg-gray-800">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr>
                      {dbFields.map(dbField => (
                        <th key={dbField} className="p-2 border-b text-left bg-gray-100 dark:bg-gray-700">{dbField}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {csvRows.map((row, idx) => (
                      <tr key={idx} className="border-b">
                        {dbFields.map(dbField => (
                          <td key={dbField} className="p-2">
                            {mapping[dbField] && row[mapping[dbField]] !== undefined ? String(row[mapping[dbField]]) : ''}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex gap-2 mt-4">
                <Button onClick={resetForm} variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button onClick={handleImport} className="flex-1" disabled={isImporting}>
                  {isImporting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Importing...
                    </>
                  ) : (
                    'Import Tasks'
                  )}
                </Button>
              </div>
            </div>
          )}

          {step === 2 && result && (
            <div className="space-y-4">
              <Alert variant={result.success ? 'default' : 'destructive'}>
                <div className="flex items-start">
                  {result.success ? (
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 mr-2 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <AlertTitle>{result.success ? 'Success' : 'Import Issues'}</AlertTitle>
                    <AlertDescription>{result.message}</AlertDescription>
                  </div>
                </div>
              </Alert>
              {result.parsedCount > 0 && (
                <div className="text-sm">
                  <p>Successfully parsed {result.parsedCount} tasks</p>
                </div>
              )}
              {result.warnings.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Warnings ({result.warnings.length})</h4>
                  <div className="max-h-40 overflow-y-auto text-sm bg-amber-50 dark:bg-amber-950 p-3 rounded">
                    <ul className="list-disc pl-5 space-y-1">
                      {result.warnings.slice(0, 10).map((warning, i) => (
                        <li key={i} className="text-amber-700 dark:text-amber-400">{warning}</li>
                      ))}
                      {result.warnings.length > 10 && (
                        <li className="text-amber-700 dark:text-amber-400">
                          ...and {result.warnings.length - 10} more warnings
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
              {result.errors.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Errors ({result.errors.length})</h4>
                  <div className="max-h-40 overflow-y-auto text-sm bg-red-50 dark:bg-red-950 p-3 rounded">
                    <ul className="list-disc pl-5 space-y-1">
                      {result.errors.slice(0, 10).map((error, i) => (
                        <li key={i} className="text-red-700 dark:text-red-400">{error}</li>
                      ))}
                      {result.errors.length > 10 && (
                        <li className="text-red-700 dark:text-red-400">
                          ...and {result.errors.length - 10} more errors
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
              <div className="flex gap-2">
                <Button onClick={resetForm} variant="outline" className="flex-1">
                  Try Another File
                </Button>
                <Button onClick={closeAndReset} className="flex-1">
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
        <DialogFooter className="sm:justify-end">
          <Button variant="outline" onClick={closeAndReset} size="sm">
            <X className="h-4 w-4 mr-2" />
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
