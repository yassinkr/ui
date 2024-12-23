import Link from "next/link"; // Import Link component for navigation in Next.js

// BlogItem functional component that accepts 'blog' and 'relatedBlogs' as props
const BlogItem = ({ blog, relatedBlogs }) => {
  return (
    <section className="py-16 bg-bg-light"> {/* Section for the blog item with padding and a light background color */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8"> {/* Container for layout, centering content and creating a responsive grid */}
        
        {/* Left Column - Blog Content */}
        <div className="flex flex-col"> {/* Flex container for the blog content */}
          <h1 className="text-4xl font-bold text-text-dark mb-4"> {/* Blog title with large font size, bold weight, dark text color, and margin below */}
            {blog.title} {/* Display the blog title */}
          </h1>
          <img
            src={blog.image} // Source of the blog image
            alt={blog.title} // Alt text for the image, improving accessibility
            className="w-full h-64 object-cover rounded-md mb-4" // Image styling with full width, fixed height, object cover for scaling, rounded corners, and margin below
          />
          <p className="text-gray-600 mb-2">{blog.description}</p> {/* Blog description with gray text color and margin below */}
          
          <div className="mt-4"> {/* Content section for blog content */}
            <h2 className="text-2xl font-semibold text-text-dark">Content</h2> {/* Subtitle for content section */}
            <p className="text-text-dark">{blog.content}</p> {/* Display the main content of the blog */}
          </div>
          
          <div className="mt-4"> {/* Section for tags and downloadable PDF */}
            <h2 className="text-lg font-semibold text-text-dark">Tags:</h2> {/* Subtitle for tags section */}
            <div className="flex flex-wrap mt-2"> {/* Flex container for wrapping tags */}
              {blog.tags.map((tag, index) => ( // Map through the tags array
                <span
                  key={index} // Use index as key for unique identification
                  className="bg-main-yellow font-bold px-2 py-1 rounded-md mr-2 mb-2" // Tag styling with background color, bold text, padding, rounded corners, and margin
                >
                  {tag} {/* Display each tag */}
                </span>
              ))}
            </div>
            {blog.pdfUrl && ( // Conditional rendering for PDF download link if a URL is provided
              <div className="flex justify-center w-full items-center mt-6"> {/* Centered container for the download link */}
                <a
                  href={blog?.pdfUrl} // PDF URL for download
                  download // Indicate that this link is for downloading
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Security for external links
                  className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300" // Download button styling with hover effects and transitions
                >
                  Download Blog PDF {/* Button text */}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Related Blogs */}
        <aside className="lg:pl-8"> {/* Aside element for related blogs with left padding on large screens */}
          <h2 className="text-2xl font-bold text-text-dark mb-6"> {/* Subtitle for related blogs section */}
            Related Blogs
          </h2>
          <ul className="space-y-4"> {/* Unordered list for related blog items */}
            {relatedBlogs.length > 0 ? ( // Conditional rendering based on related blogs availability
              relatedBlogs.map((relatedBlog) => ( // Map through related blogs
                <li
                  key={relatedBlog._id} // Use the blog ID as key for each list item
                  className="bg-card-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow" // List item styling with background, padding, rounded corners, shadow, and hover effect
                >
                  <h3 className="text-lg font-semibold text-text-dark"> {/* Related blog title styling */}
                    <Link
                      href={`/blog/${relatedBlog._id}`} // Link to the related blog's detail page
                      className="hover:text-main-yellow" // Hover effect for title link
                    >
                      {relatedBlog.title} {/* Display related blog title */}
                    </Link>
                  </h3>
                  <p>{relatedBlog.description}</p> {/* Display related blog description */}
                </li>
              ))
            ) : (
              <p>No related blogs found.</p> // Message for no related blogs
            )}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default BlogItem; // Export the BlogItem component for use in other parts of the application
