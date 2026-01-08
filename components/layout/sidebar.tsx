'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  BookOpen, 
  Coffee, 
  Ruler, 
  FileText, 
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
              <AccordionItem key={item.name} value={item.name} className="border-brutal-sm bg-background">
                <AccordionTrigger className={cn(
                  'px-3 py-3 text-sm sm:text-base font-black hover:no-underline',
                  isActive && 'bg-primary/10 text-primary'
                )}>
                  <div className="flex items-center gap-2 sm:gap-3 flex-1">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span className="text-left font-['Red_Hat_Display',sans-serif]">{item.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-2 pt-1 px-2 sm:px-4">
                  <div className="space-y-1">
                    {item.href && (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-bold transition-brutal border-brutal-sm rounded-sm mb-2',
                          pathname === item.href
                            ? 'bg-primary text-primary-foreground border-primary shadow-brutal-sm'
                            : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary hover:shadow-brutal-sm'
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
                            'flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-bold transition-brutal border-brutal-sm rounded-sm',
                            isChildActive
                              ? 'bg-primary text-primary-foreground border-primary shadow-brutal-sm'
                              : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary hover:shadow-brutal-sm'
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
                'flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-bold transition-brutal border-brutal-sm rounded-sm block',
                isActive
                  ? 'bg-primary text-primary-foreground border-primary shadow-brutal-sm'
                  : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary hover:shadow-brutal-sm'
              )}
            >
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
              <span className="font-['Red_Hat_Display',sans-serif]">{item.name}</span>
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
        className="fixed top-4 left-4 z-50 p-2 rounded-md border-brutal-sm bg-background shadow-brutal-sm md:hidden transition-brutal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        id="sidebar-navigation"
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex flex-col border-r-4 border-brutal bg-background transition-transform duration-300 ease-in-out',
          'w-64 sm:w-72',
          // Mobile: slide in/out
          'md:translate-x-0 md:static md:z-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Header */}
        <div className="flex h-16 sm:h-20 items-center border-b-4 border-brutal px-4 sm:px-6 bg-primary/10 shadow-brutal-primary shrink-0">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 sm:gap-3 font-black text-lg sm:text-xl transition-brutal hover:-translate-x-1 flex-1"
          >
            <LayoutDashboard className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" />
            <span className="font-['Red_Hat_Display',sans-serif] truncate">bartenderFriend</span>
          </Link>
        </div>

        {/* Navigation */}
        {sidebarContent}
      </aside>
    </>
  );
}
