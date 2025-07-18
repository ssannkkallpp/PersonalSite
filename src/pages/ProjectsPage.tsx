import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Chase Game',
      description: 'A web-based game to traverse a grid while avoiding an adversarial red dot.',
      image: '/chase-home.png',
      liveLink: 'https://chase-game-self.vercel.app/'
    },
    {
      title: 'COVID-19 Visualizer',
      description: 'A website that visualizes the spread of COVID-19 in a given area. It uses a simulation to model the spread of the virus and displays the results in a visual format. It also allows you to see the number of cases in a given area over time.',
      image: '/covid-site-picture.png',
      liveLink: 'https://ssannkkallpp.github.io/covidsimulator/visualize'
    },
    {
      title: 'EULEX',
      description: 'A website to help non-native English speakers learn to read in English. It uses a combination of the syllable method and the sight word method to help users learn to read.',
      image: '/Eulex-pic.png',
      liveLink: 'https://ssannkkallpp.github.io/eulex/vMask.html'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-6">FEATURED PROJECTS</h1>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white border-2 border-black overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="h-64 lg:h-80 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-gray-50"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-6 sm:p-8">
                  <h2 className="text-2xl lg:text-3xl font-bold font-mono mb-4 uppercase">{project.title}</h2>
                  <p className="text-base font-mono mb-6 leading-relaxed">{project.description}</p>

                  {/* Project Link */}
                  <div>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black transition-colors duration-200 font-mono uppercase tracking-wider text-sm inline-block"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 