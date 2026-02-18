
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-black text-slate-800 tracking-tight">
              JUKE<span className="text-blue-600">SOLUTIONS</span>
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="http://www.jukesolutions.com" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Website</a>
            <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Support</a>
            <a href="#rights" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Your Rights</a>
          </nav>
          <div className="flex md:hidden">
            {/* Mobile menu could go here if needed, keeping it simple for one page policy */}
          </div>
        </div>
      </div>
    </header>
  );
};
