import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface ButtonProps {
  text: string;
  subtext?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  subtext, 
  className = "", 
  variant = 'primary',
  fullWidth = false
}) => {
  const baseStyles = "group relative inline-flex flex-col items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-700 text-white hover:bg-brand-800 shadow-brand-700/30 focus:ring-brand-700",
    secondary: "bg-white text-brand-800 border-2 border-brand-100 hover:border-brand-700 hover:bg-brand-50 shadow-gray-200/50 focus:ring-brand-700"
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span className="flex items-center gap-2">
        <MessageCircle className="w-6 h-6 animate-pulse" />
        {text}
      </span>
      {subtext && (
        <span className="mt-1 text-xs font-medium opacity-90 uppercase tracking-wide">
          {subtext}
        </span>
      )}
    </a>
  );
};