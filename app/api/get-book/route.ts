import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'downloads', 'Claimed-Crowned-Consumed.pdf');
    const fileBuffer = fs.readFileSync(filePath);
    
    // Create headers to force download
    const headers = new Headers();
    headers.set('Content-Disposition', 'attachment; filename="Claimed-Crowned-Consumed.pdf"');
    headers.set('Content-Type', 'application/pdf');
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers
    });
  } catch (error) {
    console.error('Download error:', error);
    return new NextResponse('Error downloading file', { status: 500 });
  }
}