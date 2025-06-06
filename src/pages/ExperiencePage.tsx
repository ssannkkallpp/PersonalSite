import React from 'react';
import { Building2, Calendar, MapPin, Code, Zap } from 'lucide-react';

const ExperiencePage = () => {
  const experiences = [
    {
      company: 'ColorTokens',
      position: 'Software Engineer',
      duration: '2022 - Present',
      location: 'Remote',
      description: [
        'Architected and developed next-gen cybersecurity solutions for enterprise clients',
        'Implemented zero-trust security frameworks and micro-segmentation technologies',
        'Built scalable microservices handling 10M+ security events daily',
        'Optimized threat detection algorithms resulting in 40% faster response times'
      ],
      technologies: ['Python', 'Java', 'React', 'Docker', 'Kubernetes', 'AWS', 'Redis'],
      achievements: ['40% performance improvement', '99.9% uptime', 'Zero security incidents'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      company: 'Bank of America',
      position: 'Software Developer',
      duration: '2021 - 2022',
      location: 'Charlotte, NC',
      description: [
        'Developed critical financial applications serving 66M+ customers globally',
        'Built automated testing frameworks reducing deployment time by 60%',
        'Optimized high-frequency trading systems with microsecond latency requirements',
        'Led code reviews and mentored 5+ junior developers'
      ],
      technologies: ['Java', 'Spring Boot', 'Oracle DB', 'Jenkins', 'Git', 'Kafka'],
      achievements: ['60% faster deployments', '$2M+ cost savings', '5 developers mentored'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building impactful solutions at leading technology companies, 
              from fintech giants to cybersecurity innovators.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 bottom-0 w-0.5 h-12 bg-blue-600 transform translate-y-full"></div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{exp.company}</h2>
                      <h3 className="text-xl text-blue-600 font-semibold">{exp.position}</h3>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                  {/* Description */}
                  <div className="lg:col-span-2">
                    <h4 className="text-gray-900 font-semibold mb-3 flex items-center">
                      <Code className="h-4 w-4 mr-2 text-blue-600" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-3 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-blue-600" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <span className="text-blue-700 text-sm font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-gray-900 font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-full hover:border-blue-400 hover:text-blue-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Summary */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Highlights</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">66M+</div>
                  <div className="text-gray-700">Users Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
                  <div className="text-gray-700">Events Processed Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;