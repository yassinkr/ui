"use client";

// Imports
import DashboardServices from "@/Admin_Components/DashboardServices"; // Dashboard services component
import Sidebar from "@/Admin_Components/Sidebar"; // Sidebar component
import { useRouter } from "next/navigation"; // Navigation hook for routing
import React, { useEffect, useState } from "react"; // React imports
import { useSelector, useDispatch } from "react-redux"; // Redux hooks
import { HiMenuAlt3 } from "react-icons/hi"; // Menu icon
import { getAllServices } from "@/redux/action/services"; // Redux action to fetch services

// Main page component
function Page() {
  // State selection from Redux store
  const { isAuthenticated, loading } = useSelector((state) => state.user); // User authentication
  const { services, isLoading, error } = useSelector((state) => state.services); // Services data
  const router = useRouter(); // Initialize router for navigation
  const [isOpen, setIsOpen] = useState(true); // Sidebar visibility state
  const dispatch = useDispatch(); // Redux dispatch

  // Redirect to login if not authenticated and loading is complete
  useEffect(() => {
    if (!loading && !isAuthenticated && !isLoading) {
      router.push("/login"); // Navigate to login page if not authenticated
    }
  }, [isAuthenticated, loading, router, isLoading]);

  // Fetch all services on component mount
  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  // Handle loading and authentication checks before rendering
  if (loading || isLoading) {
    return <div>Loading...</div>; // Display loading state
  }

  // Display error if it exists
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Only render if authenticated
  if (!isAuthenticated) {
    return null;
  }

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Debugging: log services for checking the fetched data
  console.log("Services:", services);

  return (
    <>
      {isAuthenticated ? (
        <div className="flex h-screen overflow-hidden">
          <Sidebar index={1} isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto bg-bg-light">
            <button
              onClick={toggleSidebar}
              className="lg:hidden fixed top-4 left-4 z-50 bg-main-yellow text-text-dark rounded-full p-2 shadow-lg"
            >
              <HiMenuAlt3 size={24} />
            </button>

            {/* Loading state for services */}
            {isLoading ? (
              <div>Loading services...</div>
            ) : (
              <DashboardServices services={services} />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Page;
