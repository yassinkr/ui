// ServicesOverview.jsx
import Link from "next/link";
import React from "react";
// Importing icons from react-icons library
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import Image from "next/image"; // Image component from Next.js

const ServicesOverview = ({ services }) => {
  return (
    <section className="py-16"> {/* Section for overall layout and padding */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0"> {/* Container for centering and responsiveness */}
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-10" // Header styling
          style={{ color: "var(--text-dark)" }} // Using CSS variable for color
        >
          Our Services
        </h2>
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid layout for services */}
            {services ? (
              services.map((service) => ( // Mapping over the services array
                <div
                  key={service._id} // Unique key for each service item
                  className="bg-card-color text-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105" // Styling for each service card
                  style={{ backgroundColor: "var(--card-color)" }} // Background color using CSS variable
                >
                  <img
                    src={service.imageUrl} // Service image source
                    alt={service.title} // Alt text for accessibility
                    className="w-full h-48 object-cover" // Image styling
                  />
                  <div className="p-6"> {/* Padding around the content inside the card */}
                    <h3
                      className="text-xl font-semibold mb-2" // Service title styling
                      style={{ color: "var(--text-dark)" }} // Title color using CSS variable
                    >
                      {service.title}
                    </h3>
                    <p className="text-text-dark mb-4 line-clamp-1"> {/* Description with text styling */}
                      {service.description}
                    </p>
                    <div className="flex flex-wrap justify-center"> {/* Tags section */}
                      {service.tags && // Checking if tags exist
                        service.tags.slice(0, 2).map((tag, index) => ( // Limiting to first 2 tags
                          <span
                            key={index} // Unique key for each tag
                            className="bg-main-yellow text-black py-1 px-3 rounded-full mr-2 mb-2 shadow-md" // Tag styling
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                    <div className="flex justify-center gap-3 mt-3 "> {/* Button section for links */}
                      <Link href={service.link}> {/* Link to service details */}
                        <span
                          className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300" // Button styling
                          aria-label={`Read more about ${service.title}`} // Accessibility label
                        >
                          Read More
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-text-dark flex justify-center items-center h-full font-bold"> {/* Fallback message when no services are found */}
                No services found
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview; // Exporting the component for use in other parts of the application
