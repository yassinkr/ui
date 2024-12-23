// Importing useState hook from React to manage component state
import { useState } from 'react';

// Carousel functional component that accepts an array of images as props
const Carousel = ({ images }) => {
  // State to track the current slide index
  const [current, setCurrent] = useState(0);
  // Length of the images array for navigation logic
  const length = images.length;

  // Function to move to the next slide
  const nextSlide = () => {
    // If current is the last image, loop back to the first; otherwise, go to the next image
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    // If current is the first image, loop to the last; otherwise, go to the previous image
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto"> {/* Container for the carousel with centered alignment */}
      {/* Carousel Images */}
      <div className="overflow-hidden relative h-96 rounded-lg shadow-lg"> {/* Container for images with overflow hidden */}
        {images.map((img, index) => ( // Map through the images array to display each image
          <div
            key={index} // Unique key for each image div based on index
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === current ? 'translate-x-0' : 'translate-x-full'}`} // Apply styles for positioning and transitions
            style={{ 
              backgroundImage: `url(${img})`, // Set the background image for each slide
              backgroundSize: 'cover', // Cover the entire div
              backgroundPosition: 'center', // Center the image
              backgroundRepeat: 'no-repeat', // Prevent image repeat
              height: '100%', // Full height
              width: '100%', // Full width
            }}
          ></div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide} // Attach click event to navigate to the previous slide
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-main-yellow text-white p-2 rounded-full shadow-lg hover:bg-hover-yellow focus:outline-none" // Style for the left arrow button
      >
        &#10094; {/* Left arrow icon */}
      </button>
      <button
        onClick={nextSlide} // Attach click event to navigate to the next slide
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-main-yellow text-white p-2 rounded-full shadow-lg hover:bg-hover-yellow focus:outline-none" // Style for the right arrow button
      >
        &#10095; {/* Right arrow icon */}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"> {/* Container for slide indicators */}
        {images.map((_, index) => ( // Map through images array to create indicators
          <div
            key={index} // Unique key for each indicator based on index
            onClick={() => setCurrent(index)} // Set the current slide when an indicator is clicked
            className={`h-3 w-3 bg-white rounded-full shadow-md cursor-pointer transition-all duration-300 ${index === current ? 'bg-main-yellow' : 'bg-gray-300'}`} // Style for indicators, changing color based on current slide
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel; // Export the Carousel component for use in other parts of the application
