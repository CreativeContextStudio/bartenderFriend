'use client';

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
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
    ],
  },
  { name: 'Documents', href: '/documents', icon: FileText },
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

  return (
    <div className="flex h-full w-64 flex-col border-r-4 border-brutal bg-background md:border-r-4 sm:border-r-3">
      <div className="flex h-20 items-center border-b-4 border-brutal px-6 bg-primary/10 shadow-brutal-primary">
        <Link href="/" className="flex items-center gap-3 font-black text-xl transition-brutal hover:-translate-x-1">
          <LayoutDashboard className="h-7 w-7 text-primary" />
          <span>bartenderFriend</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-2 px-4 py-6">
        {navigation.map((item) => {
          if (item.children) {
            return (
              <div key={item.name} className="space-y-2">
                <div className="flex items-center gap-2 px-3 py-3 text-base font-black text-foreground border-brutal-sm bg-muted/30">
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </div>
                {item.children.map((child) => {
                  const isActive = pathname === child.href;
                  return (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={cn(
                        'flex items-center gap-3 px-6 py-3 text-base font-bold transition-brutal',
                        'border-brutal-sm',
                        isActive
                          ? 'bg-primary text-primary-foreground border-primary shadow-brutal-sm'
                          : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary hover:shadow-brutal-sm hover:-translate-x-1'
                      )}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span>{child.name}</span>
                    </Link>
                  );
                })}
              </div>
            );
          }
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 text-base font-bold transition-brutal',
                'border-brutal-sm',
                isActive
                  ? 'bg-primary text-primary-foreground border-primary shadow-brutal-sm'
                  : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary hover:shadow-brutal-sm hover:-translate-x-1'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
