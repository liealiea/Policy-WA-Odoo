
import React from 'react';

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
  activeSection: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ sections, activeSection }) => {
  return (
    <nav className="flex flex-col space-y-1 p-4 bg-white rounded-2xl border border-slate-200">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Table of Contents</h3>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
            activeSection === section.id
              ? 'bg-blue-50 text-blue-700 font-semibold'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          {section.title}
        </a>
      ))}
    </nav>
  );
};
