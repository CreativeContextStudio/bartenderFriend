'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

export function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-30 flex h-16 sm:h-20 items-center gap-3 sm:gap-4 border-b-4 border-brutal bg-background px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-3 sm:gap-4 min-w-0">
          <Button
            variant="outline"
            className="relative h-10 sm:h-12 w-full justify-start text-sm sm:text-base font-bold text-muted-foreground border-brutal-sm sm:w-80 sm:pr-14"
            onClick={() => setOpen(true)}
            aria-label="Open search dialog"
          >
            <Search className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 shrink-0" aria-hidden="true" />
            <span className="truncate hidden sm:inline">Search recipes, guides, terms...</span>
            <span className="truncate sm:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden h-6 select-none items-center gap-1 border-brutal-sm bg-muted px-2 font-mono text-xs font-black opacity-100 sm:flex" aria-hidden="true">
              <span className="text-sm">⌘</span>K
            </kbd>
          </Button>
        </div>
        <ThemeToggle />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search recipes, guides, terms..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Recipes">
            <CommandItem asChild>
              <Link href="/recipes">View all recipes</Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="/recipes/families">Explore families</Link>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Guides">
            <CommandItem asChild>
              <Link href="/guide/basic-recipes">Basic Recipe Knowledge</Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="/guide/behind-bar">Behind the Bar</Link>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Training">
            <CommandItem asChild>
              <Link href="/training">Daily Tasks</Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href="/training/quizzes">Quizzes</Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
