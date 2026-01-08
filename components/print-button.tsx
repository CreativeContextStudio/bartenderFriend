'use client';

import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export function PrintButton() {
  return (
    <Button
      variant="outline"
      onClick={() => window.print()}
      className="hidden print:hidden border-brutal-sm font-bold"
      size="lg"
    >
      <Printer className="mr-2 h-5 w-5" />
      Print
    </Button>
  );
}
