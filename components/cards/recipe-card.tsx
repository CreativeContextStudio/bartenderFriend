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

  const getFamilyColor = (family?: string): 'primary' | 'secondary' | 'accent' | 'success' | 'warning' => {
    if (!family) return 'warning';
    const familyLower = family.toLowerCase();
    
    // Sour → Secondary (Yellow)
    if (familyLower === 'sour') return 'secondary';
    
    // Spirit-Forward / Stirred → Primary (Cyan)
    if (familyLower === 'spirit-forward' || familyLower === 'stirred') return 'primary';
    
    // Highball → Success (Green)
    if (familyLower === 'highball') return 'success';
    
    // Collins/Fizz → Accent (Pink)
    if (familyLower.includes('collins') || familyLower.includes('fizz')) return 'accent';
    
    // Other/Uncategorized → Warning (Orange)
    return 'warning';
  };

  const getDifficultyBorder = (difficulty?: number) => {
    if (difficulty === 1) return 'border-l-8 border-l-success';
    if (difficulty === 2) return 'border-l-8 border-l-warning';
    if (difficulty === 3) return 'border-l-8 border-l-destructive';
    return '';
  };

  const familyColor = getFamilyColor(recipe.family_name);
  
  // Map family colors to hover shadow classes
  const getHoverShadow = (color: string) => {
    switch (color) {
      case 'primary': return 'hover:shadow-brutal-primary';
      case 'secondary': return 'hover:shadow-brutal-secondary';
      case 'accent': return 'hover:shadow-brutal-accent';
      case 'success': return 'hover:shadow-brutal-success';
      case 'warning': return 'hover:shadow-brutal-warning';
      default: return 'hover:shadow-brutal-primary';
    }
  };

  // Map family colors to hover border classes
  const getHoverBorder = (color: string) => {
    switch (color) {
      case 'primary': return 'hover:border-primary';
      case 'secondary': return 'hover:border-secondary';
      case 'accent': return 'hover:border-accent';
      case 'success': return 'hover:border-success';
      case 'warning': return 'hover:border-warning';
      default: return 'hover:border-primary';
    }
  };

  return (
    <Card
      className={cn(
        "cursor-pointer h-full",
        "transition-brutal",
        getHoverShadow(familyColor),
        getHoverBorder(familyColor),
        "hover:-translate-y-2",
        "active:shadow-brutal-pressed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        getDifficultyBorder(recipe.difficulty)
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
      <div className="aspect-video overflow-hidden border-b-4 border-brutal">
        <DrinkPlaceholder
          glassType={getGlassType(recipe.glassware) as any}
          animation={getAnimation(parseInt(recipe.id.slice(-1), 16) || 0)}
          colorTheme={getFamilyColor(recipe.family_name)}
          className="h-full"
        />
      </div>
      <CardHeader className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <CardTitle className="text-2xl font-black line-clamp-1 leading-tight">
            {recipe.name}
          </CardTitle>
          {recipe.family_name && (
            <Badge 
              variant="secondary" 
              className="shrink-0 border-brutal-sm text-sm px-3 py-1.5 font-bold"
            >
              {recipe.family_name}
            </Badge>
          )}
        </div>
        {recipe.description && (
          <p className="text-base font-medium text-muted-foreground line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className="text-sm px-3 py-1.5 font-bold border-brutal-sm"
            >
              {recipe.method}
            </Badge>
            <Badge 
              variant="outline" 
              className="text-sm px-3 py-1.5 font-bold border-brutal-sm"
            >
              {recipe.glassware}
            </Badge>
          </div>
          {recipe.difficulty && (
            <div className="text-base font-black text-muted-foreground">
              {'★'.repeat(recipe.difficulty)}{'☆'.repeat(5 - recipe.difficulty)}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
