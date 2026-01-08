'use client';

import { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import Link from 'next/link';

export function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 flex h-20 items-center gap-4 border-b-4 border-brutal bg-background px-6 md:px-8">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden border-brutal-sm"
          onClick={() => {
            // Mobile menu toggle would go here
          }}
        >
          <Menu className="h-6 w-6 font-bold" />
        </Button>
        <div className="flex flex-1 items-center gap-4">
          <Button
            variant="outline"
            className="relative h-12 w-full justify-start text-base font-bold text-muted-foreground border-brutal-sm sm:w-80 sm:pr-14"
            onClick={() => setOpen(true)}
          >
            <Search className="mr-3 h-5 w-5" />
            Search recipes, guides, terms...
            <kbd className="pointer-events-none absolute right-2 top-2 hidden h-6 select-none items-center gap-1 border-brutal-sm bg-muted px-2 font-mono text-xs font-black opacity-100 sm:flex">
              <span className="text-sm">⌘</span>K
            </kbd>
          </Button>
        </div>
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
