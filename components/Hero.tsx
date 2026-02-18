
import React from 'react';

interface HeroProps {
  title: string;
  lastUpdated: string;
}

export const Hero: React.FC<HeroProps> = ({ title, lastUpdated }) => {
  return (
    <section className="gradient-bg py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
          {title}
        </h1>
        <div className="flex items-center justify-center space-x-2 text-slate-500 font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Last Updated: {lastUpdated}</span>
        </div>
      </div>
    </section>
  );
};
