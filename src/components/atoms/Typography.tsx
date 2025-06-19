import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'handwriting';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  className = '',
  as,
}) => {
  const variantStyles = {
    h1: 'text-4xl md:text-6xl font-semibold leading-tight text-warm-900',
    h2: 'text-3xl md:text-5xl font-semibold leading-tight text-warm-800',
    h3: 'text-2xl md:text-3xl font-medium leading-snug text-warm-800',
    h4: 'text-xl md:text-2xl font-medium leading-snug text-warm-700',
    h5: 'text-lg md:text-xl font-medium leading-normal text-warm-700',
    h6: 'text-base md:text-lg font-medium leading-normal text-warm-700',
    body: 'text-base leading-relaxed text-warm-600',
    caption: 'text-sm leading-normal text-warm-500',
    handwriting: 'font-handwriting text-xl text-peach-600',
  };

  const defaultTags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    caption: 'span',
    handwriting: 'span',
  };

  const Component = as || defaultTags[variant] || 'p';

  return (
    <Component className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;