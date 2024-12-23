import ContactSection from "@/components/ContactSection"; // Import the ContactSection component
import Footer from "@/components/Footer"; // Import the Footer component
import Header from "@/components/Header"; // Import the Header component
import React from "react"; // Import React

// Main page component
function page() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Container for header and contact section */}
        <Header index={5} /> {/* Render Header with index prop */}
        <ContactSection /> {/* Render ContactSection for user contact form */}
      </div>
      <div className="w-full">
        {" "}
        {/* Full-width footer container */}
        <Footer /> {/* Render Footer */}
      </div>
    </>
  );
}

export default page; // Export the main component
