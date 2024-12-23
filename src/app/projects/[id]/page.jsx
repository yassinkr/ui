"use client"; // This enables client-side rendering for this component in Next.js

// Importing necessary components
import Footer from "@/components/Footer"; // Footer component for the page
import Header from "@/components/Header"; // Header component for the page
import ProjectDetails from "@/components/ProjectDetails"; // Component for displaying detailed project information
import React, { useEffect, useState } from "react"; // React and specific hooks
import { useSelector } from "react-redux"; // Hook to access the Redux store

// Main page component for displaying project details
function Page() {
  // State variables
  const [project, setProject] = useState(null); // State for selected project
  const [otherProjects, setOtherProjects] = useState(null); // State for related projects
  const [loading, setLoading] = useState(true); // Loading state
  const { projects } = useSelector((state) => state.projects); // Accessing projects from Redux store

  // useEffect to fetch project details based on URL
  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/").pop(); // Get project ID from URL path

    // Simulating an async call with a delay (for demo purposes)
    setTimeout(() => {
      // Find the project by matching ID
      const foundProject = projects.find((project) => project._id === id);
      setProject(foundProject); // Set the selected project
      // Get other projects, excluding the selected one, limited to 3
      const other = projects
        .filter((project) => project._id !== id)
        .slice(0, 3);
      setOtherProjects(other);
      setLoading(false); // Turn off loading after fetching
    }, 1000); // 1-second delay for the simulated load time
  }, [projects]);

  // Display loading spinner while fetching data
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Display an error message if the project is not found
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      {/* Main content area, centered with max-width */}
      <div className="max-w-6xl mx-auto">
        <Header index={4} />{" "}
        {/* Header component with an index prop for active link */}
        <ProjectDetails project={project} otherProjects={otherProjects} />{" "}
        {/* Passes the selected project and related projects to ProjectDetails */}
      </div>

      {/* Footer component spanning full width at the bottom */}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default Page; // Exports the component as the default export
