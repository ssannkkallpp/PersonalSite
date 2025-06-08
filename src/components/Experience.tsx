import React from 'react';
import { Building2, Calendar, MapPin, ExternalLink, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'ColorTokens',
      position: 'Software Engineer',
      duration: '2022 - Present',
      location: 'Remote',
      description: [
        'Led the development of a feature to detect sensitive cloud access keys, credentials, and secrets using YARA and Go, resulting in a 10% increase in reported security flaws. Optimized performance to minimize additional overhead.',
        'Designed, implemented and managed a secure APT package repository and pipeline hosted on Azure, utilizing containerization and GPG key encryption. This solution streamlined Debian package distribution and ensured secure updates and patches of binaries on the XShield agentless platform, demonstrating proficiency in cloud-based data storage solutions, data security, and system optimization'
      ],
      technologies: ['Golang', 'Python', 'Azure DevOps', 'Kubernetes', 'AWS', 'Redis', 'YARA'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      company: 'Bank of America',
      position: 'Software Developer',
      duration: '2021 - 2022',
      location: 'Charlotte, NC',
      description: [
        'Developed an internal templating engine for Quartz entirely in Python, including a user-friendly UI, streamlining workflows and boosting productivity.',
        'Thrived in a collaborative team environment, contributing to a versatile set of tickets that required cross-functional coordination and teamwork. Actively engaged in brainstorming sessions, shared insights and data-driven strategies, and provided constructive feedback to the team.'
      ],
      technologies: ['Python'],
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

              <div className="mb-6">
                {/* Description */}
                <div>
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