import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  // Get the format from the URL query parameters
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') || 'pdf';
  
  try {
    // Define file paths for both formats
    const filePathMap: Record<string, string> = {
      'pdf': path.join(process.cwd(), 'public', 'downloads', 'Claimed-Crowned-Consumed.pdf'),
      'epub': path.join(process.cwd(), 'public', 'downloads', 'Claimed-Crowned-Consumed.epub')
    };
    
    // Get the correct file path
    const filePath = filePathMap[format.toLowerCase()];
    
    if (!filePath || !fs.existsSync(filePath)) {
      return new NextResponse('File not found', { status: 404 });
    }
    
    const fileBuffer = fs.readFileSync(filePath);
    
    // Set mime types based on format
    const mimeTypeMap: Record<string, string> = {
      'pdf': 'application/pdf',
      'epub': 'application/epub+zip'
    };
    
    // Create headers to force download
    const headers = new Headers();
    headers.set('Content-Disposition', `attachment; filename="Claimed-Crowned-Consumed.${format}"`);
    headers.set('Content-Type', mimeTypeMap[format.toLowerCase()]);
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers
    });
  } catch (error) {
    console.error('Download error:', error);
    return new NextResponse('Error downloading file', { status: 500 });
  }
}