import React from 'react';
import { Code2 } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-100/60 via-white to-blue-50 flex items-center justify-center">
      <section className="w-full max-w-5xl mx-auto p-16 sm:p-24 bg-white rounded-3xl border border-blue-100 shadow-2xl animate-fade-in">
        <div className="flex items-center mb-14 gap-6">
          <span className="inline-flex items-center justify-center rounded-full bg-blue-50 p-6 shadow-md">
            <Code2 className="h-16 w-16 text-blue-600" />
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">My Journey</h1>
        </div>
        <div className="space-y-14 text-gray-800 leading-relaxed text-3xl">
          <p>
            I graduated from <span className="font-extrabold text-blue-700">UMass Amherst</span> in 2022 with a degree in Computer Science. I've since spent three years working in the microsegmentation space developing the <span className="font-extrabold text-blue-700">XShield platform</span> at ColorTokens Inc, providing security features for OT and Cloud workloads.
          </p>
          <p>
            Currently, I'm at <span className="font-extrabold text-blue-700">New York University</span> pursuing a Master's in Computer Science with a focus on building scalable systems with modern AI engineering techniques.
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