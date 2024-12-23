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
 // Mock data for demonstration
const mockProducts = [
  {
    _id: "1",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    images: [
      "/images/headphones1.jpg",
      "/images/headphones2.jpg",
      "/images/headphones3.jpg",
    ],
    details: "These wireless headphones offer superior sound quality and comfort.",
    specifications: [
      "Battery Life: 20 hours",
      "Bluetooth 5.0",
      "Weight: 250g",
      "Color: Black",
    ],
    features: [
      "Active Noise Cancellation",
      "Wireless Charging",
      "Built-in Microphone",
    ],
  },
  {
    _id: "2",
    name: "Bluetooth Speaker",
    description: "Compact Bluetooth speaker with powerful sound.",
    price: 49.99,
    images: [
      "/images/speaker1.jpg",
      "/images/speaker2.jpg",
      "/images/speaker3.jpg",
    ],
    details: "Perfect for travel or home use with excellent audio quality.",
    specifications: [
      "Battery Life: 12 hours",
      "Bluetooth Range: 10 meters",
      "Weight: 500g",
      "Color: Blue",
    ],
    features: ["Water Resistant", "Compact Design", "Easy Pairing"],
  },
  {
    _id: "3",
    name: "Smart Watch",
    description: "Feature-packed smartwatch with fitness tracking.",
    price: 199.99,
    images: [
      "/images/watch1.jpg",
      "/images/watch2.jpg",
      "/images/watch3.jpg",
    ],
    details: "Track your health and stay connected on the go.",
    specifications: [
      "Battery Life: 7 days",
      "Water Resistance: 50m",
      "Weight: 150g",
      "Color: Black",
    ],
    features: ["Heart Rate Monitoring", "GPS Tracking", "Customizable Watch Faces"],
  },
];  
  
  return (
    <>
      {/* Main content area, centered with max-width */}
      <div className="max-w-6xl mx-auto">
        <Header index={3} /> {/* Header component with index prop, likely to set the active link */}
        <ProduitsSection Produits={mockProducts} /> {/* ProjectsSection component displaying projects */}
      </div>

      {/* Footer component spanning full width at the bottom */}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default page; // Exports the component as the default export
