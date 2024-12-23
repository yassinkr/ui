// LocationSection.jsx
import React from 'react'; // Import React library
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons for location, phone, and email

// LocationSection functional component definition
const LocationSection = () => {
  return (
    <section className='py-16'> {/* Section with vertical padding */}
      <div className='max-w-7xl mx-auto px-4 lg:px-0'> {/* Container with max width and horizontal padding */}
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-10' style={{ color: 'var(--text-dark)' }}>
          Visit Us in Tebessa, Algeria {/* Main heading for the section */}
        </h2>
        <div className='grid md:grid-cols-2 gap-8'> {/* Grid layout for two columns on medium screens and above */}
          {/* Contact Details */}
          <div className='flex flex-col justify-center'> {/* Flex container for vertical layout */}
            <div className='mb-8'> {/* Margin bottom for spacing */}
              <h3 className='text-2xl font-semibold mb-4' style={{ color: 'var(--text-dark)' }}>
                Our Location {/* Subheading for the location section */}
              </h3>
              <p className='text-lg text-text-dark'> {/* Description of the location */}
                We're located in the beautiful city of Tebessa, Algeria, offering top-notch services to clients both locally and internationally.
              </p>
            </div>
            <div className='space-y-4'> {/* Vertical spacing between contact details */}
              <div className='flex items-center text-lg'> {/* Flex container for each contact detail */}
                <FaMapMarkerAlt className='text-main-yellow text-2xl mr-4' /> {/* Location icon */}
                <span>Cheikh Laarbi Tebessi High School, Tebessa, Algeria</span> {/* Location address */}
              </div>
              <div className='flex items-center text-lg'> {/* Flex container for phone detail */}
                <FaPhoneAlt className='text-main-yellow text-2xl mr-4' /> {/* Phone icon */}
                <span>+213 123 456 789</span> {/* Phone number */}
              </div>
              <div className='flex items-center text-lg'> {/* Flex container for email detail */}
                <FaEnvelope className='text-main-yellow text-2xl mr-4' /> {/* Email icon */}
                <span>contact@yourbusiness.com</span> {/* Email address */}
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className='rounded-lg shadow-lg overflow-hidden'> {/* Container for the map with rounded corners and shadow */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12687.098545876862!2d8.117387525154528!3d35.405515785383554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1944a42b75999%3A0xd66ac39d4db37439!2sT%C3%A9bessa!5e0!3m2!1sen!2sdz!4v1697956745511!5m2!1sen!2sdz'
              width='100%' // Full width of the container
              height='350' // Fixed height for the map
              style={{ border: 0 }} // No border for the iframe
              allowFullScreen='' // Allow fullscreen mode for the map
              loading='lazy' // Enable lazy loading for performance
              referrerPolicy='no-referrer-when-downgrade' // Set referrer policy
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; // Export the LocationSection component for use in other parts of the application
