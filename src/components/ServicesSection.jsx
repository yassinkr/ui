// pages/services/index.jsx
import React from 'react'; // Importing React
import Link from 'next/link'; // Importing Link for client-side navigation
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud, FaShieldAlt } from 'react-icons/fa'; // Importing icons

const ServicesSection = ({ services }) => {
  return (
    <section className="py-16"> {/* Main section with vertical padding */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0"> {/* Container for centering content */}
        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: 'var(--text-dark)' }}> {/* Header for services */}
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 lg:px-0"> {/* Another container for grid layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid layout for services */}
            {services ? (
              services.map((service) => ( // If services exist, map over them
                <div
                  key={service._id} // Unique key for each service card
                  className="bg-card-color text-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105" // Card styling
                  style={{ backgroundColor: "var(--card-color)" }} // Background color from CSS variable
                >
                  <img
                    src={service.imageUrl} // Image source for service
                    alt={service.title} // Alt text for accessibility
                    className="w-full h-48 object-cover" // Image styling
                  />
                  <div className="p-6"> {/* Padding around content inside the card */}
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
                      {service.tags && // Check if tags exist
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
                No Services Found
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; // Exporting the component for use in other parts of the application
