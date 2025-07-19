import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, User } from 'lucide-react';

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
    <div className="space-y-6 sm:space-y-8 lg:space-y-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black font-mono">
        SANKALP RAMESH
      </h1>
      
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black font-mono leading-relaxed">
        Software Engineer
      </p>

      {/* About me link */}
      <button 
        onClick={() => setShowAbout(!showAbout)}
        className="text-base sm:text-lg lg:text-xl font-mono text-gray-600 hover:text-black transition-colors duration-200 underline"
      >
        About me
      </button>

      {/* Action Button */}
      <div className="pt-4 sm:pt-6 lg:pt-8">
        <button 
          onClick={handleDownload}
          className="bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 lg:py-5 border-2 border-black hover:bg-white hover:text-black transition-colors duration-200 font-mono uppercase tracking-wider text-sm sm:text-base lg:text-xl w-full sm:w-auto"
        >
          Download Resume
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6 lg:space-x-8 pt-4 sm:pt-6 lg:pt-8">
        {[
          { icon: Github, href: 'https://github.com/ssannkkallpp', label: 'GitHub' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/sramesh1223/', label: 'LinkedIn' },
          { icon: Mail, href: '#contact', label: 'Email' }
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="p-2 sm:p-3 lg:p-4 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200"
            aria-label={label}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
          </a>
        ))}
      </div>
    </div>
  );

  const AboutContent = () => (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-black font-mono">MY JOURNEY</h2>
        <button 
          onClick={() => setShowAbout(false)}
          className="text-gray-600 font-mono text-xs sm:text-sm hover:text-black transition-colors duration-200 underline"
        >
          Back
        </button>
      </div>
      
      <div className="space-y-4 sm:space-y-6 text-black font-mono leading-relaxed">
        <div className="border-l-4 border-black pl-4 sm:pl-6">
          <p className="text-sm sm:text-base lg:text-lg">
            Most recently, spent three years developing microsegmentation solutions at{' '}
            <a 
              href="https://colortokens.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-semibold"
            >
              ColorTokens Inc
            </a>
            , working on the XShield platform for OT and Cloud workloads. Prior to that, I also interned at Bank of America as a Global Technology Analyst.
          </p>
        </div>
        
        <div className="border-l-4 border-black pl-4 sm:pl-6">
          <p className="text-sm sm:text-base lg:text-lg">
            Currently pursuing a Master's in Computer Science at New York University, focusing on building scalable systems. I'm also contributing to the{' '}
            <a 
              href="https://github.com/Lind-Project/lind-wasm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-semibold"
            >
              lind-wasm
            </a>
            {' '}project at the Secure Systems Lab.
          </p>
        </div>
      </div>
      
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-black">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <div className="border border-black p-2 sm:p-3 lg:p-4 text-center">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold font-mono">3+</div>
            <div className="text-xs sm:text-sm font-mono uppercase">Years Experience</div>
          </div>
          <div className="border border-black p-2 sm:p-3 lg:p-4 text-center">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold font-mono">2</div>
            <div className="text-xs sm:text-sm font-mono uppercase">Major Companies</div>
          </div>
          <div className="border border-black p-2 sm:p-3 lg:p-4 text-center">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold font-mono">NYU</div>
            <div className="text-xs sm:text-sm font-mono uppercase">Current Student</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Half - Text Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-100 py-8 lg:py-0">
        <div className="w-full max-w-2xl">
          <div className="bg-white border-2 border-black p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 animate-slide-up min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
            {/* Content */}
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

      {/* Right Half - Image */}
      <div 
        className="w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:min-h-screen bg-cover bg-center bg-no-repeat animate-slide-down"
        style={{
          backgroundImage: 'url(/image.png)'
        }}
      >
        {/* Optional overlay for better visual separation */}
        <div className="w-full h-full bg-black bg-opacity-10"></div>
      </div>
    </section>
  );
};

export default Hero;