'use client';

import { useEffect } from 'react';
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { DrinkPlaceholder } from '@/components/ui/placeholders/drink-placeholder';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RecipeSlidePanelProps {
  recipe: {
    id: string;
    name: string;
    description?: string;
    family?: string;
    spec: Record<string, string>;
    method: string;
    glassware: string;
    garnish?: string;
    steps?: string[];
    make_it_faster_tips?: string[];
    common_mistakes?: string[];
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RecipeSlidePanel({ recipe, open, onOpenChange }: RecipeSlidePanelProps) {
  // Prevent body scroll when panel is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!recipe) return null;

  const spec = recipe.spec || {};
  const steps = recipe.steps || [];
  const makeItFasterTips = recipe.make_it_faster_tips || [];
  const commonMistakes = recipe.common_mistakes || [];

  const getGlassType = (glassware: string) => {
    const glass = glassware.toLowerCase();
    if (glass.includes('coupe') || glass.includes('martini')) return 'coupe';
    if (glass.includes('collins')) return 'highball';
    if (glass.includes('rocks') || glass.includes('old fashioned')) return 'rocks';
    return 'rocks';
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        className={cn(
          "w-full sm:w-[500px] lg:w-[600px] border-brutal p-0 overflow-y-auto",
          "bg-background"
        )}
      >
        {/* Close Button - Neobrutalist Style */}
        <SheetPrimitive.Close
          className={cn(
            "absolute right-6 top-6 z-10",
            "w-14 h-14 border-4 border-brutal bg-background",
            "flex items-center justify-center",
            "hover:bg-secondary transition-all duration-200 hover:scale-105 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            "rounded-none",
            "md:w-12 md:h-12 md:right-4 md:top-4"
          )}
          aria-label="Close recipe panel"
        >
          <X className="h-7 w-7 md:h-6 md:w-6 font-black" />
        </SheetPrimitive.Close>

        <div className="p-8 space-y-8">
          <SheetHeader className="space-y-4 border-brutal-sm pb-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <SheetTitle className="text-4xl font-black leading-tight mb-2">
                  {recipe.name}
                </SheetTitle>
                {recipe.family && (
                  <Badge 
                    variant="secondary" 
                    className="mt-2 border-brutal-sm text-base px-4 py-2 font-bold"
                  >
                    {recipe.family}
                  </Badge>
                )}
              </div>
            </div>
            {recipe.description && (
              <SheetDescription className="text-lg font-medium leading-relaxed">
                {recipe.description}
              </SheetDescription>
            )}
          </SheetHeader>

          {/* Drink Image */}
          <div className="aspect-square border-brutal overflow-hidden bg-muted">
            <DrinkPlaceholder
              glassType={getGlassType(recipe.glassware) as any}
              animation="shimmer"
              className="h-full w-full"
            />
          </div>

          {/* Spec Section */}
          <div className="space-y-4 border-brutal p-6 bg-muted/30">
            <h3 className="text-2xl font-black mb-4">Spec</h3>
            <div className="space-y-3 font-mono">
              {Object.entries(spec).map(([key, value]) => (
                <div 
                  key={key} 
                  className="flex justify-between items-center border-brutal-sm p-3 bg-background"
                >
                  <span className="text-base font-bold capitalize text-muted-foreground">
                    {key.replace('_', ' ')}:
                  </span>
                  <span className="text-lg font-black">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Method & Glassware */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border-brutal-sm p-4 bg-background">
              <h4 className="text-sm font-bold mb-2 text-muted-foreground">Method</h4>
              <Badge 
                variant="outline" 
                className="text-base px-4 py-2 font-bold border-brutal-sm"
              >
                {recipe.method}
              </Badge>
            </div>
            <div className="border-brutal-sm p-4 bg-background">
              <h4 className="text-sm font-bold mb-2 text-muted-foreground">Glassware</h4>
              <Badge 
                variant="outline" 
                className="text-base px-4 py-2 font-bold border-brutal-sm"
              >
                {recipe.glassware}
              </Badge>
            </div>
          </div>

          {/* Garnish */}
          {recipe.garnish && (
            <div className="border-brutal-sm p-4 bg-background">
              <h4 className="text-sm font-bold mb-2 text-muted-foreground">Garnish</h4>
              <p className="text-base font-medium">{recipe.garnish}</p>
            </div>
          )}

          {/* Steps */}
          {steps.length > 0 && (
            <div className="space-y-4 border-brutal-sm p-6 bg-background">
              <h3 className="text-2xl font-black mb-4">Steps</h3>
              <ol className="space-y-3 list-decimal list-inside">
                {steps.map((step, index) => (
                  <li 
                    key={index} 
                    className="text-base font-medium leading-relaxed pl-2"
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Make It Faster Tips */}
          {makeItFasterTips.length > 0 && (
            <div className="space-y-4 border-brutal-sm p-6 bg-secondary/20">
              <h3 className="text-2xl font-black mb-4">Make It Faster</h3>
              <ul className="space-y-2 list-disc list-inside">
                {makeItFasterTips.map((tip, index) => (
                  <li 
                    key={index} 
                    className="text-base font-medium leading-relaxed pl-2"
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Mistakes */}
          {commonMistakes.length > 0 && (
            <div className="space-y-4 border-brutal-sm p-6 bg-destructive/10">
              <h3 className="text-2xl font-black mb-4 text-destructive">Common Mistakes</h3>
              <ul className="space-y-2 list-disc list-inside">
                {commonMistakes.map((mistake, index) => (
                  <li 
                    key={index} 
                    className="text-base font-medium leading-relaxed pl-2"
                  >
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
