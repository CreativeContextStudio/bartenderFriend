'use client';

interface DrinkPlaceholderProps {
  glassType?: 'rocks' | 'coupe' | 'collins' | 'martini';
  animation?: 'shimmer' | 'gradient' | 'pulse';
  colorTheme?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning';
  className?: string;
}

export function DrinkPlaceholder({ 
  glassType = 'rocks', 
  animation = 'shimmer',
  colorTheme = 'primary',
  className = '' 
}: DrinkPlaceholderProps) {
  return (
    <div 
      className={`drink-placeholder drink-placeholder--${glassType} drink-placeholder--${animation} drink-placeholder--${colorTheme} ${className}`}
      style={{
        '--drink-color-theme': `var(--${colorTheme})`,
        '--drink-color-theme-foreground': `var(--${colorTheme}-foreground)`,
      } as React.CSSProperties}
    >
      <div className="drink-placeholder__glass">
        <div className="drink-placeholder__liquid"></div>
      </div>
    </div>
  );
}
