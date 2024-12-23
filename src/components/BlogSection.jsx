// Importing necessary libraries and components
import React from 'react'; // Import React for building components
import BlogCard from './BlogCard'; // Import BlogCard component to display individual blog entries

// BlogSection functional component that accepts 'blogs' as a prop
const BlogSection = ({ blogs }) => {
  return (
    <section className="py-16 bg-bg-light"> {/* Section for the blog overview with padding and a light background color */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0"> {/* Container for centering content and setting max width */}
        <h2 className="text-4xl font-bold text-center text-text-dark mb-10"> {/* Main heading for the blog section */}
          Our Blog
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Grid layout for blog cards, responsive to screen size */}
          {blogs.map((blog) => ( // Map through the blogs array to create BlogCard components
            <BlogCard key={blog._id} blog={blog} /> // Render a BlogCard for each blog entry, using the blog ID as the key for unique identification
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; // Export the BlogSection component for use in other parts of the application
