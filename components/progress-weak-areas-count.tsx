'use client';

import { useEffect, useState } from 'react';
import { getQuizScores } from '@/lib/progress';
import { families, recipes } from '@/lib/data';

export function ProgressWeakAreasCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const quizScores = getQuizScores();
    
    const weakFamilies = families.filter(family => {
      const familyRecipes = recipes.filter(r => r.family_id === family.id);
      const familyQuizScores = quizScores.filter(q => 
        familyRecipes.some(r => q.quizType.includes(r.id))
      );
      
      if (familyQuizScores.length === 0) return false;
      const avgScore = familyQuizScores.reduce((sum, q) => sum + q.score, 0) / familyQuizScores.length;
      return avgScore < 0.7; // Less than 70%
    });

    setCount(weakFamilies.length);
  }, []);

  return (
    <>
      <div className="text-2xl font-bold">{count}</div>
      <p className="text-xs text-muted-foreground">Families to review</p>
    </>
  );
}
