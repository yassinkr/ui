import React from "react"; // Importing React
import Image from "next/image"; // Importing Next.js Image component for optimized images
import Link from "next/link"; // Importing Link for client-side navigation

function Hero() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-8 max-w-7xl max-md:max-w-md mx-auto py-12 md:py-20"> {/* Container with responsive grid layout */}
      <div className="max-md:order-2 text-center md:text-left"> {/* Text section with responsive order */}
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-text-dark"> {/* Hero headline styling */}
          IT Solutions for Your <br /> Digital Transformation {/* Main headline text */}
        </h1>
        {/* Subheadline */}
        <p className="text-lg md:text-2xl font-medium mb-8 text-gray-700"> {/* Subheadline styling */}
          Empowering businesses with cutting-edge technology solutions. {/* Subheadline text */}
        </p>
        {/* Call to Action */}
        <div className="flex justify-center md:justify-start space-x-4"> {/* Flexbox container for buttons */}
          <Link href="/services"> {/* Link to services page */}
            <button className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"> {/* Button styling */}
              Get Started {/* Button text */}
            </button>
          </Link>
          <Link href="/contact"> {/* Link to contact page */}
            <button className="bg-transparent border-2 border-gray-700 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-700 hover:text-white transition-transform transform hover:scale-105 duration-300"> {/* Button styling */}
              Contact Us {/* Button text */}
            </button>
          </Link>
        </div>
      </div>
      <div className="md:order-2 md:h-[450px] flex items-center justify-center"> {/* Image section with responsive order and height */}
        <Image
          src="/image.png" // Source of the hero image
          alt="Hero Image" // Alt text for accessibility
          width={300} // Width of the image
          height={300} // Height of the image
          className="object-contain" // Ensures the image maintains its aspect ratio
        />
      </div>
    </div>
  );
}

export default Hero; // Exporting the Hero component for use in other parts of the application
