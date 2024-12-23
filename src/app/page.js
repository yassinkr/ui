"use client"; // This enables client-side rendering in this component for Next.js

import LocationSection from "@/components/LocationSection";
// Importing components used on the homepage
import ClientTestimonials from "@/components/ClientTestimonials"; // Section to showcase client testimonials
import FAQSection from "@/components/FAQSection"; // Section for frequently asked questions
import Footer from "@/components/Footer"; // Footer component
import Header from "@/components/Header"; // Header component
import Hero from "@/components/Hero"; // Hero section, typically the main visual on the homepage
import LatestBlogPosts from "@/components/LatestBlogPosts"; // Section displaying the latest blog posts
import ServicesOverview from "@/components/ServicesOverview"; // Section giving an overview of the services offered
import WhyChooseUs from "@/components/WhyChooseUs"; // Section explaining why clients should choose this company
import Image from "next/image"; // Next.js optimized image component
import { useSelector } from "react-redux"; // React-Redux hook to access Redux store data

// Home component for the main homepage layout
export default function Home() {
  // Retrieve data for services and blogs from the Redux store
  const { services } = useSelector((state) => state.services); // Access services data from Redux state
  const { blogs } = useSelector((state) => state.blogs); // Access blogs data from Redux state

  return (
    <>
      {/* Main container for homepage content */}
      <div className="max-w-6xl mx-auto"> {/* Sets maximum width and centers content */}
        <Header index={0} /> {/* Header component with an index prop, possibly used for active tab tracking */}
        <Hero /> {/* Hero section, likely featuring a main image or welcome message */}
        <ServicesOverview services={services} /> {/* Services section, passing in services data */}
        <LatestBlogPosts blogs={blogs} /> {/* Blog posts section, passing in blogs data */}
        <WhyChooseUs /> {/* Section highlighting reasons to choose the company */}
        <ClientTestimonials /> {/* Section featuring testimonials from clients */}
        <LocationSection /> {/* Location information section */}
        <FAQSection /> {/* Frequently Asked Questions section */}
      </div>
      
      {/* Full-width Footer */}
      <div className="w-full">
        <Footer /> {/* Footer component displayed at the bottom */}
      </div>
    </>
  );
}
