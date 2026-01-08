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

  return (
    <>
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Recipe Cards</h1>
          <p className="text-base sm:text-lg font-medium text-muted-foreground leading-relaxed">
            Browse all cocktail recipes. Click any card to see full details.
          </p>
        </div>

      <Tabs defaultValue="grid" className="w-full">
        <div className="flex items-center justify-between mb-4 sm:mb-6 overflow-x-auto">
          <TabsList className="border-brutal-sm inline-flex w-full sm:w-auto">
            <TabsTrigger value="grid" className="text-sm sm:text-base font-bold flex-1 sm:flex-initial">Grid View</TabsTrigger>
            <TabsTrigger value="list" className="text-sm sm:text-base font-bold flex-1 sm:flex-initial">List View</TabsTrigger>
            <TabsTrigger value="family" className="text-sm sm:text-base font-bold flex-1 sm:flex-initial">By Family</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="grid" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
          <div className="space-y-3">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className={cn(
                    "flex items-center gap-6 border-brutal p-6 bg-background",
                    "cursor-pointer transition-all duration-200 ease-out",
                    "hover:scale-[1.01] hover:border-primary",
                    "active:scale-[0.99]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    "md:gap-4 md:p-4"
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
                  <div className="w-32 h-32 shrink-0 border-brutal-sm overflow-hidden">
                    <DrinkPlaceholder
                      glassType={recipe.glassware.toLowerCase().includes('coupe') ? 'coupe' : 'rocks'}
                      animation="shimmer"
                      className="h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-black">{recipe.name}</h3>
                      {recipe.family && (
                        <Badge variant="secondary" className="text-sm px-3 py-1.5 font-bold border-brutal-sm">
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
                      <Badge variant="outline" className="text-sm px-3 py-1.5 font-bold border-brutal-sm">
                        {recipe.method}
                      </Badge>
                      <Badge variant="outline" className="text-sm px-3 py-1.5 font-bold border-brutal-sm">
                        {recipe.glassware}
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-brutal-sm font-bold"
                  >
                    View
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-8 text-lg font-medium">
                No recipes found.
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="family" className="space-y-8">
          {families.length > 0 ? (
            families.map((family) => {
              const familyRecipes = recipes.filter((r) => r.family === family.name);
              return (
                <div key={family.id} className="space-y-6">
                  <div className="border-brutal-sm p-6 bg-muted/30 md:p-4">
                    <h2 className="text-4xl md:text-3xl font-black mb-2">{family.name}</h2>
                    {family.description && (
                      <p className="text-lg md:text-base font-medium text-muted-foreground leading-relaxed mb-2">
                        {family.description}
                      </p>
                    )}
                    <p className="text-base md:text-sm font-bold text-muted-foreground">
                      {familyRecipes.length} recipe{familyRecipes.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
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
            })
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
    </div>
    </>
  );
}

