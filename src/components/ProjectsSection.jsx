import ProjectItemCard from './ProjectItem'; // Importing the ProjectItemCard component for displaying individual projects

const ProjectsSection = ({ projects }) => { // Functional component accepting a 'projects' prop
  console.log(projects);
  return (
    <section className="bg-bg-light py-10"> {/* Main section with background color and vertical padding */}
      <div className="container mx-auto px-4"> {/* Container for center alignment and padding */}
        <h2 className="text-3xl font-bold text-center mb-8 text-text-dark">Our Projects</h2> {/* Section title with styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Grid layout for project cards */}
          {projects.map((project) => ( // Mapping through the projects array to create project cards
            <ProjectItemCard key={project._id} project={project} /> // Rendering a ProjectItemCard for each project
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; // Exporting the ProjectsSection component for use in other parts of the application
