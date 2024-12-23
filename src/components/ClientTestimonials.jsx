// ClientTestimonials.jsx
import React from 'react'; // Importing React library
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; // Importing quote icons from React Icons
import { testimonials } from '../data/data'; // Importing testimonials data from the data file

// Functional component to display client testimonials
const ClientTestimonials = () => {
    return (
        <section className='py-16'> {/* Section with vertical padding */}
            <div className='max-w-7xl mx-auto px-4 lg:px-0'> {/* Container with max width and center alignment */}
                <h2 className='text-3xl md:text-5xl font-bold text-center mb-10' style={{ color: 'var(--text-dark)' }}>
                    What Our Clients Say {/* Section heading */}
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'> {/* Grid layout for testimonials */}
                    {testimonials.map(testimonial => ( // Mapping through testimonials array
                        <div 
                            key={testimonial.id} // Unique key for each testimonial based on its id
                            className='bg-card-color p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105' // Styling for each testimonial card
                            style={{ backgroundColor: 'var(--card-color)' }} // Setting the background color using a CSS variable
                        >
                            <div className='flex justify-center mb-4'> {/* Flex container for image alignment */}
                                <img
                                    src={testimonial.image} // Image source from testimonial data
                                    alt={testimonial.name} // Alt text for accessibility
                                    className='w-16 h-16 rounded-full object-cover shadow-md' // Styling for the image
                                />
                            </div>
                            <div className='flex justify-center mb-4'> {/* Flex container for left quote icon */}
                                <FaQuoteLeft className='text-main-yellow text-4xl' /> {/* Left quote icon */}
                            </div>
                            <p className='text-text-dark italic mb-4'>“{testimonial.feedback}”</p> {/* Testimonial feedback */}
                            <div className='flex justify-end'> {/* Flex container for name and position alignment */}
                                <div>
                                    <h3 className='font-semibold' style={{ color: 'var(--text-dark)' }}>{testimonial.name}</h3> {/* Client name */}
                                    <p className='text-text-dark'>{testimonial.position}</p> {/* Client position */}
                                </div>
                            </div>
                            <div className='flex justify-center mt-4'> {/* Flex container for right quote icon */}
                                <FaQuoteRight className='text-main-yellow text-4xl' /> {/* Right quote icon */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials; // Exporting the ClientTestimonials component for use in other parts of the application
