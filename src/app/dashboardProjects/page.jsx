"use client"; // Indicates this file is a client component

// Imports
import Sidebar from "@/Admin_Components/Sidebar"; // Sidebar component
import { useRouter } from "next/navigation"; // Navigation hook for routing
import React, { useEffect, useState } from "react"; // React imports
import { useSelector, useDispatch } from "react-redux"; // Redux hooks
import { HiMenuAlt3 } from "react-icons/hi"; // Menu icon
import { getAllProjects } from "@/redux/action/projects"; // Redux action to fetch projects
import DashboardProjects from "@/Admin_Components/DashboardProjects"; // Dashboard projects component

// Main page component
function Page() {
  // State selection from Redux store
  const { isAuthenticated, loading } = useSelector((state) => state.user); // User authentication state
  const { projects, isLoading, error } = useSelector((state) => state.projects); // Projects data
  const router = useRouter(); // Initialize router for navigation
  const [isOpen, setIsOpen] = useState(true); // Sidebar visibility state
  const dispatch = useDispatch(); // Redux dispatch

  // Redirect to login if not authenticated and loading is complete
  useEffect(() => {
    if (!loading && !isAuthenticated && !isLoading) {
      router.push("/login"); // Navigate to login page if not authenticated
    }
  }, [isAuthenticated, loading, router, isLoading]);

  // Fetch all projects on component mount
  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  // Handle loading and authentication checks before rendering
  if (loading || isLoading) {
    return <div>Loading...</div>; // Display loading state
  }

  // Display error if it exists
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Ensure nothing is rendered until we have a confirmed authenticated state
  if (!isAuthenticated) {
    return null;
  }

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Debugging: log projects for checking the fetched data
  console.log("projects:", projects);

  return (
    <>
      {isAuthenticated ? (
        <div className="flex h-screen overflow-hidden">
          <Sidebar index={2} isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto bg-bg-light">
            <button
              onClick={toggleSidebar}
              className="lg:hidden fixed top-4 left-4 z-50 bg-main-yellow text-text-dark rounded-full p-2 shadow-lg"
            >
              <HiMenuAlt3 size={24} />
            </button>

            {/* Render loading state for projects */}
            {isLoading ? (
              <div>Loading projects...</div>
            ) : (
              <DashboardProjects projects={projects} /> // Render projects if loading is complete
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Page;
