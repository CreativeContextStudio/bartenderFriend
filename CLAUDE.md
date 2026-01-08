# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

bartenderFriend is a learning mini-guide/app for new and returning bartenders. Built with Next.js 14 (App Router), shadcn/ui, and TypeScript. The app uses **static JSON data** (no live database required for Phase 1) with localStorage for progress tracking.

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev                    # Start dev server at http://localhost:3000

# Build & Production
npm run build                  # Build for production
npm start                      # Start production server

# Code Quality
npm run lint                   # Run ESLint

# Database (Optional - Phase 2)
npm run db:migrate             # Run Neon database migrations
npm run db:seed                # Seed database (same as migrate for now)
```

## Architecture & Data Flow

### Data Strategy (Phase 1)

The app operates in **two modes** based on environment setup:

**1. Static Data Mode (Default - No Database Required)**
- Uses JSON files in `/data/` directory:
  - `recipes.json` - 17+ cocktail recipes
  - `families.json` - Drink family templates
  - `cheat-sheet.json` - Memorization reference
- Hardcoded data in `/lib/data/` modules:
  - `checklists.ts`, `glossary.ts`, `learning-plan.ts`, `standard-specs.ts`
- Progress tracking via localStorage (`/lib/progress.ts`)
- **No database connection needed** - app works out of the box

**2. Database Mode (Optional - Phase 2)**
- Neon Postgres via `@neondatabase/serverless`
- Requires `DATABASE_URL` in `.env.local`
- Migrations in `supabase/migrations/`:
  - `001_initial_schema.sql` - Tables and indexes
  - `002_seed_data.sql` - Initial data
- Run `npm run db:migrate` to set up

### Database Resilience Pattern

`/lib/db.ts` implements graceful degradation:
- If `DATABASE_URL` is set: full database queries
- If not set: returns mock empty results, logs helpful warning
- App continues to work with static data even without DB connection

### Data Layer Organization

```
/lib/
  db.ts              # Database client (with fallback)
  queries.ts         # Query functions (wraps static data)
  progress.ts        # Client-side localStorage progress tracking
  static-data.ts     # JSON data loaders (recipes, families, cheat-sheet)
  data/              # Hardcoded data modules
    recipes.ts       # Extended recipe data
    families.ts      # Family definitions
    checklists.ts    # Checklist definitions
    glossary.ts      # Bar terminology
    learning-plan.ts # 10-day learning plan
    standard-specs.ts # Canonical builds
/data/               # JSON files (imported by static-data.ts)
  recipes.json
  families.json
  cheat-sheet.json
```

**Important**: `queries.ts` serves static data but maintains the same API as database queries for future migration.

### Progress Tracking

Client-side via localStorage (`/lib/progress.ts`):
- `saveProgressEvent()` - Record quiz attempts, recipe completions, checklist completions
- `getProgressEvents()` - Retrieve all events
- `getStreakDays()` - Calculate practice streak
- `getQuizScores()` - Get quiz performance history

Data persists in browser only (no server sync in Phase 1).

## UI Architecture

### Layout Structure

```
app/
  layout.tsx                    # Root layout
  (dashboard)/
    layout.tsx                  # Wraps MainLayout component
    page.tsx                    # Dashboard home
    guide/                      # Guide pages
    recipes/                    # Recipe browser & detail pages
    training/                   # Quizzes and checklists
    progress/                   # Progress dashboard
    cheat-sheet/                # Printable reference
    standards/                  # Canonical builds
    documents/                  # Document library (Phase 2)
```

### Component Organization

```
components/
  layout/
    main-layout.tsx             # Sidebar + Topbar wrapper
    sidebar.tsx                 # Navigation sidebar
    topbar.tsx                  # Top navigation bar
  cards/
    recipe-card.tsx             # Recipe display card
  panels/
    recipe-side-panel.tsx       # Recipe detail side drawer (unused)
    recipe-slide-panel.tsx      # Recipe detail slide panel (active)
  forms/
    quiz-form.tsx               # Interactive quiz component
    checklist-form.tsx          # Checklist tracker
    document-upload.tsx         # Document upload (Phase 2)
  ui/                           # shadcn/ui components
    placeholders/
      drink-placeholder.tsx     # CSS-only drink image placeholders
```

**Key Pattern**: All dashboard pages use `(dashboard)` route group → automatically wrapped by `MainLayout` component (sidebar + topbar).

### Styling Conventions

- **Tailwind CSS** for all styling
- **shadcn/ui** for component primitives (buttons, cards, dialogs, etc.)
- **CSS Placeholders**: `/components/ui/placeholders/drink-placeholder.tsx` generates cocktail glass illustrations with CSS gradients (Phase 1 - will be replaced with AI photos in Phase 2)
- **Theme**: Uses Tailwind's default theme with custom config in `tailwind.config.ts`

## Key Implementation Details

### Recipe Data Structure

Recipes include:
- `spec` - Ingredient measurements (object with ingredient keys)
- `steps` - Ordered preparation steps
- `method` - Build/Shake/Blend/Stir
- `glassware` - Glass type
- `make_it_faster_tips` - Speed optimization tips
- `common_mistakes` - What to avoid
- `difficulty` - 1-3 rating
- `family_id` - Links to drink family template

### Family Pattern System

Each family (e.g., "Sour", "Highball") defines:
- `template_pattern` - What stays constant across family members
- Base specs and method that all drinks share
- Used to teach pattern recognition

### Quiz System

Quizzes (`/app/(dashboard)/training/quizzes/page.tsx`):
- Generate randomized questions from recipe/family data
- Support multiple choice, spec recall, family identification
- Save results to localStorage via `saveProgressEvent()`
- Track weak areas for spaced repetition

## Important Notes for Development

1. **No Database Required**: App works fully with static JSON + localStorage. Don't assume DB connection exists.

2. **Data Updates**: To add/modify recipes or families:
   - Edit JSON files in `/data/`
   - Or edit TypeScript modules in `/lib/data/`
   - No migration needed for Phase 1

3. **Progress Tracking**: All progress is localStorage only. Clearing browser data = lost progress.

4. **Image Strategy**: CSS placeholder animations only (Phase 1). Do not implement image uploads or AI photo generation yet.

5. **Document Library**: Feature exists in UI but non-functional without blob storage. Skip unless specifically requested.

6. **Migration Scripts**: `scripts/migrate.js` and `scripts/seed.js` are for Phase 2 database setup only. Not needed for local development.

7. **Environment Variables**: Only `DATABASE_URL` and `LOCAL_USER_ID` are used. Both optional for Phase 1.

## Testing & Building

- **Type Checking**: Run `npm run build` to check for TypeScript errors
- **Linting**: Run `npm run lint` before commits
- **Local Testing**: `npm run dev` and test in browser
- **No Test Suite**: No automated tests currently implemented

## Phase Boundaries

**Phase 1 (Current)**:
- Static JSON data
- localStorage progress
- CSS drink placeholders
- Fully functional without database

**Phase 2 (Future - Not Implemented)**:
- Neon Postgres integration
- Blob storage for documents
- AI-generated drink photography
- Server-side progress tracking
