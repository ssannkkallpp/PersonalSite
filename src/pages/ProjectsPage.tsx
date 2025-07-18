import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Chase Game',
      description: 'A web-based game to traverse a grid while avoiding an adversarial red dot.',
      image: '/chase-home.png',
      liveLink: 'https://chase-game-self.vercel.app/',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'COVID-19 Visualizer',
      description: 'A website that visualizes the spread of COVID-19 in a given area. It uses a simulation to model the spread of the virus and displays the results in a visual format. It also allows you to see the number of cases in a given area over time.',
      image: '/covid-site-picture.png', // You'll need to add this image to your public folder
      liveLink: 'https://ssannkkallpp.github.io/covidsimulator/visualize',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'EULEX',
      description: 'A website to help non-native English speakers learn to read in English. It uses a combination of the syllable method and the sight word method to help users learn to read.',
      image: '/Eulex-pic.png', // You'll need to add this image to your public folder
      liveLink: 'https://ssannkkallpp.github.io/eulex/vMask.html',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-normal max-w-3xl mx-auto px-4">
              A showcase of my recent work, demonstrating technical expertise and problem-solving abilities.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-200 hover:shadow-xl sm:hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <div className="relative h-48 sm:h-64 lg:h-80 xl:h-96">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-1/2 p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{project.title}</h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-900 font-normal mb-4 sm:mb-6 leading-relaxed">{project.description}</p>

                    {/* Project Link */}
                    <div className="flex space-x-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-3 border border-transparent rounded-md shadow-sm text-sm sm:text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage; 