import recipesData from '@/data/recipes.json';
import familiesData from '@/data/families.json';
import cheatSheetData from '@/data/cheat-sheet.json';

export interface Recipe {
  id: string;
  name: string;
  family: string;
  slug: string;
  description?: string;
  spec: Record<string, string>;
  method: string;
  glassware: string;
  garnish?: string;
  steps: string[];
  make_it_faster_tips?: string[];
  common_mistakes?: string[];
  difficulty: number;
  tags?: string[];
}

export interface Family {
  id: string;
  name: string;
  slug: string;
  description?: string;
  template_pattern: Record<string, string>;
}

export interface CheatSheetItem {
  name: string;
  spec_short: string;
  glass: string;
  garnish: string;
  order: number;
}

// Recipe functions
export function getAllRecipes(): Recipe[] {
  return recipesData as Recipe[];
}

export function getRecipeBySlug(slug: string): Recipe | null {
  return recipesData.find((r: Recipe) => r.slug === slug) || null;
}

export function getRecipesByFamily(familyName: string): Recipe[] {
  return recipesData.filter((r: Recipe) => r.family === familyName);
}

// Family functions
export function getAllFamilies(): Family[] {
  return familiesData as Family[];
}

export function getFamilyBySlug(slug: string): Family | null {
  return familiesData.find((f: Family) => f.slug === slug) || null;
}

// Cheat sheet functions
export function getAllCheatSheetItems(): CheatSheetItem[] {
  return cheatSheetData.sort((a, b) => a.order - b.order);
}
