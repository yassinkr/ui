"use client"; // Enables client-side rendering for this Next.js component

// Import necessary components
import Footer from '@/components/Footer'; // Footer component for the page footer
import Header from '@/components/Header'; // Header component for the page header
import ProduitsSection from '@/components/ProduitsSection'; // Component to display a list of projects
import React from 'react'; // React library for component creation
import { useSelector } from 'react-redux'; // Hook to access Redux store data

// Main page component for displaying projects
function page() {
  // Access projects data from Redux store using useSelector
 // const { projects } = useSelector((state) => state.projects);
  const mockProjects = [
    {
      _id: "1",
      name: "Modern Web Design",
      description: "A cutting-edge web design project that leverages modern frameworks and responsive design principles.",
      mainImage: "https://via.placeholder.com/300x300?text=Modern+Web+Design",
    },
    {
      _id: "2",
      name: "Mobile App Development",
      description: "An innovative mobile application that enhances productivity and user engagement.",
      mainImage: "https://via.placeholder.com/300x300?text=Mobile+App+Development",
    },
    {
      _id: "3",
      name: "AI-Driven Analytics",
      description: "A project focused on delivering actionable insights using advanced AI algorithms.",
      mainImage: "https://via.placeholder.com/300x300?text=AI+Driven+Analytics",
    },
    {
      _id: "4",
      name: "E-Commerce Platform",
      description: "A robust e-commerce platform designed for seamless online shopping experiences.",
      mainImage: "https://via.placeholder.com/300x300?text=E-Commerce+Platform",
    },
    {
      _id: "5",
      name: "Game Development",
      description: "A thrilling game development project that combines creativity and cutting-edge technology.",
      mainImage: "https://via.placeholder.com/300x300?text=Game+Development",
    },
    {
      _id: "6",
      name: "Sustainable Energy Solutions",
      description: "A sustainability-focused project aimed at optimizing renewable energy usage.",
      mainImage: "https://via.placeholder.com/300x300?text=Sustainable+Energy+Solutions",
    },
  ];
  
   
  
  return (
    <>
      {/* Main content area, centered with max-width */}
      <div className="max-w-6xl mx-auto">
        <Header index={3} /> {/* Header component with index prop, likely to set the active link */}
        <ProduitsSection Produits={mockProjects} /> {/* ProjectsSection component displaying projects */}
      </div>

      {/* Footer component spanning full width at the bottom */}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default page; // Exports the component as the default export
