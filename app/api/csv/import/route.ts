import { NextRequest, NextResponse } from 'next/server';
import { importTasksFromCSV } from '@/lib/csvImport';

/**
 * API Route: POST /api/csv/import
 * 
 * Handles CSV file uploads for task import.
 * Expects the raw CSV content in the request body.
 */
export async function POST(request: NextRequest) {
  console.log('POST /api/csv/import called');

  try {
    // Get the raw CSV content from the request body
    const csvContent = await request.text();

    if (!csvContent || csvContent.trim() === '') {
      console.error('API Error: Empty CSV content received');
      return NextResponse.json({ error: 'CSV content is empty' }, { status: 400 });
    }

    console.log('Received CSV content length:', csvContent.length);
    
    // Call the import function from lib
    const result = await importTasksFromCSV(csvContent);

    console.log('Import result:', result);

    // Determine appropriate status code based on results
    const status = result.errors.length > 0 ? (result.parsedTasks.length === 0 ? 400 : 207) : 200;

    return NextResponse.json(
      {
        success: result.errors.length === 0,
        message: status === 200 ? 'CSV imported successfully.' : 'CSV imported with errors/warnings.',
        data: {
          parsedCount: result.parsedTasks.length,
          importedCount: result.parsedTasks.length - result.errors.length, // Assuming 1 error per failed task
          errors: result.errors,
          warnings: result.warnings,
        },
      },
      { status }
    );
  } catch (error: any) {
    console.error('API Error: Failed to process CSV import:', error);
    return NextResponse.json(
      { error: 'Internal Server Error: Could not process CSV import.', details: error.message },
      { status: 500 }
    );
  }
}
