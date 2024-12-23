import React from 'react';
import Carousel from './Carousel'; // Importing the Carousel component to display project images
import OtherProjects from './OtherProjects'; // Importing OtherProjects component to showcase related projects

function ProjectDetails({ project, otherProjects }) { // Functional component accepting 'project' and 'otherProjects' as props
  return (
    <div className="bg-bg-light text-text-dark"> {/* Main wrapper with light background and dark text color */}
      {/* Project Header */}
      <header className="container mx-auto py-10"> {/* Header section with padding */}
        <h1 className="text-4xl font-bold text-center">{project.name}</h1> {/* Project name as a large bold heading */}
        <p className="text-center text-lg mt-4">{project.description}</p> {/* Project description below the heading */}
      </header>

      {/* Carousel for Images */}
      <section className="container mx-auto mb-12"> {/* Section wrapper for the carousel */}
        <Carousel images={project.images} /> {/* Rendering the Carousel component with project images */}
      </section>

      {/* Project Content */}
      <section className="container mx-auto px-4 mb-16"> {/* Section for project details with horizontal padding */}
        <h2 className="text-3xl font-semibold mb-4">About this Project</h2> {/* Subheading for project details */}
        <p>{project.content}</p> {/* Detailed content about the project */}
      </section>

      {/* Other Projects */}
      <OtherProjects otherProjects={otherProjects} /> {/* Rendering the OtherProjects component to showcase related projects */}
    </div>
  );
}

export default ProjectDetails; // Exporting the ProjectDetails component for use in other parts of the application
