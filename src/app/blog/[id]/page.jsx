"use client"; // Indicates this component uses client-side features
import Footer from "@/components/Footer"; // Import Footer component
import Header from "@/components/Header"; // Import Header component
import React, { useEffect, useState } from "react"; // Import React and hooks
import BlogItem from "@/components/BlogItem"; // Import BlogItem component
import { useSelector } from "react-redux"; // Import useSelector to access Redux store

function Page() {
  const [blog, setBlog] = useState(null); // State to hold the selected blog
  const [relatedBlogs, setRelatedBlogs] = useState(null); // State to hold related blogs
  const { blogs: blogPosts } = useSelector((state) => state.blogs); // Access blogs from Redux store

  useEffect(() => {
    if (blogPosts && blogPosts.length > 0) {
      const path = window.location.pathname; // Get the current path
      const id = path.split("/").pop(); // Extract the blog ID from the path

      const selectedBlog = blogPosts.find((post) => post._id === id); // Find the selected blog post
      setBlog(selectedBlog); // Set the selected blog in state

      // Get related blogs excluding the selected one and limit to 3
      const related = blogPosts.filter((b) => b._id !== id).slice(0, 3);
      setRelatedBlogs(related); // Set related blogs in state
    }
  }, [blogPosts]); // Run effect when blogPosts change

  // Loader while fetching the blog data
  if (!blog || !relatedBlogs) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {" "}
        {/* Center loading spinner */}
        <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>{" "}
        {/* Loading spinner */}
      </div>
    );
  }

  // Check if the blog is found
  if (!blog) {
    return <div>Blog not found</div>; // Show not found message if blog is not found
  }

  return (
    <>
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Container for header and blog item */}
        <Header index={4} /> {/* Render Header with index prop */}
        <BlogItem blog={blog} relatedBlogs={relatedBlogs} />{" "}
        {/* Render BlogItem with selected blog and related blogs */}
      </div>
      <div className="w-full">
        {" "}
        {/* Full-width footer container */}
        <Footer /> {/* Render Footer */}
      </div>
    </>
  );
}

export default Page; // Export the main component
