import AboutSection from "@/components/AboutSection"; // Import the AboutSection component
import Footer from "@/components/Footer"; // Import the Footer component
import Header from "@/components/Header"; // Import the Header component
import React from "react"; // Import React

function page() {
  return (
    <>
      <div className="max-w-6xl mx-auto"> {/* Container for header and about section */}
        <Header index={1} /> {/* Render Header with index prop */}
        <AboutSection /> {/* Render the AboutSection component */}
      </div>
      <div className="w-full"> {/* Full-width footer container */}
        <Footer /> {/* Render Footer */}
      </div>
    </>
  );
}

export default page; // Export the main component
