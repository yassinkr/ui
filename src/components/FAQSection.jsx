// FAQSection.jsx
"use client"; // Indicates that this component uses client-side rendering
import React, { useState } from 'react'; // Importing React and useState hook
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing icons for expand/collapse functionality
import { faqs } from '../data/data'; // Importing FAQs from a data file

// Functional component for the FAQ Section
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the currently active FAQ index

  // Function to toggle the active FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // If the clicked FAQ is already active, close it; otherwise, open the clicked one
  };

  return (
    <section className='py-16'> {/* Section with padding for vertical spacing */}
      <div className='max-w-7xl mx-auto px-4 lg:px-0'> {/* Container with maximum width and center alignment */}
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-10' style={{ color: 'var(--text-dark)' }}> {/* Section heading */}
          Frequently Asked Questions
        </h2>
        <div className='space-y-4'> {/* Vertical spacing between FAQ items */}
          {faqs.map((faq, index) => ( // Mapping through the FAQ array
            <div
              key={index} // Using index as the key for each FAQ item
              className='border-b border-gray-300 py-4 cursor-pointer' // Styling for the FAQ item
              onClick={() => toggleFAQ(index)} // Click handler to toggle the FAQ
            >
              <div className='flex justify-between items-center'> {/* Flexbox for layout */}
                <h3 className='text-lg font-semibold' style={{ color: 'var(--text-dark)' }}>{faq.question}</h3> {/* Displaying the FAQ question */}
                <span> {/* Icon container */}
                  {activeIndex === index ? ( // Conditional rendering of the icon based on active index
                    <FaChevronUp className='text-main-yellow' /> // Up arrow for active FAQ
                  ) : (
                    <FaChevronDown className='text-main-yellow' /> // Down arrow for inactive FAQ
                  )}
                </span>
              </div>
              {activeIndex === index && ( // Render the answer only if the FAQ is active
                <p className='mt-4 text-text-dark'>{faq.answer}</p> // Displaying the FAQ answer
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; // Exporting the FAQSection component for use in other parts of the application
