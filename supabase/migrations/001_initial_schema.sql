-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  email TEXT UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
  last_active TIMESTAMP DEFAULT NOW()
);

-- Families table
CREATE TABLE families (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  template_pattern JSONB,
  icon TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Recipes table
CREATE TABLE recipes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  family_id UUID REFERENCES families(id),
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  spec JSONB NOT NULL,
  method TEXT NOT NULL, -- 'shake' | 'stir' | 'build'
  glassware TEXT NOT NULL,
  garnish TEXT,
  steps TEXT[] NOT NULL,
  make_it_faster_tips TEXT[],
  common_mistakes TEXT[],
  difficulty INTEGER DEFAULT 3,
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- Standard specs table
CREATE TABLE standard_specs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  spec JSONB NOT NULL,
  method TEXT NOT NULL,
  variations JSONB[],
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Glossary terms
CREATE TABLE glossary_terms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  term TEXT UNIQUE NOT NULL,
  definition TEXT NOT NULL,
  category TEXT, -- 'glassware' | 'method' | 'modifier'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Learning plan days
CREATE TABLE learning_plan_days (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  day_number INTEGER UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  tasks JSONB[] NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Checklists
CREATE TABLE checklists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'day-one' | 'opening' | 'closing' | 'station'
  items JSONB[] NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Cheat sheet items
CREATE TABLE cheat_sheet_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  spec_short TEXT NOT NULL,
  glass TEXT,
  garnish TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Documents
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  blob_url TEXT,
  blob_key TEXT,
  file_type TEXT, -- 'pdf' | 'md' | 'txt'
  tags TEXT[],
  uploaded_at TIMESTAMP DEFAULT NOW()
);

-- Assets (drink images)
CREATE TABLE assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recipe_id UUID REFERENCES recipes(id),
  type TEXT NOT NULL, -- 'placeholder' | 'photo'
  blob_url TEXT,
  blob_key TEXT,
  css_animation TEXT, -- 'shimmer' | 'gradient' | 'pulse'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Progress events
CREATE TABLE progress_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT, -- Using TEXT for local mode compatibility
  event_type TEXT NOT NULL, -- 'quiz_attempt' | 'recipe_completed' | 'checklist_completed' | 'study_session'
  target_id TEXT, -- Using TEXT for UUID strings
  target_type TEXT, -- 'recipe' | 'quiz' | 'checklist' | 'day'
  score FLOAT,
  data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quiz attempts
CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT, -- Using TEXT for local mode compatibility
  quiz_type TEXT NOT NULL, -- 'recipe' | 'family' | 'glossary' | 'mixed'
  questions JSONB[] NOT NULL,
  score FLOAT NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_recipes_family_id ON recipes(family_id);
CREATE INDEX idx_recipes_slug ON recipes(slug);
CREATE INDEX idx_progress_events_user_created ON progress_events(user_id, created_at DESC);
CREATE INDEX idx_progress_events_target ON progress_events(target_id, target_type);
CREATE INDEX idx_quiz_attempts_user_completed ON quiz_attempts(user_id, completed_at DESC);
CREATE INDEX idx_assets_recipe_id ON assets(recipe_id);
