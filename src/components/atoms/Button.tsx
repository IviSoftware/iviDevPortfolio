import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-peach-500 text-white hover:bg-peach-600 focus:ring-peach-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-sage-500 text-white hover:bg-sage-600 focus:ring-sage-500 shadow-lg hover:shadow-xl',
    ghost: 'text-warm-700 hover:text-peach-600 hover:bg-peach-50 focus:ring-peach-500',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`;

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Component
        href={href}
        onClick={onClick}
        className={classes}
        disabled={disabled}
        {...(href && { target: href.startsWith('http') ? '_blank' : undefined })}
        {...(href && href.startsWith('http') && { rel: 'noopener noreferrer' })}
      >
        {children}
      </Component>
    </motion.div>
  );
};

export default Button;