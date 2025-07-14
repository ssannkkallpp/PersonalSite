import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2 mb-4">
            <Code className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">Sankalp Ramesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;