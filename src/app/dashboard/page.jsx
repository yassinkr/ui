"use client"; // Indicates this file is a client component

// Imports
import DashboardHome from "@/Admin_Components/DashboardHome"; // Home component for the dashboard
import Sidebar from "@/Admin_Components/Sidebar"; // Sidebar component for navigation
import { useRouter } from "next/navigation"; // Router for navigation in Next.js
import React, { useEffect, useState } from "react"; // React imports
import { useSelector } from "react-redux"; // Redux hook for state selection
import { HiMenuAlt3 } from "react-icons/hi"; // Menu icon from react-icons

// Main page component
function Page() {
  // Selecting user authentication state from Redux store
  const { isAuthenticated, loading, user } = useSelector((state) => state.user); 
  const router = useRouter(); // Initialize router for navigation
  const [isOpen, setIsOpen] = useState(true); // State for sidebar visibility

  // Redirect to login if not authenticated and loading is complete
  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.push("/login"); // Navigate to login page
    }
  }, [isAuthenticated, router, loading]);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Switch sidebar open/close state
  };

  return (
    <>
      {isAuthenticated ? ( // Check if user is authenticated
        <div className="flex h-screen overflow-hidden">
          <Sidebar index={0} isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto bg-bg-light">
            <button
              onClick={toggleSidebar}
              className="lg:hidden fixed top-4 left-4 z-50 bg-main-yellow text-text-dark rounded-full p-2 shadow-lg"
            >
              <HiMenuAlt3 size={24} /> {/* Menu icon */}
            </button>
            <DashboardHome user={user} /> {/* Render DashboardHome with user data */}
          </div>
        </div>
      ) : null} {/* If not authenticated, render nothing */}
    </>
  );
}

export default Page; // Export the main component
