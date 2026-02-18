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
          {/* Navigation links removed as per request */}
          <div className="flex md:hidden">
            {/* Mobile menu could go here if needed */}
          </div>
        </div>
      </div>
    </header>
  );
};
