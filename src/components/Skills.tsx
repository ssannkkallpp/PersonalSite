import React from 'react';
import { Palette, Code, Layers, Zap, Heart, Lightbulb, Target, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Development',
      skills: ['JavaScript/TypeScript', 'Python', 'React', 'Node.js', 'Java', 'Full-Stack Development'],
      color: 'from-blue-500 to-cyan-600',
      description: 'Building robust, scalable applications with modern technologies'
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: ['UI/UX Design', 'User Research', 'Prototyping', 'Design Systems', 'Visual Design', 'Accessibility'],
      color: 'from-pink-500 to-purple-600',
      description: 'Creating beautiful, intuitive experiences that users love'
    },
    {
      icon: Layers,
      title: 'Architecture',
      skills: ['System Design', 'Cloud Platforms', 'Microservices', 'Database Design', 'API Development', 'DevOps'],
      color: 'from-green-500 to-emerald-600',
      description: 'Designing scalable, maintainable system architectures'
    },
    {
      icon: Zap,
      title: 'Innovation',
      skills: ['Creative Problem Solving', 'Rapid Prototyping', 'Emerging Tech', 'AI/ML Integration', 'Performance Optimization', 'Security'],
      color: 'from-yellow-500 to-orange-600',
      description: 'Pushing boundaries with cutting-edge solutions'
    }
  ];

  const creativeTools = [
    { name: 'Figma', category: 'Design', icon: '🎨' },
    { name: 'Adobe Creative Suite', category: 'Design', icon: '🖌️' },
    { name: 'Framer', category: 'Prototyping', icon: '⚡' },
    { name: 'Blender', category: '3D', icon: '🎭' },
    { name: 'After Effects', category: 'Animation', icon: '🎬' },
    { name: 'Sketch', category: 'Design', icon: '✏️' }
  ];

  const softSkills = [
    { skill: 'Creative Thinking', icon: Lightbulb, color: 'from-yellow-400 to-orange-500' },
    { skill: 'Empathy & User Focus', icon: Heart, color: 'from-pink-400 to-red-500' },
    { skill: 'Strategic Vision', icon: Target, color: 'from-green-400 to-emerald-500' },
    { skill: 'Collaborative Leadership', icon: Sparkles, color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative overflow-hidden">
      {/* Artistic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Creative Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A unique blend of technical expertise and creative vision, 
            crafted through years of passionate learning and hands-on experience.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map(({ icon: Icon, title, skills, color, description }, index) => (
            <div
              key={title}
              className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 p-8 rounded-2xl border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">{title}</h3>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-r from-indigo-700/30 to-purple-700/30 px-3 py-2 rounded-lg border border-pink-400/20 hover:border-pink-400/40 transition-all duration-200 group-hover:translate-x-1"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    <span className="text-gray-300 text-sm font-medium hover:text-pink-300 transition-colors duration-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Creative Tools */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Palette className="h-6 w-6 mr-3 text-pink-400" />
              Creative Tools & Software
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {creativeTools.map(({ name, category, icon }, index) => (
                <div
                  key={name}
                  className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 p-4 rounded-xl border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl mb-2">{icon}</div>
                  <h4 className="text-white font-semibold group-hover:text-pink-300 transition-colors duration-300">{name}</h4>
                  <p className="text-gray-400 text-xs">{category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Heart className="h-6 w-6 mr-3 text-purple-400" />
              Human Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map(({ skill, icon: Icon, color }, index) => (
                <div
                  key={skill}
                  className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 p-6 rounded-xl border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg group-hover:text-pink-300 transition-colors duration-300">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Creative Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/20 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <Sparkles className="h-12 w-12 text-pink-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">Continuous Learning</h4>
            <p className="text-gray-300 leading-relaxed">
              "In the rapidly evolving world of technology and design, I believe in staying curious, 
              experimenting with new tools, and always pushing the boundaries of what's possible. 
              Every project is an opportunity to learn something new and create something extraordinary."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;