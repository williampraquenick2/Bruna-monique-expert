import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, light = true }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${light ? 'bg-white' : 'bg-stone-50'} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};