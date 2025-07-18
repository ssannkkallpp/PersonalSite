import React from 'react';
import { Code2 } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-100/60 via-white to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <section className="w-full max-w-4xl lg:max-w-5xl mx-auto p-6 sm:p-8 lg:p-16 xl:p-24 bg-white rounded-2xl lg:rounded-3xl border border-blue-100 shadow-xl lg:shadow-2xl animate-fade-in">
        <div className="flex flex-col sm:flex-row items-center mb-8 sm:mb-10 lg:mb-14 gap-4 sm:gap-6">
          <span className="inline-flex items-center justify-center rounded-full bg-blue-50 p-4 sm:p-6 shadow-md">
            <Code2 className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-blue-600" />
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight text-center sm:text-left">My Journey</h1>
        </div>
        <div className="space-y-6 sm:space-y-8 lg:space-y-14 text-gray-900 leading-relaxed text-base sm:text-lg lg:text-xl xl:text-2xl font-normal">
          <p>
            I graduated from <span className="font-semibold text-blue-700">UMass Amherst</span> in 2022 with a degree in Computer Science. I've since spent three years working in the microsegmentation space developing the <span className="font-semibold text-blue-700">XShield platform</span> at ColorTokens Inc, providing security features for OT and Cloud workloads.
          </p>
          <p>
            Currently, I'm at <span className="font-semibold text-blue-700">New York University</span> pursuing a Master's in Computer Science with a focus on building scalable systems with modern AI engineering techniques.
          </p>
        </div>
      </section>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;