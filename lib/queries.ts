import { recipes, families, glossaryTerms, learningPlanDays, checklists, cheatSheetItems, standardSpecs } from './data';

// Recipe queries - now using static data
export async function getAllRecipes() {
  return recipes.map(recipe => {
    const family = families.find(f => f.id === recipe.family_id);
    return {
      ...recipe,
      family_name: family?.name || 'Uncategorized',
      family_slug: family?.slug || '',
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export async function getRecipeBySlug(slug: string) {
  const recipe = recipes.find(r => r.slug === slug);
  if (!recipe) return null;
  
  const family = families.find(f => f.id === recipe.family_id);
  return {
    ...recipe,
    family_name: family?.name || 'Uncategorized',
    family_slug: family?.slug || '',
  };
}

export async function getRecipesByFamily(familyId: string) {
  return recipes
    .filter(r => r.family_id === familyId)
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Family queries - now using static data
export async function getAllFamilies() {
  return families.map(family => ({
    ...family,
    recipe_count: recipes.filter(r => r.family_id === family.id).length,
  })).sort((a, b) => a.name.localeCompare(b.name));
}

export async function getFamilyBySlug(slug: string) {
  return families.find(f => f.slug === slug) || null;
}

// Progress queries - now using localStorage (client-side only)
// These return static data or empty arrays since we're not using a database

export async function getStudyTodayRecipes() {
  // In a real app with localStorage, we'd check what's been practiced
  // For now, return a few recipes to study
  return recipes
    .filter(r => r.difficulty <= 2)
    .slice(0, 5)
    .map(recipe => {
      const family = families.find(f => f.id === recipe.family_id);
      return {
        ...recipe,
        family_name: family?.name || 'Uncategorized',
      };
    });
}

export async function getWeakFamilies() {
  // In a real app, we'd calculate from quiz scores in localStorage
  // For now, return empty array
  return [];
}

export async function getRecipesNotPracticed() {
  // In a real app, we'd check localStorage for recently practiced recipes
  // For now, return all recipes
  return recipes.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getStreakDays() {
  // In a real app, we'd calculate from localStorage progress events
  // For now, return 0
  return 0;
}

// Progress tracking - now uses localStorage (client-side only)
export async function recordProgressEvent(
  eventType: string,
  targetType: string,
  targetId: string,
  score?: number,
  data?: any
) {
  // This will be handled client-side via localStorage
  // For server-side, just return a mock success
  return { success: true, id: `event-${Date.now()}` };
}

// Learning plan queries - now using static data
export async function getAllLearningPlanDays() {
  return learningPlanDays.sort((a, b) => a.day_number - b.day_number);
}

export async function getLearningPlanDay(dayNumber: number) {
  return learningPlanDays.find(d => d.day_number === dayNumber) || null;
}

// Checklist queries - now using static data
export async function getAllChecklists() {
  return checklists.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getChecklistByType(type: string) {
  return checklists.find(c => c.type === type) || null;
}

// Cheat sheet queries - now using static data
export async function getAllCheatSheetItems() {
  return cheatSheetItems.sort((a, b) => a.order - b.order);
}

// Glossary queries - now using static data
export async function getAllGlossaryTerms() {
  return glossaryTerms.sort((a, b) => a.term.localeCompare(b.term));
}

export async function getGlossaryTerm(term: string) {
  return glossaryTerms.find(t => t.term.toLowerCase() === term.toLowerCase()) || null;
}

// Standard specs queries - now using static data
export async function getAllStandardSpecs() {
  return standardSpecs.sort((a, b) => a.name.localeCompare(b.name));
}

// Document queries - empty for now (optional feature)
export async function getAllDocuments() {
  return [];
}

export async function getDocumentById(id: string) {
  return null;
}
