'use client';

interface DrinkPlaceholderProps {
  glassType?: 'rocks' | 'coupe' | 'collins' | 'martini';
  animation?: 'shimmer' | 'gradient' | 'pulse';
  className?: string;
}

export function DrinkPlaceholder({ 
  glassType = 'rocks', 
  animation = 'shimmer',
  className = '' 
}: DrinkPlaceholderProps) {
  return (
    <div className={`drink-placeholder drink-placeholder--${glassType} drink-placeholder--${animation} ${className}`}>
      <div className="drink-placeholder__glass">
        <div className="drink-placeholder__liquid"></div>
      </div>
    </div>
  );
}
