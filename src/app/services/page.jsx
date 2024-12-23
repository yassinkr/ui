"use client"; // Enables client-side rendering in this component for Next.js

// Importing necessary components
import Footer from "@/components/Footer"; // Footer component for the bottom of the page
import Header from "@/components/Header"; // Header component for the top of the page
import ServicesSection from "@/components/ServicesSection"; // Component displaying a list of services
import { useSelector } from "react-redux"; // React-Redux hook for accessing Redux store data

// Main page component
function page() {
  // Extract 'services' data from the Redux store's 'services' state
  const { services } = useSelector((state) => state.services);

  return (
    <>
      {/* Main container for the content with a maximum width and centered alignment */}
      <div className="max-w-6xl mx-auto">
        <Header index={2} /> {/* Header component with an index prop, possibly to set an active link or style */}
        <ServicesSection services={services} /> {/* Services section, passing the services data */}
      </div>

      {/* Full-width Footer component */}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default page; // Exports the component as the default export
