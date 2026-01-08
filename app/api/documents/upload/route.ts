import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { uploadBlob } from '@/lib/blob';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const tags = (formData.get('tags') as string)?.split(',').map(t => t.trim()) || [];

    if (!file || !title) {
      return NextResponse.json(
        { error: 'Missing required fields: file and title' },
        { status: 400 }
      );
    }

    // Determine file type
    const fileType = file.name.split('.').pop()?.toLowerCase() || 'unknown';
    
    // Upload to blob storage
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const blobKey = `documents/${Date.now()}-${file.name}`;
    
    const { url, key } = await uploadBlob(
      blobKey,
      buffer,
      file.type
    );

    // Save document metadata to database
    const result = await sql`
      INSERT INTO documents (title, description, blob_url, blob_key, file_type, tags)
      VALUES (${title}, ${description || null}, ${url}, ${key}, ${fileType}, ${tags.length > 0 ? JSON.stringify(tags) : null})
      RETURNING *
    `;

    return NextResponse.json({ success: true, data: result[0] });
  } catch (error) {
    console.error('Error uploading document:', error);
    return NextResponse.json(
      { error: 'Failed to upload document' },
      { status: 500 }
    );
  }
}
