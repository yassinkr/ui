// AboutSection.jsx
import React from 'react'; // Import React library
import { FaAward, FaUsers, FaProjectDiagram, FaHandshake } from 'react-icons/fa'; // Import icons for core values
import Image from 'next/image'; // Import Image component from Next.js for optimized image handling

// AboutSection functional component definition
const AboutSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--bg-light)' }}> {/* Section with vertical padding and light background color */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0"> {/* Container with max width, centered and horizontal padding */}
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: 'var(--text-dark)' }}>About Us</h2> {/* Main heading for the section */}
        
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center"> {/* Grid layout for two columns on medium screens and above */}
          {/* Text Section */}
          <div className="space-y-6"> {/* Vertical spacing for text content */}
            <h3 className="text-3xl font-semibold" style={{ color: 'var(--text-dark)' }}>Who We Are</h3> {/* Subheading describing the company */}
            <p className="text-gray-700"> {/* First paragraph describing the company */}
              We are a leading digital solutions provider based in Tebessa, Algeria. Our mission is to offer innovative, high-quality web and mobile solutions that transform businesses and take them to new heights. With years of experience in web development, cloud solutions, and cybersecurity, we have built a strong reputation in the industry.
            </p>
            <p className="text-gray-700"> {/* Second paragraph describing the team's approach */}
              Our team is passionate about technology and committed to delivering exceptional results for every project. We believe in working closely with our clients to understand their unique needs and tailor our services to meet them.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-96 flex items-center justify-center"> {/* Flex container for centering the image */}
            <Image
              src="/about-us.png" // Replace with the path to your image
              alt="About Us" // Alt text for the image for accessibility
              width={350} // Width of the image
              height={350} // Height of the image
            />
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16"> {/* Margin top for spacing from the previous section */}
          <h3 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--text-dark)' }}>Our Core Values</h3> {/* Subheading for core values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Grid layout for core values, responsive for different screen sizes */}
            {/* Value 1 */}
            <div className="flex flex-col items-center bg--card-white p-6 rounded-lg shadow-md text-center hover:bg-card-hover transition duration-200"> {/* Flex container for each core value with hover effect */}
              <FaAward className="text-5xl" style={{ color: 'var(--main-yellow)' }} /> {/* Excellence icon */}
              <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>Excellence</h4> {/* Title for the core value */}
              <p className="text-gray-700"> {/* Description of the core value */}
                We are committed to delivering high-quality services and solutions that exceed client expectations.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="flex flex-col items-center bg--card-white p-6 rounded-lg shadow-md text-center hover:bg-card-hover transition duration-200"> {/* Flex container for teamwork core value */}
              <FaUsers className="text-5xl" style={{ color: 'var(--main-yellow)' }} /> {/* Teamwork icon */}
              <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>Teamwork</h4> {/* Title for teamwork core value */}
              <p className="text-gray-700"> {/* Description of teamwork value */}
                Collaboration and open communication are at the heart of our company culture.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="flex flex-col items-center bg--card-white p-6 rounded-lg shadow-md text-center hover:bg-card-hover transition duration-200"> {/* Flex container for innovation core value */}
              <FaProjectDiagram className="text-5xl" style={{ color: 'var(--main-yellow)' }} /> {/* Innovation icon */}
              <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>Innovation</h4> {/* Title for innovation core value */}
              <p className="text-gray-700"> {/* Description of innovation value */}
                We embrace the latest technologies to deliver cutting-edge solutions for our clients.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="flex flex-col items-center bg--card-white p-6 rounded-lg shadow-md text-center hover:bg-card-hover transition duration-200"> {/* Flex container for integrity core value */}
              <FaHandshake className="text-5xl" style={{ color: 'var(--main-yellow)' }} /> {/* Integrity icon */}
              <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>Integrity</h4> {/* Title for integrity core value */}
              <p className="text-gray-700"> {/* Description of integrity value */}
                We believe in transparency and honesty in every aspect of our work and relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; // Export the AboutSection component for use in other parts of the application
