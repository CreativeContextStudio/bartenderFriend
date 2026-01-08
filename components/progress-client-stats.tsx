'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { getStreakDays, getRecipesPracticedLast7Days, getQuizScores } from '@/lib/progress';
import { recipes, families } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ProgressClientStats() {
  const [streakDays, setStreakDays] = useState(0);
  const [practicedRecipes, setPracticedRecipes] = useState<string[]>([]);
  const [quizScores, setQuizScores] = useState<Array<{ quizType: string; score: number; date: string }>>([]);

  useEffect(() => {
    setStreakDays(getStreakDays());
    setPracticedRecipes(getRecipesPracticedLast7Days());
    setQuizScores(getQuizScores());
  }, []);

  // Calculate weak families based on quiz scores
  const weakFamilies = families.map(family => {
    const familyRecipes = recipes.filter(r => r.family_id === family.id);
    const familyQuizScores = quizScores.filter(q => 
      familyRecipes.some(r => q.quizType.includes(r.id))
    );
    
    if (familyQuizScores.length === 0) return null;

    const avgScore = familyQuizScores.reduce((sum, q) => sum + q.score, 0) / familyQuizScores.length;
    
    return {
      ...family,
      avg_score: avgScore,
      attempt_count: familyQuizScores.length,
    };
  }).filter(f => f !== null && f.attempt_count > 0) as Array<typeof families[0] & { avg_score: number; attempt_count: number }>;

  const studyRecipes = recipes.filter(r => !practicedRecipes.includes(r.id)).slice(0, 5);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>What Should I Study Today?</CardTitle>
          <CardDescription>
            Recipes you haven't practiced recently
          </CardDescription>
        </CardHeader>
        <CardContent>
          {studyRecipes.length > 0 ? (
            <div className="space-y-2">
              {studyRecipes.map((recipe) => {
                const family = families.find(f => f.id === recipe.family_id);
                return (
                  <div key={recipe.id} className="flex items-center justify-between rounded-md border p-3">
                    <div>
                      <div className="font-medium">{recipe.name}</div>
                      <div className="text-sm text-muted-foreground">{family?.name || 'Uncategorized'}</div>
                    </div>
                    <Link href={`/recipes/${recipe.slug}`}>
                      <Button variant="ghost" size="sm">
                        Review
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Great job! You've practiced all recipes recently.</p>
          )}
        </CardContent>
      </Card>

      {weakFamilies.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Which Families Am I Weakest In?</CardTitle>
            <CardDescription>
              Families with lowest quiz scores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weakFamilies
                .sort((a, b) => a.avg_score - b.avg_score)
                .map((family) => (
                  <div key={family.id} className="flex items-center justify-between rounded-md border p-3">
                    <div>
                      <div className="font-medium">{family.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {family.attempt_count} attempt{family.attempt_count !== 1 ? 's' : ''}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          {Math.round(family.avg_score * 100)}%
                        </div>
                        <Progress value={family.avg_score * 100} className="w-24 mt-1" />
                      </div>
                      <Link href={`/recipes/families`}>
                        <Button variant="ghost" size="sm">
                          Practice
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
