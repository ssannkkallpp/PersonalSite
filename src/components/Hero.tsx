import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, User, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the path to your PDF file in the public folder
    link.href = '/resume.pdf';
    // Set the download attribute to force download
    link.download = 'Sankalp_Ramesh_Resume.pdf';
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-indigo-100 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-100 rounded-full opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-gray-900 order-2 lg:order-1">  
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
              <span className="block">Hello, I'm</span>
              <span className="block text-blue-600">
                Sankalp Ramesh
              </span>
            </h1>
            
            <p className="text-xl text-gray-900 mb-10 leading-relaxed max-w-2xl font-normal">
              Passionate about building innovative software solutions with 3 years of experience 
              at leading companies including Bank of America and ColorTokens.
            </p>

            {/* Experience Highlights */}
            <div className="flex flex-wrap gap-4 mb-10">
              {['3+ Years Experience', 'Full-Stack Development', 'Enterprise Solutions', 'Team Leadership'].map((highlight, index) => (
                <span
                  key={highlight}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-full text-lg font-medium text-gray-900 shadow-md"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <button 
                onClick={handleDownload}
                className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                <Download className="mr-3 h-6 w-6" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-4 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg hover:border-blue-300 group"
                  aria-label={label}
                >
                  <Icon className="h-8 w-8 text-gray-700 group-hover:text-blue-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Section */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-80 h-80 mx-auto">
              {/* Simple frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/image.png"
                  alt="Sankalp Ramesh"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Status badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;