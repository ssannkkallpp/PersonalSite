import React from 'react';
import { Building2, Calendar, MapPin, ExternalLink, Code, Zap } from 'lucide-react';

const Experience = () => {
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
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building impactful solutions at leading technology companies, 
            from fintech giants to cybersecurity innovators.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600/50 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm group"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 bottom-0 w-0.5 h-12 bg-gradient-to-b from-cyan-400 to-purple-500 transform translate-y-full"></div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{exp.company}</h3>
                    <h4 className="text-xl text-cyan-400 font-semibold">{exp.position}</h4>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
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
                  <h5 className="text-white font-semibold mb-3 flex items-center">
                    <Code className="h-4 w-4 mr-2 text-cyan-400" />
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="text-white font-semibold mb-3 flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-purple-400" />
                    Key Achievements
                  </h5>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-lg p-3">
                        <span className="text-cyan-300 text-sm font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="text-white font-semibold mb-3">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-600 border border-cyan-400/30 text-cyan-300 text-sm font-medium rounded-full hover:border-cyan-400/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;