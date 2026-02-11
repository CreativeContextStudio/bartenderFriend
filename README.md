# bartenderFriend

Hey, welcome behind the bar! Whether you're brand new or shaking off some rust after time away, this app is like having a buddy on the other side of the counter walking you through the basics — recipes, workflow, lingo, all of it. Think of it as your pocket mentor for getting up to speed fast.

## What's Inside

- **Guide Pages** — Real talk on recipe knowledge, behind-the-bar fundamentals, bar language, and how to move with purpose during a rush
- **Recipe Cards** — 17+ core cocktails broken down with full specs, step-by-step builds, and the kind of tips you'd normally only get from a patient barback
- **Family Explorer** — Learn to see the *patterns* in drinks — what stays the same, what changes — so you stop memorizing and start understanding
- **Training Mode** — Daily tasks, quizzes, and practical checklists to drill it in. Repetition is your friend here
- **Progress Tracking** — See where you're solid and where you need more reps. No judgment, just data
- **Cheat Sheet** — A printable one-pager of core drinks for your back pocket (or taped inside a speed rail, we won't tell)
- **Standards** — Canonical builds and template patterns, because consistency is what separates good bartenders from great ones
- **Documents Library** — Upload and stash your own reference docs

## Tech Stack

Under the hood, this thing is built with:

- **Next.js 14** (App Router) — the framework
- **shadcn/ui + Tailwind CSS** — clean UI without the fuss
- **Neon Postgres** — database (optional for now, see phases below)
- **TypeScript** — keeping things typed and honest

## Getting Started

Getting set up is quick — no database required to start learning.

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables** (optional for Phase 1):
   Copy `.env.local.example` to `.env.local` and fill in:
   - `DATABASE_URL`: Your Neon Postgres connection string
   - `BLOB_ENDPOINT`, `BLOB_ACCESS_KEY_ID`, `BLOB_SECRET_ACCESS_KEY`, `BLOB_BUCKET_NAME`: Blob storage credentials
   - `LOCAL_USER_ID`: Local user ID for progress tracking (e.g., `local-user-1`)

   > No `.env.local`? No problem. The app runs fully on static data and localStorage out of the box.

3. **Run database migrations** (only if using a database):
   ```bash
   npm run db:migrate
   ```

4. **Seed the database** (only if using a database):
   ```bash
   npm run db:seed
   ```

5. **Fire it up**:
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** and start learning.

## Database Migrations

If you're going the database route, migrations live in `supabase/migrations/`:
- `001_initial_schema.sql` — Creates all tables and indexes
- `002_seed_data.sql` — Seeds the initial data (families, recipes, glossary terms, learning plan, checklists, the works)

## Project Structure

Here's how the bar is laid out:

```
bartenderFriend/
├── app/
│   ├── (dashboard)/          # Where all the action happens
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

**Phase 1 (Current)** — You're here. Everything works:
- CSS placeholder animations stand in for drink images
- Progress tracked locally in your browser
- Full guide content, recipe database, and training tools ready to go

**Phase 2 (Down the road)**:
- AI-generated 1960s-style realistic drink photography
- CSS placeholders get swapped for actual photos
- See the plan doc for the full Phase 2 spec

## Development

```bash
npm run lint          # Check your work
npm run build         # Build for production
npm start             # Run the production server
```

## License

MIT — do what you want with it. Just make good drinks.
