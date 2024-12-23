import Image from "next/image"; // Importing Next.js Image component for optimized images
import Link from "next/link"; // Importing Link component for client-side navigation

const ProjectItem = ({ project }) => { // Functional component accepting a 'project' prop
    return (
      <div className="bg-bg-light shadow-md rounded-lg overflow-hidden hover:bg-card-hover hover:shadow-lg transition-shadow duration-300"> {/* Main wrapper with background color, shadow, rounded corners, and hover effects */}
        <Image
          width={300} // Setting the width of the image
          height={300} // Setting the height of the image
          src={project.mainImage} // Source of the main project image
          alt={project.name} // Alt text for the image
          className="w-full h-48 object-cover" // Styling for the image to cover the container
        />
        <div className="p-5 text-center"> {/* Padding and center alignment for the text container */}
          <h3 className="text-xl font-bold text-text-dark mb-3">{project.name}</h3> {/* Project name displayed as a bold heading */}
          <p className="text-card-color mb-4 line-clamp-2">{project.description}</p> {/* Project description with line clamp for overflow handling */}
          <div className="flex justify-center"> {/* Flex container for centering the button */}
            <Link 
              href={`/projects/${project._id}`} // Link to the project's detail page using its unique ID
              className="inline-block bg-main-yellow text-text-dark font-bold px-4 py-2 rounded-full hover:bg-hover-yellow transition-colors" // Styling for the button
            >
              View Project {/* Button text */}
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ProjectItem; // Exporting the ProjectItem component for use in other parts of the application
