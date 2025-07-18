import React from 'react';
import { Github, Linkedin, Mail, Download, User } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sankalp_Ramesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Half - Text Content */}
          <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="w-full max-w-lg">
              <div className="bg-white border-2 border-black p-8 sm:p-12">
                {/* Content */}
                <div className="space-y-6">
                  <div className="bg-black text-white px-4 py-2 inline-block text-sm font-mono uppercase tracking-wider">
                    Software Engineer
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black font-mono">
                    SANKALP RAMESH
                  </h1>
                  
                  <p className="text-base sm:text-lg text-black font-mono leading-relaxed">
                    Building software solutions with 3+ years experience at Bank of America and ColorTokens.
                  </p>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button 
                      onClick={handleDownload}
                      className="bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black transition-colors duration-200 font-mono uppercase tracking-wider text-sm w-full sm:w-auto"
                    >
                      Download Resume
                    </button>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center sm:justify-start space-x-4 pt-4">
                    {[
                      { icon: Github, href: '#', label: 'GitHub' },
                      { icon: Linkedin, href: '#', label: 'LinkedIn' },
                      { icon: Mail, href: '#contact', label: 'Email' }
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        className="p-2 border border-black hover:bg-black hover:text-white transition-colors duration-200"
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Half - Image */}
          <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/image.png)'
            }}
          >
            {/* Optional overlay for better visual separation */}
            <div className="w-full h-full bg-black bg-opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;