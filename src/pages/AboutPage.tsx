import React from 'react';
import { Heart, Lightbulb, Target, Users, Code2, Star } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Every project is fueled by genuine enthusiasm and dedication to creating meaningful solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Constantly exploring new technologies and creative approaches to solve complex problems.',
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Building solutions that make a real difference in business outcomes and user experiences.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Working effectively with teams and always keeping the end user at the heart of every decision.',
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated software engineer with a passion for creating innovative solutions 
              that make a meaningful impact in the technology landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Personal Story */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-center mb-6">
                  <Code2 className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">My Journey</h2>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I believe that great software isn't just functional—it's intuitive, reliable, 
                    and makes people's lives better. My journey in computer science began with 
                    curiosity about how technology could solve real-world problems.
                  </p>
                  <p>
                    With experience at leading companies like Bank of America and ColorTokens, I've learned 
                    that the most impactful solutions come from understanding both the technical possibilities 
                    and the human needs behind every project.
                  </p>
                  <p>
                    Today, I focus on building robust, scalable applications that bridge the gap between 
                    cutting-edge technology and practical business solutions, always with an eye 
                    for quality, performance, and user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Star className="h-6 w-6 mr-3 text-blue-600" />
                What Drives Me
              </h2>
              <div className="grid gap-4">
                {values.map(({ icon: Icon, title, description }, index) => (
                  <div
                    key={title}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Philosophy</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                "Great software is built by understanding the problem deeply, choosing the right tools, 
                and never compromising on quality. Every line of code is an opportunity to create 
                something that makes a difference."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;