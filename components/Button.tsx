import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-5 py-2.5 font-medium transition-all duration-150";
  
  const variantStyles = {
    primary: "bg-[var(--lavender)] text-[var(--ink)] hover:brightness-110",
    secondary: "border border-[var(--ink-2)] text-[var(--text)] hover:border-[var(--lavender)]"
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
