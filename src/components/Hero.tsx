import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, User, Settings, Trophy, GraduationCap, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sankalp_Ramesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const HeroContent = () => (
    <div className="space-y-8">
      {/* Background "ABOUT" text */}
      <div className="absolute top-0 right-0 text-gray-100 text-8xl sm:text-9xl lg:text-[12rem] font-serif font-light opacity-20 pointer-events-none">
        ABOUT
      </div>

      {/* Name */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-black font-bold">
          <div>Sankalp Ramesh</div>
        </h1>
      </div>

      {/* Vertical line and ABOUT label */}
      <div className="flex items-start space-x-6">
        <div className="flex flex-col items-center">
          <div className="text-sm font-sans font-bold text-black uppercase tracking-wider">
            ABOUT
          </div>
          <div className="w-px h-32 bg-black mt-2"></div>
        </div>
        
        <div className="flex-1 space-y-6">
          <p className="text-lg sm:text-xl text-black leading-relaxed">
            Most recently, spent three years developing microsegmentation solutions at{' '}
            <a 
              href="https://colortokens.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ColorTokens Inc
            </a>
            , working on the XShield platform for OT and Cloud workloads. Prior to that, I also interned at Bank of America as a Global Technology Analyst.
          </p>
          
          <p className="text-lg sm:text-xl text-black leading-relaxed">
            Currently pursuing a Master's in Computer Science at New York University, focusing on building scalable systems. I'm also contributing to the{' '}
            <a 
              href="https://github.com/Lind-Project/lind-wasm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              lind-wasm
            </a>
            {' '}project at the Secure Systems Lab.
          </p>
        </div>
      </div>
    </div>
  );

  const AboutContent = () => (
    <div className="space-y-8">
      {/* Background "ABOUT" text */}
      <div className="absolute top-0 right-0 text-gray-100 text-8xl sm:text-9xl lg:text-[12rem] font-serif font-light opacity-20 pointer-events-none">
        ABOUT
      </div>

      {/* Name */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-black font-bold">
          <div>SANKALP</div>
          <div>RAMESH</div>
        </h1>
      </div>

      {/* Vertical line and ABOUT label */}
      <div className="flex items-start space-x-6">
        <div className="flex flex-col items-center">
          <div className="text-sm font-sans font-bold text-black uppercase tracking-wider">
            ABOUT
          </div>
          <div className="w-px h-32 bg-black mt-2"></div>
        </div>
        
        <div className="flex-1 space-y-6">
          <p className="text-lg sm:text-xl text-black leading-relaxed">
            Most recently, spent three years developing microsegmentation solutions at{' '}
            <a 
              href="https://colortokens.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 underline"
            >
              ColorTokens Inc
            </a>
            , working on the XShield platform for OT and Cloud workloads. Prior to that, I also interned at Bank of America as a Global Technology Analyst.
          </p>
          
          <p className="text-lg sm:text-xl text-black leading-relaxed">
            Currently pursuing a Master's in Computer Science at New York University, focusing on building scalable systems. I'm also contributing to the{' '}
            <a 
              href="https://github.com/Lind-Project/lind-wasm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 underline"
            >
              lind-wasm
            </a>
            {' '}project at the Secure Systems Lab.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16">
          
          {/* Left Side - Profile Picture and Social Links */}
          <div className="flex flex-col items-center space-y-8">
            {/* Circular Profile Picture */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-black overflow-hidden bg-white shadow-lg animate-slide-down">
              <img 
                src="/image.png" 
                alt="Sankalp Ramesh" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sramesh1223/', label: 'LINKEDIN' },
                { icon: Github, href: 'https://github.com/ssannkkallpp', label: 'GITHUB' },
                { icon: Mail, href: '#contact', label: 'GET IN TOUCH' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="px-4 py-2 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 text-sm font-sans uppercase tracking-wider"
                  aria-label={label}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <a 
                href="/projects" 
                className="text-purple-600 hover:text-purple-800 font-sans text-sm flex items-center space-x-1"
              >
                <span>Check out my projects</span>
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 lg:max-w-2xl">
            <div className="bg-white p-8 sm:p-10 lg:p-12 animate-slide-up relative">
              <div className="relative overflow-hidden">
                <div 
                  className={`transition-transform duration-500 ease-in-out ${
                    showAbout ? '-translate-x-full' : 'translate-x-0'
                  }`}
                >
                  <HeroContent />
                </div>
                <div 
                  className={`transition-transform duration-500 ease-in-out absolute top-0 left-0 w-full ${
                    showAbout ? 'translate-x-0' : 'translate-x-full'
                  }`}
                >
                  <AboutContent />
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