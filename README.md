# bartenderFriend

A learning mini-guide/app to help new and returning bartenders ramp fast with basic recipe knowledge, bar language + workflow refreshers, and behind-the-bar fundamentals.

## Features

- **Guide Pages**: Comprehensive guides on basic recipe knowledge, behind-the-bar fundamentals, bar language, and workflow
- **Recipe Cards**: Browse and learn from 17+ core cocktail recipes with detailed specs, steps, and tips
- **Family Explorer**: Understand drink families and patterns—what changes vs stays constant
- **Training Mode**: Interactive daily tasks, quizzes, and practical checklists
- **Progress Tracking**: Track your learning progress, identify weak areas, and see what to study next
- **Cheat Sheet**: Printable memorization list of core drinks
- **Standards**: Canonical builds and template patterns
- **Documents Library**: Upload and manage reference documents

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: shadcn/ui components with Tailwind CSS
- **Database**: Neon Postgres (PostgreSQL)
- **Storage**: Blob storage (S3-compatible: R2/Vercel Blob/Neon Storage)
- **Language**: TypeScript

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.local.example` to `.env.local` and fill in:
   - `DATABASE_URL`: Your Neon Postgres connection string
   - `BLOB_ENDPOINT`, `BLOB_ACCESS_KEY_ID`, `BLOB_SECRET_ACCESS_KEY`, `BLOB_BUCKET_NAME`: Blob storage credentials
   - `LOCAL_USER_ID`: Local user ID for progress tracking (e.g., `local-user-1`)

3. **Run database migrations**:
   ```bash
   npm run db:migrate
   ```

4. **Seed the database**:
   ```bash
   npm run db:seed
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Database Migrations

Migrations are located in `supabase/migrations/`:
- `001_initial_schema.sql`: Creates all tables and indexes
- `002_seed_data.sql`: Seeds initial data (families, recipes, glossary terms, learning plan, checklists, etc.)

## Project Structure

```
bartenderFriend/
├── app/
│   ├── (dashboard)/          # Dashboard layout pages
│   │   ├── page.tsx          # Dashboard home
│   │   ├── guide/            # Guide pages
│   │   ├── recipes/          # Recipe pages
│   │   ├── standards/        # Standards pages
│   │   ├── documents/        # Documents pages
│   │   ├── training/         # Training pages
│   │   ├── progress/         # Progress dashboard
│   │   └── cheat-sheet/      # Cheat sheet
│   ├── components/           # React components
│   │   ├── layout/           # Layout components
│   │   ├── cards/            # Card components
│   │   ├── panels/           # Side panels
│   │   ├── forms/            # Form components
│   │   └── ui/               # shadcn/ui components
│   └── lib/                  # Utilities
│       ├── db.ts             # Database client
│       ├── blob.ts           # Blob storage client
│       └── queries.ts        # SQL queries
├── supabase/
│   └── migrations/           # Database migrations
└── docs/                     # Documentation files
```

## Phase 1 vs Phase 2

**Phase 1 (Current)**:
- CSS placeholder animations for drink images
- Local-only user tracking
- Full guide content and recipe database

**Phase 2 (Future)**:
- AI-generated 1960s realistic drink photography
- Replace CSS placeholders with actual photos
- See plan document for full Phase 2 spec

## Development

- Run linting: `npm run lint`
- Build for production: `npm run build`
- Start production server: `npm start`

## License

MIT
