// pages/services/[name].jsx
"use client"; // Indicates that this component is a client-side component
import React from "react"; // Importing React
import Image from "next/image"; // Importing Image component from Next.js for optimized images
import Link from "next/link"; // Importing Link component from Next.js for client-side navigation

const ServiceItem = ({ service, relatedProjects }) => {
  return (
    <section className="py-16 bg-bg-light"> {/* Main section with padding and background color */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0"> {/* Container for centering content */}
        
        {/* Title of the Service */}
        <h2 className="text-4xl font-bold text-center mb-10 text-text-dark">
          {service.title}
        </h2>

        {/* Flex Container for Image and Description */}
        <div className="flex flex-col lg:flex-row mb-8">
          
          {/* Service Image */}
          <div className="relative w-full lg:w-1/2 h-96 mb-4 lg:mb-0 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={service.imageUrl} // Image URL for the service
              alt={service.title} // Alt text for accessibility
              layout="fill" // Ensures the image fills the container
              objectFit="cover" // Maintains aspect ratio while covering the area
              className="rounded-lg" // Applies rounded corners to the image
            />
          </div>

          {/* Service Description */}
          <div className="lg:w-1/2 lg:pl-6"> {/* Flexbox for responsive layout */}
            <p className="text-lg mb-4 text-text-dark">{service.description}</p> {/* Service description */}
            <h4 className="text-xl font-bold mb-2 text-text-dark">Tags:</h4> {/* Tags section header */}
            <div className="flex flex-wrap"> {/* Flexbox for tags */}
              {service.tags && // Check if tags exist
                service.tags.map((tag, index) => ( // Map over tags array
                  <span
                    key={index} // Unique key for each tag
                    className="bg-main-yellow text-black py-1 px-3 rounded-full mr-2 mb-2 shadow-md" // Tag styling
                  >
                    {tag} {/* Displaying the tag */}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        <div className="mt-12 mb-8">
          <h3 className="text-3xl font-bold text-text-dark mb-6 text-center">
            Related Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid for projects */}
            {/* Project Cards */}
            {relatedProjects && // Check if related projects exist
              relatedProjects.map((project, index) => ( // Map over related projects array
                <div
                  key={index} // Unique key for each project
                  className="bg-bg-light p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-80 h-96 flex flex-col justify-between"
                >
                  <div className="flex justify-center">
                    <Image
                      src={project.mainImage} // Image URL for the project
                      alt={project.name} // Alt text for accessibility
                      width={300} // Fixed width for the image
                      height={200} // Fixed height for the image
                      className="rounded-md mb-2 transition-transform duration-300 hover:scale-105 object-cover w-full h-48" // Styling for the image
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-text-dark mb-2 text-center">
                    {project.name} {/* Project name */}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 text-center line-clamp-2">
                    {project.description} {/* Project description */}
                  </p>
                  <Link
                    href={"/projects/" + project._id} // Link to the project details
                    className="flex justify-center"
                  >
                    <button className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                      View Project {/* Button to view the project */}
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-card-white p-6 rounded-lg shadow-lg mt-10">
          <h3 className="text-3xl font-bold mb-4 text-text-dark">
            Get in Touch
          </h3>
          <p className="text-lg text-text-dark mb-4">
            Interested in our {service.title.toLowerCase()} services? Contact us
            today to discuss how we can help your business grow.
          </p>
          <div className="mt-6 text-center">
            <Link href="/contact">
              <button className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300 shadow-md">
                Contact Us {/* Button to contact the service provider */}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceItem; // Exporting the ServiceItem component for use in other parts of the application
