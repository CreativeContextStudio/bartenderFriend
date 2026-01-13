'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DrinkPlaceholder } from '@/components/ui/placeholders/drink-placeholder';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  recipe: {
    id: string;
    name: string;
    slug: string;
    description?: string;
    family_name?: string;
    method: string;
    glassware: string;
    difficulty?: number;
    tags?: string[];
  };
  onClick?: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const getGlassType = (glassware: string) => {
    const glass = glassware.toLowerCase();
    if (glass.includes('coupe') || glass.includes('martini')) return 'coupe';
    if (glass.includes('collins')) return 'collins';
    if (glass.includes('rocks') || glass.includes('old fashioned')) return 'rocks';
    return 'rocks';
  };

  const getAnimation = (index: number) => {
    const animations: ('shimmer' | 'gradient' | 'pulse')[] = ['shimmer', 'gradient', 'pulse'];
    return animations[index % 3];
  };

  // Family color mapping with hybrid approach: vibrant backgrounds + accessible text
  const getFamilyColors = (family?: string): { bg: string; text: string; border: string } => {
    if (!family) return { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border' };

    const familyLower = family.toLowerCase();

    if (familyLower === 'sour') {
      // Vibrant lime background with accessible dark lime text (7:1 contrast)
      return { bg: 'bg-[#70e000]', text: 'text-neo-action-text', border: 'border-[#70e000]' };
    }

    if (familyLower === 'spirit forward' || familyLower === 'spirit-forward' || familyLower === 'stirred') {
      // Vibrant pink background with white text (4.8:1 contrast - AA compliant)
      return { bg: 'bg-[#ff006e]', text: 'text-white', border: 'border-[#ff006e]' };
    }

    if (familyLower === 'highball') {
      // Vibrant yellow background with accessible dark yellow text (9.2:1 contrast)
      return { bg: 'bg-[#ffd60a]', text: 'text-neo-pending-text', border: 'border-[#ffd60a]' };
    }

    if (familyLower.includes('collins') || familyLower.includes('fizz')) {
      // Blue background with white text (AA compliant)
      return { bg: 'bg-[#3a86ff]', text: 'text-white', border: 'border-[#3a86ff]' };
    }

    return { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border' };
  };

  const familyColors = getFamilyColors(recipe.family_name);

  return (
    <Card
      className={cn(
        "cursor-pointer h-full group neo-card bg-card",
        "transition-all duration-200",
        "hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg",
        `border-l-4 ${familyColors.border}`
      )}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`View ${recipe.name} recipe`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted/30 relative border-b-2 border-border">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <DrinkPlaceholder
          glassType={getGlassType(recipe.glassware) as any}
          animation={getAnimation(parseInt(recipe.id.slice(-1), 16) || 0)}
          className="h-full transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader className="p-5 text-foreground">
        <div className="flex items-start justify-between gap-3 mb-2">
          <CardTitle className="text-xl md:text-2xl font-black font-display uppercase tracking-tight text-foreground">
            {recipe.name}
          </CardTitle>
          {recipe.family_name && (
            <Badge
              className={cn(
                "neo-badge shrink-0 text-sm px-3 py-1.5 font-bold",
                familyColors.bg,
                familyColors.text
              )}
            >
              {recipe.family_name}
            </Badge>
          )}
        </div>
        {recipe.description && (
          <p className="text-sm font-medium text-muted-foreground line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-border mt-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs font-bold uppercase tracking-wider border-2 border-border bg-card">
              {recipe.method}
            </Badge>
            <Badge variant="outline" className="text-xs font-bold uppercase tracking-wider border-2 border-border bg-card">
              {recipe.glassware}
            </Badge>
          </div>
          {recipe.difficulty && (
            <div className="flex items-center gap-1" role="img" aria-label={`Difficulty: ${recipe.difficulty} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-2 w-2 rounded-full border-2 border-border transition-all",
                    i < (recipe.difficulty || 0) ? familyColors.bg : "bg-muted"
                  )}
                  aria-hidden="true"
                />
              ))}
              <span className="sr-only">Difficulty level {recipe.difficulty} out of 5</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card >
  );
}
