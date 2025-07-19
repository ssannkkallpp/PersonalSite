import React from 'react';
import { Heart, Lightbulb, Target, Users, Code2, Star, Building2, Calendar } from 'lucide-react';

const About = () => {
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

  const experience = [
    {
      company: 'ColorTokens',
      position: 'Software Engineer',
      duration: '2022 - Present',
      description: 'Developing next-generation cybersecurity solutions and zero-trust security frameworks for enterprise clients.',
      achievements: ['Built scalable microservices', 'Optimized threat detection algorithms', 'Improved system performance by 40%']
    },
    {
      company: 'Bank of America',
      position: 'Software Developer',
      duration: '2021 - 2022',
      description: 'Developed critical financial applications serving millions of customers globally.',
      achievements: ['Reduced deployment time by 60%', 'Led code reviews', 'Mentored junior developers']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Software Engineer with a passion for NBA storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 animate-slide-up">
              <div className="flex items-center mb-6">
                <Code2 className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I graduated from UMass Amherst in 2022 with a degree in Computer Science. I've since spent three years working 
                  in the microsegmentation space developing the XShield platform at ColorTokens Inc providing security features for OT and Cloud workloads. 
                </p>
                <p>
                  Currently, I'm at New York University pursuing a Master's in Computer Science and contributing to the{' '}
                  <a 
                    href="https://github.com/Lind-Project/lind-wasm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    lind-wasm
                  </a>{' '}
                  project at the Secure Systems Lab. 
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Star className="h-6 w-6 mr-3 text-blue-600" />
              What Drives Me
            </h3>
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.company} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{exp.company}</h4>
                      <h5 className="text-lg text-blue-600 font-semibold">{exp.position}</h5>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                <div>
                  <h6 className="text-gray-900 font-semibold mb-2">Key Achievements:</h6>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">My Philosophy</h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              "Great software is built by understanding the problem deeply, choosing the right tools, 
              and never compromising on quality. Every line of code is an opportunity to create 
              something that makes a difference."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;