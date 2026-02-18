
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center border-b border-slate-800 pb-12 mb-8">
          <div>
            <span className="text-2xl font-black tracking-tight">
              JUKE<span className="text-blue-400">SOLUTIONS</span>
            </span>
            <p className="mt-4 text-slate-400 max-w-sm">
              Providing enterprise-grade WhatsApp integration for Odoo platforms, ensuring secure and efficient communication for businesses worldwide.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col md:items-end space-y-2 text-slate-400">
              <a href="http://www.jukesolutions.com" className="hover:text-white transition-colors">Main Website</a>
              <a href="mailto:liea.fadlie@jukesolutions.com" className="hover:text-white transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
        <div className="text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PT Juke Solusi Teknologi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
