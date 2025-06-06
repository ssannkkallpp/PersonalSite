import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating technical expertise and problem-solving abilities.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  {/* Project Image */}
                  <div className="md:w-1/2">
                    <div className="relative h-64 md:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
                    <p className="text-gray-600 mb-6">{project.description}</p>

                    {/* Project Link */}
                    <div className="flex space-x-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
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