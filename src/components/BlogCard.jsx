// components/BlogCard.jsx
import React from "react"; // Import React library
import Link from "next/link"; // Import Link component for client-side navigation
import Image from "next/image"; // Import Image component from Next.js for optimized image handling

// BlogCard functional component definition that accepts a 'blog' prop
const BlogCard = ({ blog }) => {
  return (
    <div className="bg-bg-light p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"> {/* Container for the blog card with light background, padding, rounded corners, and shadow effect. It scales on hover. */}
      <Image
        width={300} // Set width for the image
        height={300} // Set height for the image
        src={blog.image} // Source of the blog image from the blog object
        alt={blog.title} // Alt text for the image, improves accessibility
        className="w-full h-48 object-cover rounded-md mb-4" // Full width, fixed height, object cover for proper scaling, rounded corners, and margin below
      />
      <h3 className="text-xl font-bold text-text-dark mb-2">{blog.title}</h3> {/* Blog title with large font size, bold text, and dark color */}
      <p className="text-gray-600 mb-4">{blog.description}</p> {/* Blog description with gray color and margin below */}
      <Link href={`/blog/${blog._id}`} className="flex justify-center"> {/* Link to the detailed blog post, constructed using the blog ID */}
        <span
          className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300" // Button styling with background color, hover effect, text color, padding, rounded corners, and transition effects
          aria-label={`Read more about ${blog.title}`} // Accessible label for screen readers
        >
          Read More {/* Button text */}
        </span>
      </Link>
    </div>
  );
};

export default BlogCard; // Export the BlogCard component for use in other parts of the application
