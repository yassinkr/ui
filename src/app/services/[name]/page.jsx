"use client"; // Enables client-side rendering in this component for Next.js

// Importing necessary components and dependencies
import Footer from "@/components/Footer"; // Footer component for the bottom of the page
import Header from "@/components/Header"; // Header component for the top of the page
import ServiceItem from "@/components/ServiceItem"; // Component for displaying detailed information about a service
import React, { useEffect, useState } from "react"; // React hooks for managing component state and lifecycle
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud, FaShieldAlt } from "react-icons/fa"; // Font Awesome icons
import { useSelector } from "react-redux"; // React-Redux hook for accessing Redux store data

// Main component for displaying a single service and related projects
function Page() {
  const [service, setService] = useState(null); // State for storing the selected service
  const [relatedProjects, setRelatedProjects] = useState(null); // State for storing related projects
  const [loading, setLoading] = useState(true); // Loading state to handle async data fetch
  const { projects } = useSelector((state) => state.projects); // Fetching projects from Redux store
  const { services } = useSelector((state) => state.services); // Fetching services from Redux store

  // useEffect to run when the component mounts, simulating an async data fetch
  useEffect(() => {
    const path = window.location.pathname; // Get the current path
    const name = path.split("/").pop(); // Extract the service name from the path

    // Simulate an async call with a timeout for demo purposes
    setTimeout(() => {
      // Find the specific service matching the URL name
      const service = services.find((s) => s.link.split("/").pop() === name);
      if (service) {
        setService(service); // Update service state with the found service data
        // Filter projects related to this service and limit to 3 items
        const related = projects.filter((project) => project.category === name).slice(0, 3);
        setRelatedProjects(related); // Update related projects state
      }
      setLoading(false); // Set loading to false after fetching
    }, 1000); // Simulated 1-second delay
  }, [services, projects]); // Dependencies to re-run when services or projects change

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader border-t-4 border-main-yellow w-12 h-12 rounded-full animate-spin"></div> {/* Loading spinner */}
      </div>
    );
  }

  // Display a message if the service is not found
  if (!service) {
    return (
      <div className="text-center text-lg font-bold">
        <p>Service not found</p>
      </div>
    );
  }

  // Render the main page content once data is loaded and service is available
  return (
    <>
      {/* Main content container with max-width */}
      <div className="max-w-6xl mx-auto">
        <Header index={2} /> {/* Header component with index prop, likely for active link tracking */}
        {service && (
          <ServiceItem service={service} relatedProjects={relatedProjects} /> /* Displays the service with related projects */
        )}
      </div>
      
      {/* Full-width footer component */}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default Page; // Exporting the component as the default export
