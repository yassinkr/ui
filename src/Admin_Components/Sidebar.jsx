// components/Sidebar.jsx
"use client"; // Indicates that this component will be used on the client side
import React, { useState } from 'react'; // Import necessary libraries
import Link from 'next/link'; // Import Link component for client-side navigation
import Image from 'next/image'; // Import Image component for optimized image loading
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Import icons for the menu
import { DashboardItems } from '@/data/data'; // Import dashboard items from data file
import { FiLogOut } from 'react-icons/fi'; // Import log out icon
import { server } from '@/data/server'; // Import server URL for API requests
import { toast } from 'react-toastify'; // Import toast for notifications
import axios from 'axios'; // Import axios for making HTTP requests

// Sidebar component definition with props for index, open state, and toggle function
const Sidebar = ({ index, isOpen, toggleSidebar }) => {
  // Handle logout function
  const handleLogout = async () => {
    try {
      await axios
        .get(`${server}/users/logout`, { withCredentials: true }) // Send logout request to server
        .then((res) => {
          toast.success(res.data.message); // Show success message
          window.location.reload(true); // Reload the page to reflect logout
          navigate("/login"); // Navigate to login page (note: this line may be unnecessary after reload)
        })
        .catch((error) => {
          console.log(error.response.data.message); // Log any error messages
        });
    } catch (error) {
      console.log(error); // Log any unexpected errors
    }
  };

  return (
    <div className={`fixed inset-y-0 left-0 bg-white shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:w-64 z-50`}>
      {/* Sidebar container with transition effects based on isOpen state */}

      {/* Logo section */}
      <div className="flex items-center mb-4 p-4">
        <Link href="/dashboard" passHref>
          <Image src="/logo.png" alt="Logo" width={150} height={150} /> {/* Logo image */}
        </Link>
        <button onClick={toggleSidebar} className="ml-auto lg:hidden"> {/* Button to close sidebar on mobile */}
          <HiX size={24} /> {/* Close icon */}
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col space-y-2 font-bold text-lg p-4">
        {DashboardItems && DashboardItems.map((item, i) => ( // Iterate over dashboard items
          <Link key={i} href={item.path} passHref>
            <span className={`flex items-center p-2 rounded transition-colors ${i === index ? 'bg-hover-yellow text-text-dark' : 'text-text-dark hover:bg-hover-yellow'}`}>
              {item.icon} <span className="ml-2">{item.name}</span> {/* Display icon and name */}
            </span>
          </Link>
        ))}
        {/* Logout link */}
        <div onClick={handleLogout} > {/* Call handleLogout on click */}
          <span className={`flex items-center p-2 rounded transition-colors text-text-dark hover:bg-hover-yellow cursor-pointer `}>
            <FiLogOut className='mr-2'/> <span className="ml-2">Log Out</span> {/* Log out icon and text */}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar; // Export the Sidebar component for use in other parts of the application
