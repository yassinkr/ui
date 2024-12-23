import ProjectItemCard from "./ProjectItem"; // Importing the ProjectItemCard component to reuse for displaying project items

const OtherProjects = ({ otherProjects }) => {
  // Functional component accepting 'otherProjects' as a prop
  return (
    <section className="bg-bg-light py-10">
      {" "}
      {/* Section wrapper with light background and vertical padding */}
      <div className="container mx-auto">
        {" "}
        {/* Container for centering content */}
        <h2 className="text-3xl font-semibold text-center mb-8">
          {" "}
          {/* Main heading for the section */}
          Other Projects {/* Heading text */}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {/* Responsive grid layout for project cards */}
          {otherProjects.map(
            (
              project // Mapping through the 'otherProjects' array to render each project
            ) => (
              <ProjectItemCard key={project._id} project={project} /> // Rendering ProjectItemCard for each project with a unique key
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects; // Exporting the OtherProjects component for use in other parts of the application
