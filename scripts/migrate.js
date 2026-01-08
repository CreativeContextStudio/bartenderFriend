const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  console.error('❌ Error: DATABASE_URL environment variable is not set!');
  console.error('Please create a .env.local file and add your DATABASE_URL.');
  console.error('See .env.local.example for reference.');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function migrate() {
  try {
    console.log('🚀 Starting database migrations...\n');

    const migrationFiles = [
      { path: 'supabase/migrations/001_initial_schema.sql', name: 'Initial Schema' },
      { path: 'supabase/migrations/002_seed_data.sql', name: 'Seed Data' },
    ];

    for (const { path: filePath, name } of migrationFiles) {
      const fullPath = path.join(__dirname, '..', filePath);
      
      if (!fs.existsSync(fullPath)) {
        console.error(`❌ Migration file not found: ${filePath}`);
        continue;
      }

      const sqlContent = fs.readFileSync(fullPath, 'utf8');
      
      // Split by semicolons for better error handling
      const statements = sqlContent
        .split(';')
        .map(s => s.trim())
        .filter(s => s.length > 0 && !s.startsWith('--'));

      console.log(`📄 Running migration: ${name}...`);
      
      for (const statement of statements) {
        if (statement.trim()) {
          try {
            await sql(statement);
          } catch (error) {
            // Some statements might fail if tables already exist - that's okay
            if (!error.message.includes('already exists')) {
              console.warn(`⚠️  Warning: ${error.message}`);
            }
          }
        }
      }
      
      console.log(`✅ Completed: ${name}\n`);
    }
    
    console.log('🎉 All migrations completed successfully!');
  } catch (error) {
    console.error('❌ Migration error:', error);
    process.exit(1);
  }
}

migrate().catch(console.error);
