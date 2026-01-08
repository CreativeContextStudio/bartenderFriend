# Setup Instructions

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Neon Database

1. **Create a Neon account** (if you don't have one):
   - Go to https://neon.tech
   - Sign up for a free account (free tier available)

2. **Create a new project**:
   - Click "Create Project"
   - Choose a project name (e.g., "bartender-friend")
   - Select a region close to you

3. **Get your connection string**:
   - Once the project is created, go to the dashboard
   - Look for the "Connection string" section
   - Copy the connection string (it looks like: `postgresql://username:password@ep-xxx-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require`)
   - This is your `DATABASE_URL`

4. **Create `.env.local` file**:
   
   Create a new file called `.env.local` in the project root:
   
   ```bash
   touch .env.local
   ```
   
   Or manually create the file in your editor.

5. **Add your DATABASE_URL to `.env.local`**:
   
   Open `.env.local` and add:
   ```env
   DATABASE_URL=postgresql://username:password@ep-xxx-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require
   LOCAL_USER_ID=local-user-1
   ```
   
   Replace the connection string with your actual Neon connection string.

### 3. Run Database Migrations

```bash
# First, create the migration scripts directory if needed
mkdir -p scripts

# Then run migrations (you'll need to create these scripts - see below)
```

**Note**: The migration scripts referenced in `package.json` need to be created. For now, you can run migrations manually:

1. Go to your Neon dashboard
2. Open the SQL Editor
3. Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
4. Run it
5. Then copy and paste `supabase/migrations/002_seed_data.sql` and run it

Or, use a database client like DBeaver, pgAdmin, or the Neon console's SQL editor.

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Alternative: Quick Database Setup Scripts

Create these files to automate migrations:

**`scripts/migrate.js`**:
```javascript
const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');

const sql = neon(process.env.DATABASE_URL);

async function migrate() {
  const migrationFiles = [
    'supabase/migrations/001_initial_schema.sql',
    'supabase/migrations/002_seed_data.sql',
  ];

  for (const file of migrationFiles) {
    const sqlContent = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
    console.log(`Running migration: ${file}`);
    await sql(sqlContent);
    console.log(`✓ Completed: ${file}`);
  }
  
  console.log('All migrations completed!');
}

migrate().catch(console.error);
```

**`scripts/seed.js`**:
```javascript
// Same as migrate.js for now since seed data is in migrations
const migrate = require('./migrate');
migrate();
```

## Troubleshooting

### "No database connection string was provided"

- Make sure you created `.env.local` (not `.env.local.example`)
- Make sure `DATABASE_URL` is set in `.env.local`
- Restart your dev server after creating `.env.local`

### Database connection errors

- Check that your Neon project is active
- Verify the connection string is correct
- Make sure you've allowed connections from your IP (if required)

### Migrations not running

- You can run migrations manually through the Neon SQL Editor
- Copy/paste each migration file's contents into the SQL editor and run them

## Blob Storage (Optional for Phase 1)

Blob storage is only needed for document uploads. You can skip this for now if you're just testing the app.

If you want to enable document uploads:

1. Set up an S3-compatible service (AWS S3, Cloudflare R2, or Vercel Blob)
2. Get your credentials
3. Add them to `.env.local`:
   ```env
   BLOB_ENDPOINT=https://your-endpoint.com
   BLOB_ACCESS_KEY_ID=your-key
   BLOB_SECRET_ACCESS_KEY=your-secret
   BLOB_BUCKET_NAME=your-bucket
   ```

## Next Steps

Once the database is connected and migrations are run:

1. Visit http://localhost:3000
2. You should see the dashboard with seeded data (recipes, families, etc.)
3. Explore the guides, recipes, and training sections
4. Try the quizzes and checklists
