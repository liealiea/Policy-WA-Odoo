
import React, { ReactNode } from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
        <span className="w-8 h-1 bg-blue-600 mr-4 rounded-full"></span>
        {title}
      </h2>
      <div className="text-lg text-slate-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
};
