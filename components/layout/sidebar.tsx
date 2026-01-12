'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  BookOpen,
  Coffee,
  Ruler,
  Target,
  BarChart3,
  ListChecks,
  LayoutDashboard,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  {
    name: 'Guides',
    icon: BookOpen,
    children: [
      { name: 'Basic Recipe Knowledge', href: '/guide/basic-recipes' },
      { name: 'Behind the Bar', href: '/guide/behind-bar' },
      { name: 'Language + Workflow', href: '/guide/language-workflow' },
      { name: 'Learning Plan (7-10 Days)', href: '/guide/learning-plan' },
    ],
  },
  {
    name: 'Recipes',
    icon: Coffee,
    children: [
      { name: 'Recipe Cards', href: '/recipes' },
      { name: 'Families Explorer', href: '/recipes/families' },
    ],
  },
  {
    name: 'Standards',
    icon: Ruler,
    children: [
      { name: 'Core Specs', href: '/standards/core-specs' },
      { name: 'Examples', href: '/standards/examples' },
      { name: 'Documents', href: '/documents' },
    ],
  },
  {
    name: 'Training',
    icon: Target,
    children: [
      { name: 'Daily Tasks', href: '/training' },
      { name: 'Quizzes', href: '/training/quizzes' },
      { name: 'Checklists', href: '/training/checklists' },
    ],
  },
  { name: 'Progress', href: '/progress', icon: BarChart3 },
  { name: 'Cheat Sheet', href: '/cheat-sheet', icon: ListChecks },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check if any child route is active for accordion default value
  const getDefaultValue = (item: typeof navigation[number]) => {
    if (!item.children) return undefined;
    const hasActiveChild = item.children.some((child) => pathname === child.href);
    return hasActiveChild ? item.name : undefined;
  };

  // Determine which items should be accordions
  const isAccordionItem = (item: typeof navigation[number]) => {
    return ['Guides', 'Recipes', 'Standards', 'Training'].includes(item.name);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const sidebarContent = (
    <nav className="flex-1 space-y-2 px-2 py-4 sm:px-4 sm:py-6 overflow-y-auto">
      <Accordion type="multiple" className="w-full space-y-2" defaultValue={navigation.filter(isAccordionItem).filter((item) => getDefaultValue(item)).map((item) => item.name)}>
        {navigation.map((item) => {
          // Accordion items
          if (isAccordionItem(item)) {
            const isActive = pathname === item.href || (item.children && item.children.some((child) => pathname === child.href));
            return (
              <AccordionItem key={item.name} value={item.name} className="border-2 border-border bg-card shadow-neo-sm">
                <AccordionTrigger className={cn(
                  'px-3 py-3 text-sm sm:text-base font-black hover:no-underline transition-colors',
                  isActive && 'bg-[#ffd60a] text-black'
                )}>
                  <div className="flex items-center gap-2 sm:gap-3 flex-1">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-left font-display">{item.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-2 pt-1 px-2 sm:px-4">
                  <div className="space-y-1">
                    {item.href && (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-bold transition-all border-2 border-transparent rounded-sm mb-2',
                          pathname === item.href
                            ? 'bg-foreground text-background hover:bg-foreground/90'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        )}
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span>Overview</span>
                      </Link>
                    )}
                    {item.children?.map((child) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-bold transition-all border-2 rounded-sm',
                            isChildActive
                              ? 'bg-foreground text-background border-border'
                              : 'text-muted-foreground border-transparent hover:border-border hover:bg-background'
                          )}
                        >
                          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                          <span className="truncate">{child.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          }

          // Regular link items
          if (!item.href) return null;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-bold transition-all border-2 border-border rounded-sm block shadow-neo-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-md',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:bg-muted'
              )}
            >
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
              <span className="font-display">{item.name}</span>
            </Link>
          );
        })}
      </Accordion>
    </nav>
  );

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md border-2 border-border bg-card shadow-neo-md md:hidden transition-transform active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="sidebar-navigation"
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        id="sidebar-navigation"
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex flex-col border-r-4 border-border bg-background transition-transform duration-300 ease-in-out',
          'w-64 sm:w-72',
          // Mobile: slide in/out
          'md:translate-x-0 md:static md:z-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Header */}
        <div className="flex h-16 sm:h-20 items-center justify-center border-b-4 border-border px-4 sm:px-6 bg-secondary">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 sm:gap-3 font-black text-xl sm:text-2xl transition-transform hover:scale-105"
          >
            <LayoutDashboard className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
            <span className="font-display tracking-tight text-black">bartender<span className="italic">Friend</span></span>
          </Link>
        </div>

        {/* Navigation */}
        {sidebarContent}
      </aside>
    </>
  );
}
