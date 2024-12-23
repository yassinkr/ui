// components/ContactSection.jsx
'use client'; // Indicates that this component uses client-side rendering
import React from "react"; // Importing React library
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing icons for contact info
import { contactInfo } from '../data/data'; // Importing contact information from the data file

// Functional component for the Contact Section
const ContactSection = () => {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Handle form submission logic (e.g., send data to an API)
    console.log("Form submitted!"); // For demonstration purposes
  };

  return (
    <section className="py-16 bg-bg-light"> {/* Section with padding and background color */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0"> {/* Container with max width and center alignment */}
        <h2 className="text-4xl font-bold text-center text-text-dark mb-10"> {/* Section heading */}
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-10"> {/* Grid layout for contact information */}
          {/* Contact Information */}
          {contactInfo.map((info) => ( // Mapping through contact info array
            <div key={info.type} className="bg-card-white p-6 rounded-lg shadow-lg flex items-start"> {/* Card for each info type */}
              {info.icon} {/* Displaying the corresponding icon */}
              <div> {/* Container for title and detail */}
                <h4 className="text-xl font-bold text-text-dark">{info.title}</h4> {/* Title of the contact info */}
                <p className="text-gray-600">{info.detail}</p> {/* Detail of the contact info */}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-card-white p-8 rounded-lg shadow-lg"> {/* Container for the contact form */}
          <h3 className="text-2xl font-bold text-text-dark mb-6"> {/* Form heading */}
            We'd Love to Hear from You!
          </h3>
          <form onSubmit={handleSubmit}> {/* Form with submit handler */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> {/* Grid layout for form fields */}
              <div> {/* Name input field */}
                <label htmlFor="name" className="sr-only">Your Name</label> {/* Screen reader label for accessibility */}
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name" // Placeholder text
                  className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-main-yellow" // Input styling
                  required // Marks the field as required
                />
              </div>
              <div> {/* Email input field */}
                <label htmlFor="email" className="sr-only">Your Email</label> {/* Screen reader label for accessibility */}
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email" // Placeholder text
                  className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-main-yellow" // Input styling
                  required // Marks the field as required
                />
              </div>
            </div>
            <div> {/* Message textarea */}
              <label htmlFor="message" className="sr-only">Your Message</label> {/* Screen reader label for accessibility */}
              <textarea
                id="message"
                placeholder="Your Message" // Placeholder text
                rows="4" // Number of visible text lines
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-main-yellow w-full mb-4" // Textarea styling
                required // Marks the field as required
              ></textarea>
            </div>
            <button
              type="submit" // Button to submit the form
              className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300" // Button styling
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; // Exporting the ContactSection component for use in other parts of the application
