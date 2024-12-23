"use client"; // Indicating this is a client component in Next.js
import Image from "next/image"; // Importing Next.js Image component for optimized images
import Link from "next/link"; // Importing Link for client-side navigation
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhoneAlt,
} from "react-icons/fa"; // Importing specific icons from react-icons
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Importing menu icons for mobile navigation
import React, { useState } from "react"; // Importing React and useState hook
import { headerItems } from "../data/data"; // Importing header items from data.js

function Header({ index }) {
  // State to manage the toggle status of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu open/closed state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent"> {/* Main header section */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-0"> {/* Container for header content */}
        {/* Logo Section */}
        <div className="flex items-center"> {/* Flexbox for logo alignment */}
          <Image
            src="/logo.png" // Logo source
            alt="logo" // Alt text for the logo
            width={180} // Width of the logo
            height={180} // Height of the logo
            className="cursor-pointer" // Pointer cursor on hover
          />
        </div>

        {/* Navigation Links for larger screens */}
        <nav className="hidden md:flex items-center space-x-6"> {/* Navigation for medium and larger screens */}
          {headerItems.map((item, idx) => ( // Mapping through header items
            <Link key={item.title} href={item.link}> {/* Link component for navigation */}
              <div
                className={`
                  ${index === idx ? "text-hover-yellow" : "text-text-dark"} // Conditional class for active link
                  flex items-center space-x-2 font-bold text-lg hover:text-hover-yellow transition-all duration-300`} // Flexbox for alignment and styling
              >
                {item.icon} {/* Render the icon for the link */}
                <span>{item.title}</span> {/* Display the title */}
              </div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden"> {/* Visible only on small screens */}
          <button onClick={toggleMenu} className="text-text-dark"> {/* Button to toggle menu */}
            {isOpen ? ( // Conditional rendering for open/close icon
              <HiX className="w-8 h-8" /> // Close icon when menu is open
            ) : (
              <HiMenuAlt3 className="w-8 h-8" /> // Menu icon when closed
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${ // Responsive behavior for mobile menu
          isOpen ? "block" : "hidden" // Show/hide menu based on state
        } transition-all duration-300`} // Smooth transition effect
      >
        <nav className="flex flex-col items-center space-y-4 bg-gray-900 p-5"> {/* Mobile navigation styling */}
          {headerItems.map((item, idx) => ( // Mapping through header items for mobile
            <Link key={item.title} href={item.link}> {/* Link for navigation */}
              <div
                onClick={toggleMenu} // Close menu on link click
                className={`
                  ${index === idx ? "text-hover-yellow" : "text-text-dark"} // Conditional class for active link
                  flex items-center space-x-2 font-bold text-lg hover:text-hover-yellow transition-all duration-300`} // Flexbox for alignment and styling
              >
                {item.icon} {/* Render the icon for the link */}
                <span>{item.title}</span> {/* Display the title */}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header; // Exporting the Header component for use in other parts of the application
