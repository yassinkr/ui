// WhyChooseUs.jsx
import React from 'react'; // Importing React library
import { FaCheckCircle, FaStar, FaHandsHelping, FaUserShield } from 'react-icons/fa'; // Importing icons
import { reasons } from '../data/data'; // Importing reasons data from external file

const WhyChooseUs = () => {
    return (
        <section className='py-16'> {/* Main section with vertical padding */}
            <div className='max-w-7xl mx-auto px-4 lg:px-0'> {/* Container for centering content */}
                <h2 className='text-3xl md:text-5xl font-bold text-center mb-10' style={{ color: 'var(--text-dark)' }}>
                    Why Choose Us? {/* Heading for the section */}
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'> {/* Responsive grid layout for reasons */}
                    {reasons.map(reason => ( // Mapping over reasons data to display each reason
                        <div 
                            key={reason.id} // Unique key for each reason card
                            className='bg-card-color p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105' // Card styling
                            style={{ backgroundColor: 'var(--card-color)' }} // Background color from CSS variable
                        >
                            <div className='flex justify-center mb-4'> {/* Flex container for icon alignment */}
                                {reason.icon} {/* Displaying the reason icon */}
                            </div>
                            <h3 className='text-xl font-semibold mb-2 text-center' style={{ color: 'var(--text-dark)' }}>
                                {reason.title} {/* Displaying the reason title */}
                            </h3>
                            <p className='text-text-dark text-center'>{reason.description}</p> {/* Displaying the reason description */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs; // Exporting the component for use in other parts of the application
