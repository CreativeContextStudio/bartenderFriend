'use client';

import { useEffect, useState } from 'react';
import { getRecipesPracticedLast7Days } from '@/lib/progress';

export function ProgressRecipeCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const practiced = getRecipesPracticedLast7Days();
    setCount(practiced.length);
  }, []);

  return (
    <>
      <div className="text-2xl font-bold">{count}</div>
      <p className="text-xs text-muted-foreground">Last 7 days</p>
    </>
  );
}
