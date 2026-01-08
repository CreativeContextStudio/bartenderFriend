'use client';

import { useState } from 'react';
import { getAllRecipes, getAllFamilies } from '@/lib/static-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RecipeCard } from '@/components/cards/recipe-card';
import { RecipeSlidePanel } from '@/components/panels/recipe-slide-panel';
import { Recipe as RecipeType } from '@/lib/static-data';
import Link from 'next/link';

export default function ExamplesPage() {
  const families = getAllFamilies();
  const recipes = getAllRecipes();

  const [selectedRecipe, setSelectedRecipe] = useState<RecipeType | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleRecipeClick = (recipe: RecipeType) => {
    setSelectedRecipe(recipe);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedRecipe(null), 300);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Examples</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Handful of examples per family. Click any card to see full recipe details.
        </p>
      </div>

      {families.length > 0 ? (
        <div className="space-y-8">
          {families.map((family) => {
            const familyRecipes = recipes.filter((r) => r.family === family.name);
            
            return (
              <div key={family.id} className="space-y-6">
                <div className="border-brutal-sm p-6 bg-muted/30">
                  <h2 className="text-4xl font-black mb-2">{family.name} Family</h2>
                  {family.description && (
                    <p className="text-lg font-medium text-muted-foreground leading-relaxed mb-2">{family.description}</p>
                  )}
                  <p className="text-base font-bold text-muted-foreground">
                    {familyRecipes.length} example{familyRecipes.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {familyRecipes.map((recipe) => (
                    <RecipeCard 
                      key={recipe.id} 
                      recipe={{ ...recipe, family_name: recipe.family }}
                      onClick={() => handleRecipeClick(recipe)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            No examples found.
          </CardContent>
        </Card>
      )}

      {selectedRecipe && (
        <RecipeSlidePanel 
          recipe={selectedRecipe} 
          open={isPanelOpen} 
          onOpenChange={handleClosePanel} 
        />
      )}
    </div>
  );
}
