'use client';

import { useState } from 'react';
import { getAllRecipes, getAllFamilies, type Recipe } from '@/lib/static-data';
import { RecipeCard } from '@/components/cards/recipe-card';
import { RecipeSlidePanel } from '@/components/panels/recipe-slide-panel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DrinkPlaceholder } from '@/components/ui/placeholders/drink-placeholder';
import { cn } from '@/lib/utils';

export default function RecipesPage() {
  const recipes = getAllRecipes();
  const families = getAllFamilies();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    // Small delay before clearing recipe to allow exit animation
    setTimeout(() => setSelectedRecipe(null), 300);
  };

  // Family color mapping matching cheat sheet
  const getFamilyColors = (family?: string): { bg: string; text: string; border: string } => {
    if (!family) return { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border' };

    const familyLower = family.toLowerCase();

    if (familyLower === 'sour') {
      return { bg: 'bg-[#70e000]', text: 'text-black', border: 'border-[#70e000]' };
    }

    if (familyLower === 'spirit forward' || familyLower === 'spirit-forward' || familyLower === 'stirred') {
      return { bg: 'bg-[#ff006e]', text: 'text-white', border: 'border-[#ff006e]' };
    }

    if (familyLower === 'highball') {
      return { bg: 'bg-[#ffd60a]', text: 'text-black', border: 'border-[#ffd60a]' };
    }

    if (familyLower.includes('collins') || familyLower.includes('fizz')) {
      return { bg: 'bg-[#3a86ff]', text: 'text-white', border: 'border-[#3a86ff]' };
    }

    return { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border' };
  };

  return (
    <>
      <div className="space-y-12 pb-16">
        <div className="space-y-4 max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-foreground">Recipe Cards</h1>
          <p className="font-sans text-xl md:text-2xl font-bold text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
            Browse all cocktail recipes. <br />
            Click any card to see full details.
          </p>
        </div>

        <Tabs defaultValue="grid" className="w-full space-y-8">
          <TabsList className="grid w-full grid-cols-3 h-auto p-2 bg-muted border-2 border-border gap-2">
            <TabsTrigger value="grid" className="text-lg font-black data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-2 data-[state=active]:border-border h-12">Grid View</TabsTrigger>
            <TabsTrigger value="list" className="text-lg font-black data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-2 data-[state=active]:border-border h-12">List View</TabsTrigger>
            <TabsTrigger value="family" className="text-lg font-black data-[state=active]:bg-done data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-border h-12">By Family</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.length > 0 ? (
                recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={{ ...recipe, family_name: recipe.family }}
                    onClick={() => handleRecipeClick(recipe)}
                  />
                ))
              ) : (
                <p className="text-muted-foreground col-span-full text-center py-8 text-lg font-medium">
                  No recipes found.
                </p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            <div className="space-y-4">
              {recipes.length > 0 ? (
                recipes.map((recipe) => {
                  const colors = getFamilyColors(recipe.family);
                  return (
                    <div
                      key={recipe.id}
                      className={cn(
                        "flex items-center gap-6 neo-card bg-card p-6 border-l-4",
                        colors.border,
                        "cursor-pointer transition-all duration-200",
                        "hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg"
                      )}
                      onClick={() => handleRecipeClick(recipe)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleRecipeClick(recipe);
                        }
                      }}
                      aria-label={`View ${recipe.name} recipe`}
                    >
                      <div className="w-32 h-32 shrink-0 border-2 border-border overflow-hidden bg-muted/30">
                        <DrinkPlaceholder
                          glassType={recipe.glassware.toLowerCase().includes('coupe') ? 'coupe' : 'rocks'}
                          animation="shimmer"
                          className="h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-black font-display uppercase tracking-tight text-foreground">{recipe.name}</h3>
                          {recipe.family && (
                            <Badge className={cn("neo-badge text-sm px-3 py-1.5 font-bold", colors.bg, colors.text)}>
                              {recipe.family}
                            </Badge>
                          )}
                        </div>
                        {recipe.description && (
                          <p className="text-base font-medium text-muted-foreground line-clamp-2 leading-relaxed mb-3">
                            {recipe.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-sm px-3 py-1.5 font-bold border-2 border-border">
                            {recipe.method}
                          </Badge>
                          <Badge variant="outline" className="text-sm px-3 py-1.5 font-bold border-2 border-border">
                            {recipe.glassware}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="lg"
                        className="neo-btn border-2 border-border font-bold hover:bg-muted"
                      >
                        View
                      </Button>
                    </div>
                  );
                })
              ) : (
                <p className="text-muted-foreground text-center py-8 text-lg font-medium">
                  No recipes found.
                </p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="family" className="space-y-8">
            {families.length > 0 ? (
              <>
                {families.map((family) => {
                  const familyRecipes = recipes.filter((r) => r.family === family.name);
                  const colors = getFamilyColors(family.name);
                  return (
                    <div key={family.id} className="space-y-6">
                      <div className={cn("neo-card bg-card p-6 border-l-4", colors.border)}>
                        <div className="flex items-center gap-3 mb-3">
                          <h2 className="text-4xl font-black font-display uppercase tracking-tight text-foreground">{family.name}</h2>
                          <Badge className={cn("neo-badge text-lg px-4 py-2 font-bold", colors.bg, colors.text)}>
                            {familyRecipes.length} recipe{familyRecipes.length !== 1 ? 's' : ''}
                          </Badge>
                        </div>
                        {family.description && (
                          <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                            {family.description}
                          </p>
                        )}
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

                {/* Other/Uncategorized Recipes */}
                {(() => {
                  const definedFamilies = families.map(f => f.name);
                  const otherRecipes = recipes.filter((r) => !definedFamilies.includes(r.family));
                  const colors = getFamilyColors('Other');

                  if (otherRecipes.length > 0) {
                    return (
                      <div className="space-y-6">
                        <div className={cn("neo-card bg-card p-6 border-l-4", colors.border)}>
                          <div className="flex items-center gap-3 mb-3">
                            <h2 className="text-4xl font-black font-display uppercase tracking-tight text-foreground">Other</h2>
                            <Badge className={cn("neo-badge text-lg px-4 py-2 font-bold", colors.bg, colors.text)}>
                              {otherRecipes.length} recipe{otherRecipes.length !== 1 ? 's' : ''}
                            </Badge>
                          </div>
                          <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                            Specialty drinks and unique cocktails that don't fit into the main families.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {otherRecipes.map((recipe) => (
                            <RecipeCard
                              key={recipe.id}
                              recipe={{ ...recipe, family_name: recipe.family || 'Other' }}
                              onClick={() => handleRecipeClick(recipe)}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })()}
              </>
            ) : (
              <p className="text-muted-foreground text-center py-8 text-lg font-medium">
                No families found.
              </p>
            )}
          </TabsContent>
        </Tabs>

        {/* Recipe Slide Panel */}
        <RecipeSlidePanel
          recipe={selectedRecipe}
          open={isPanelOpen}
          onOpenChange={handleClosePanel}
        />
      </div >
    </>
  );
}

