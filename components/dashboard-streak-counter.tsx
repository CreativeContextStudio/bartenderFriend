'use client';

import { useEffect, useState } from 'react';
import { getStreakDays } from '@/lib/progress';

export function DashboardStreakCounter() {
  const [streakDays, setStreakDays] = useState(0);

  useEffect(() => {
    setStreakDays(getStreakDays());
  }, []);

  return (
    <>
      <div className="text-2xl font-bold">{streakDays}</div>
      <p className="text-xs text-muted-foreground">Days active</p>
    </>
  );
}
