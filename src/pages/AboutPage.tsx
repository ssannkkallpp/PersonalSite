import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-12">
        <div className="bg-white border-2 border-black p-8 sm:p-12">
          <div className="text-center mb-12">
            <div className="bg-black text-white px-4 py-2 inline-block mb-6 font-mono text-sm uppercase tracking-wider">
              About Me
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-8">MY JOURNEY</h1>
          </div>
          
          <div className="space-y-8 text-black font-mono leading-relaxed">
            <div className="border-l-4 border-black pl-6">
              <h2 className="text-xl font-bold mb-4 uppercase">Education & Early Career</h2>
              <p className="text-lg">
                Graduated from UMass Amherst in 2022 with a degree in Computer Science. Started my career developing microsegmentation solutions at ColorTokens Inc, working on the XShield platform for OT and Cloud workloads.
              </p>
            </div>
            
            <div className="border-l-4 border-black pl-6">
              <h2 className="text-xl font-bold mb-4 uppercase">Current Focus</h2>
              <p className="text-lg">
                Currently pursuing a Master's in Computer Science at New York University, focusing on building scalable systems with modern AI engineering techniques.
              </p>
            </div>
            
            <div className="border-l-4 border-black pl-6">
              <h2 className="text-xl font-bold mb-4 uppercase">Beyond Code</h2>
              <p className="text-lg">
                Passionate NBA fan and Lakers supporter. Interested in sports storytelling and the evolution of modern basketball. I write about the NBA and the art of storytelling in sports media.
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t-2 border-black text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border border-black p-4">
                <div className="text-2xl font-bold font-mono">3+</div>
                <div className="text-sm font-mono uppercase">Years Experience</div>
              </div>
              <div className="border border-black p-4">
                <div className="text-2xl font-bold font-mono">2</div>
                <div className="text-sm font-mono uppercase">Major Companies</div>
              </div>
              <div className="border border-black p-4">
                <div className="text-2xl font-bold font-mono">NYU</div>
                <div className="text-sm font-mono uppercase">Current Student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;