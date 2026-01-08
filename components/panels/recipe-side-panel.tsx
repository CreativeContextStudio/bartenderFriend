'use client';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { DrinkPlaceholder } from '@/components/ui/placeholders/drink-placeholder';

interface RecipeSidePanelProps {
  recipe: {
    id: string;
    name: string;
    description?: string;
    family_name?: string;
    spec: any;
    method: string;
    glassware: string;
    garnish?: string;
    steps?: string[];
    make_it_faster_tips?: string[];
    common_mistakes?: string[];
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RecipeSidePanel({ recipe, open, onOpenChange }: RecipeSidePanelProps) {
  const spec = recipe.spec || {};
  const steps = recipe.steps || [];
  const makeItFasterTips = recipe.make_it_faster_tips || [];
  const commonMistakes = recipe.common_mistakes || [];

  const getGlassType = (glassware: string) => {
    const glass = glassware.toLowerCase();
    if (glass.includes('coupe') || glass.includes('martini')) return 'coupe';
    if (glass.includes('collins')) return 'collins';
    if (glass.includes('rocks') || glass.includes('old fashioned')) return 'rocks';
    return 'rocks';
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <SheetTitle className="text-2xl">{recipe.name}</SheetTitle>
            {recipe.family_name && (
              <Badge variant="secondary">{recipe.family_name}</Badge>
            )}
          </div>
          {recipe.description && (
            <SheetDescription className="text-base">{recipe.description}</SheetDescription>
          )}
        </SheetHeader>

        <div className="space-y-6 mt-6">
          <div className="aspect-square rounded-lg overflow-hidden border">
            <DrinkPlaceholder
              glassType={getGlassType(recipe.glassware) as any}
              animation="shimmer"
              className="h-full"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Spec</h3>
              <div className="rounded-md border p-3 space-y-2 font-mono text-sm bg-muted/50">
                {Object.entries(spec).map(([key, value]: [string, any]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-muted-foreground capitalize">{key.replace('_', ' ')}:</span>
                    <span className="font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <h4 className="font-medium text-sm mb-1">Method</h4>
                <Badge variant="outline">{recipe.method}</Badge>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">Glassware</h4>
                <Badge variant="outline">{recipe.glassware}</Badge>
              </div>
            </div>

            {recipe.garnish && (
              <div>
                <h4 className="font-medium text-sm mb-1">Garnish</h4>
                <p className="text-sm text-muted-foreground">{recipe.garnish}</p>
              </div>
            )}

            {steps.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Steps</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {makeItFasterTips.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Make It Faster</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  {makeItFasterTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {commonMistakes.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2 text-destructive">Common Mistakes</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  {commonMistakes.map((mistake, index) => (
                    <li key={index}>{mistake}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
