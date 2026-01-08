'use client';

import { useState } from 'react';
import { getAllFamilies, getAllRecipes } from '@/lib/static-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RecipeCard } from '@/components/cards/recipe-card';
import { RecipeSlidePanel } from '@/components/panels/recipe-slide-panel';
import { Recipe as RecipeType } from '@/lib/static-data';
import { ArrowRight } from 'lucide-react';

export default function FamiliesPage() {
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
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Core Families of Drinks</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Learn the patterns. What changes vs stays constant in each family.
        </p>
      </div>

      {families.length > 0 ? (
        <div className="space-y-8">
          {families.map((family) => {
            const familyRecipes = recipes.filter((r) => r.family === family.name);
            const templatePattern = family.template_pattern;

            return (
              <Card key={family.id} className="border-brutal">
                <CardHeader className="border-b-4 border-brutal">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-3xl font-black mb-2">{family.name}</CardTitle>
                      {family.description && (
                        <CardDescription className="text-lg font-medium">
                          {family.description}
                        </CardDescription>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-base px-4 py-2 font-bold border-brutal-sm">
                      {familyRecipes.length} recipe{familyRecipes.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {templatePattern && (
                    <div className="border-brutal-sm p-6 bg-muted/30">
                      <h4 className="text-xl font-black mb-4">Template Pattern</h4>
                      <div className="grid md:grid-cols-2 gap-4 font-mono">
                        {Object.entries(templatePattern).map(([key, value]: [string, any]) => (
                          <div key={key} className="flex justify-between items-center border-brutal-sm p-3 bg-background">
                            <span className="text-base font-bold capitalize text-muted-foreground">{key.replace('_', ' ')}:</span>
                            <span className="text-lg font-black">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xl font-black mb-4">What Changes vs Stays Constant</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-brutal-sm p-4 bg-primary/10">
                        <div className="text-base font-black mb-3">What Stays Constant:</div>
                        <ul className="text-base font-medium text-muted-foreground space-y-2 list-disc list-inside leading-relaxed">
                          <li>Base template structure</li>
                          <li>Method ({family.template_pattern?.method || 'varies'})</li>
                          <li>Ratio of ingredients</li>
                        </ul>
                      </div>
                      <div className="border-brutal-sm p-4 bg-secondary/20">
                        <div className="text-base font-black mb-3">What Changes:</div>
                        <ul className="text-base font-medium text-muted-foreground space-y-2 list-disc list-inside leading-relaxed">
                          <li>Base spirit (tequila, rum, bourbon, etc.)</li>
                          <li>Citrus type (lime vs lemon)</li>
                          <li>Sweetener (simple, agave, triple sec, etc.)</li>
                          <li>Glassware and garnish</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {familyRecipes.length > 0 && (
                    <div>
                      <h4 className="text-xl font-black mb-4">Example Recipes</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {familyRecipes.slice(0, 6).map((recipe) => (
                          <RecipeCard 
                            key={recipe.id} 
                            recipe={{ ...recipe, family_name: recipe.family }}
                            onClick={() => handleRecipeClick(recipe)}
                          />
                        ))}
                      </div>
                      {familyRecipes.length > 6 && (
                        <div className="mt-6 text-center">
                          <Link href={`/recipes?family=${family.slug}`}>
                            <Button variant="outline" size="lg" className="border-brutal-sm font-bold">
                              View All {familyRecipes.length} Recipes
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            No families found. Check your database connection.
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
