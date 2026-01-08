import fs from 'fs';
import path from 'path';

// Server-side only function to read markdown files
export function readMarkdownFile(filename: string): string {
  const filePath = path.join(process.cwd(), 'docs', filename);
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`Error reading markdown file ${filename}:`, error);
    return '';
  }
}
