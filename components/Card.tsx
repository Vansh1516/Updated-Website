
import React from 'react';

interface CardProps {
  title?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, href, className = "", children }) => {
  const Container = href ? 'a' : 'div';

  return (
    <Container
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className={`
        group relative overflow-hidden bg-white/50 dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm flex flex-col justify-between 
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${href ? 'hover:-translate-y-1.5 hover:shadow-2xl hover:border-sapphire/20 dark:hover:border-sapphire/30 cursor-pointer' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sapphire/[0.03] to-transparent dark:from-sapphire/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 w-full">
        {title && (
          <h3 className="text-sm font-black text-slate-900 dark:text-white mb-4 tracking-widest uppercase group-hover:text-sapphire transition-colors">
            {title}
          </h3>
        )}
        <div className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium transition-colors">
          {children}
        </div>
      </div>
    </Container>
  );
};

export default Card;
