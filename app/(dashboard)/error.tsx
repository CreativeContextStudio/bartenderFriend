'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 text-center">
      <AlertTriangle className="h-12 w-12 text-destructive" />
      <div className="space-y-2">
        <h2 className="text-2xl font-black uppercase tracking-tight">
          Something went wrong
        </h2>
        <p className="text-muted-foreground font-bold max-w-md">
          {error.message || 'An unexpected error occurred.'}
        </p>
      </div>
      <Button
        onClick={reset}
        className="neo-btn font-bold"
        size="lg"
      >
        Try Again
      </Button>
    </div>
  );
}
