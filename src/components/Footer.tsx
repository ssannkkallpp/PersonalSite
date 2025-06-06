import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">Sankalp Ramesh</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and dedication</span>
          </div>
          
          <div className="text-gray-500 text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Sankalp Ramesh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;