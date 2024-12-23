"use client"; // Enables client-side rendering for this Next.js component

// Import necessary components
import Footer from '@/components/Footer'; // Footer component for the page footer
import Header from '@/components/Header'; // Header component for the page header
import ProjectsSection from '@/components/ProjectsSection'; // Component to display a list of projects
import React from 'react'; // React library for component creation
import { useSelector } from 'react-redux'; // Hook to access Redux store data

// Main page component for displaying projects
function page() {
  // Access projects data from Redux store using useSelector
  const { projects } = useSelector((state) => state.projects);

  return (
    <>
      {/* Main content area, centered with max-width */}
      <div className="max-w-6xl mx-auto">
        <Header index={4} /> {/* Header component with index prop, likely to set the active link */}
        <ProjectsSection projects={projects} /> {/* ProjectsSection component displaying projects */}
      </div>

      {/* Footer component spanning full width at the bottom */}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default page; // Exports the component as the default export
