'use client';

import { useState, useEffect } from 'react';
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
import { getAllRecipes, type Recipe } from '@/lib/static-data';
import { useRouter } from 'next/navigation';

export function Topbar() {
  const [open, setOpen] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const router = useRouter();

  useEffect(() => {
    setRecipes(getAllRecipes());
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <div className="sticky top-0 z-30 flex h-16 sm:h-20 items-center gap-3 sm:gap-4 border-b-4 border-border bg-background px-3 sm:px-4 md:px-6 lg:px-8 shadow-sm">
        <div className="flex flex-1 items-center gap-3 sm:gap-4 min-w-0">
          <Button
            variant="outline"
            className="relative h-10 sm:h-12 w-full justify-start text-sm sm:text-base font-bold text-muted-foreground sm:w-80 sm:pr-14 bg-card border-2 border-border shadow-neo-sm hover:shadow-neo-md hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            onClick={() => setOpen(true)}
            aria-label="Open search dialog"
          >
            <Search className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-foreground" aria-hidden="true" />
            <span className="truncate hidden sm:inline">Search recipes, guides, terms...</span>
            <span className="truncate sm:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden h-6 select-none items-center gap-1 border-2 border-border bg-muted px-2 font-mono text-xs font-black opacity-100 sm:flex rounded-sm" aria-hidden="true">
              <span className="text-sm">⌘</span>K
            </kbd>
          </Button>
        </div>
        <ThemeToggle />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search recipes, guides, terms..." />
        <CommandList className="neo-command-list">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Recipes">
            {recipes.map((recipe) => (
              <CommandItem
                key={recipe.id}
                onSelect={() => runCommand(() => router.push(`/recipes/${recipe.slug}`))}
                className="flex items-center gap-2 px-4 py-3 cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="font-black text-foreground">{recipe.name}</span>
                  <span className="text-xs font-bold text-muted-foreground uppercase">{recipe.family}</span>
                </div>
              </CommandItem>
            ))}
            <CommandItem
              onSelect={() => runCommand(() => router.push('/recipes'))}
              className="flex items-center gap-2 px-4 py-3 cursor-pointer border-t border-gray-100 mt-1"
            >
              <span className="font-bold text-blue-600">View all recipes →</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Guides">
            <CommandItem onSelect={() => runCommand(() => router.push('/guide/basic-recipes'))}>
              <span>Basic Recipe Knowledge</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/guide/behind-bar'))}>
              <span>Behind the Bar</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/guide/language-workflow'))}>
              <span>Language & Workflow</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/guide/learning-plan'))}>
              <span>Quick Learning Plan</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Training">
            <CommandItem onSelect={() => runCommand(() => router.push('/training'))}>
              <span>Daily Tasks</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/training/quizzes'))}>
              <span>Quizzes</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Cheat Sheet">
            <CommandItem onSelect={() => runCommand(() => router.push('/cheat-sheet'))}>
              <span>Quick Reference Cheat Sheet</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
