import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-card py-8 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-6">
            <span className="text-slate-400 text-sm">Built with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;