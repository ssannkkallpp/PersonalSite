import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2 mb-4">
            <Code className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            <span className="text-base sm:text-lg font-semibold text-gray-900">Sankalp Ramesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;