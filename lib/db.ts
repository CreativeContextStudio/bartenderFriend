import { neon } from '@neondatabase/serverless';

// Only initialize if DATABASE_URL is available
// This allows the app to work partially during development
let sql: any = null;

if (process.env.DATABASE_URL) {
  sql = neon(process.env.DATABASE_URL);
} else {
  // Create a mock sql function that returns empty results
  // This allows pages to render without crashing
  sql = async (strings: TemplateStringsArray, ...values: any[]) => {
    if (typeof window !== 'undefined') {
      console.warn('DATABASE_URL not set. Database queries will return empty results.');
    }
    return [];
  };
  
  // Log helpful message on server side
  if (typeof window === 'undefined') {
    console.warn('\n⚠️  Warning: DATABASE_URL environment variable is not set!\n');
    console.warn('To fix this:');
    console.warn('  1. Create a .env.local file in the project root');
    console.warn('  2. Add: DATABASE_URL=postgresql://user:password@host/database?sslmode=require');
    console.warn('  3. Get your connection string from https://console.neon.tech\n');
    console.warn('The app will work but will show empty data until the database is connected.\n');
  }
}

export { sql };

// Helper function to get a local user ID for local-only mode
export function getLocalUserId(): string {
  return process.env.LOCAL_USER_ID || 'local-user-1';
}
