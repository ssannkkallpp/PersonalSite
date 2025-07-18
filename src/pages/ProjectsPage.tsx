import React from 'react';
import { ExternalLink, Calendar, Code } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Chase Game',
      description: 'A web-based game to traverse a grid while avoiding an adversarial red dot.',
      tech: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
      year: '2023',
      image: '/chase-home.png',
      liveLink: 'https://chase-game-self.vercel.app/'
    },
    {
      title: 'COVID-19 Visualizer',
      description: 'A website that visualizes the spread of COVID-19 in a given area. It uses a simulation to model the spread of the virus and displays the results in a visual format. It also allows you to see the number of cases in a given area over time.',
      tech: ['JavaScript', 'D3.js', 'Data Visualization'],
      year: '2022',
      image: '/covid-site-picture.png',
      liveLink: 'https://ssannkkallpp.github.io/covidsimulator/visualize'
    },
    {
      title: 'EULEX',
      description: 'A website to help non-native English speakers learn to read in English. It uses a combination of the syllable method and the sight word method to help users learn to read.',
      tech: ['JavaScript', 'Educational Tech', 'Web APIs'],
      year: '2021',
      image: '/Eulex-pic.png',
      liveLink: 'https://ssannkkallpp.github.io/eulex/vMask.html'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,black_1px,transparent_1px),linear-gradient(black_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="bg-black text-white px-4 py-2 inline-block mb-6 font-mono text-sm uppercase tracking-wider">
            Portfolio
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-6">FEATURED PROJECTS</h1>
          <p className="text-lg font-mono max-w-2xl mx-auto">
            Selected work demonstrating technical skills and problem-solving approach.
          </p>
          
          {/* Project counter */}
          <div className="mt-8 border-2 border-black bg-white inline-block px-4 py-2">
            <span className="font-mono text-sm">[{projects.length.toString().padStart(2, '0')} PROJECTS]</span>
          </div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white border-2 border-black overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className={`h-80 border-b-2 lg:border-b-0 ${index % 2 === 0 ? 'lg:border-r-2' : 'lg:border-l-2'} border-black relative overflow-hidden`}>
                    {/* Image overlay effect */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover bg-gray-50 group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Project number overlay */}
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-mono text-xs z-20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-6 sm:p-8">
                  {/* Year badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gray-200 text-black px-3 py-1 font-mono text-xs uppercase tracking-wider border border-black">
                      {project.year}
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono text-xs">PROJECT {String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold font-mono mb-4 uppercase">{project.title}</h2>
                  <p className="text-base font-mono mb-6 leading-relaxed">{project.description}</p>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Code className="h-4 w-4 mr-2" />
                      <span className="font-mono text-sm uppercase tracking-wider">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border border-black px-2 py-1 font-mono text-xs bg-gray-100 hover:bg-black hover:text-white transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black transition-colors duration-200 font-mono uppercase tracking-wider text-sm inline-flex items-center space-x-2 group"
                    >
                      <span>View Live</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                    
                    {/* Status indicator */}
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 border border-black"></div>
                      <span className="font-mono text-xs uppercase">Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="border-2 border-black bg-white p-6 inline-block">
            <p className="font-mono text-sm mb-2">MORE PROJECTS COMING SOON</p>
            <div className="flex justify-center space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-black animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

                  {/* Project Link */}
                  <div className="flex items-center space-x-4">
export default ProjectsPage; 