"use client"; // Indicates this component uses client-side features
import BlogSection from "@/components/BlogSection"; // Import BlogSection component
import Footer from "@/components/Footer"; // Import Footer component
import Header from "@/components/Header"; // Import Header component
import React from "react"; // Import React
import { useSelector } from "react-redux"; // Import useSelector to access Redux store

function page() {
  const { blogs } = useSelector((state) => state.blogs); // Access blogs from Redux store

  return (
    <>
      <div className="max-w-6xl mx-auto"> {/* Container for header and blog section */}
        <Header index={4} /> {/* Render Header with index prop */}
        <BlogSection blogs={blogs} /> {/* Render BlogSection with blogs prop */}
      </div>
      <div className="w-full"> {/* Full-width footer container */}
        <Footer /> {/* Render Footer */}
      </div>
    </>
  );
}

export default page; // Export the main component
