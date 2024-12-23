// LatestBlogPosts.jsx
import React from 'react'; // Importing React
import Link from 'next/link'; // Importing Link for client-side navigation

const LatestBlogPosts = ({ blogs }) => { // Functional component accepting 'blogs' as a prop
    return (
        <section className='py-16'> {/* Section wrapper with vertical padding */}
            <div className='max-w-7xl mx-auto px-4 lg:px-0'> {/* Container for max width and centering */}
                <h2 className='text-3xl md:text-5xl font-bold text-center mb-10' style={{ color: 'var(--text-dark)' }}> {/* Main heading for the blog section */}
                    Latest Blog Posts {/* Heading text */}
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'> {/* Grid layout for blog posts */}
                    {blogs.map(post => ( // Mapping through the 'blogs' array to render each post
                        <div 
                            key={post._id} // Unique key for each post based on its ID
                            className='bg-card-color text-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105' // Card styling with hover effect
                            style={{ backgroundColor: 'var(--card-color)' }} // Dynamic background color for the card
                        >
                            <img
                                src={post.image} // Source of the blog post image
                                alt={post.title} // Alt text for accessibility
                                className='w-full h-48 object-cover' // Styling for image to cover its container
                            />
                            <div className='p-6'> {/* Container for text content */}
                                <h3 className='text-xl font-semibold mb-2' style={{ color: 'var(--text-dark)' }}> {/* Blog post title styling */}
                                    {post.title} {/* Title of the blog post */}
                                </h3>
                                <p className='text-text-dark mb-4'>{post.description}</p> {/* Description of the blog post */}
                                <Link href={`/blog/${post._id}`}> {/* Link to the individual blog post */}
                                    <span 
                                        className='bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300' // Button styling
                                        aria-label={`Read more about ${post.title}`} // Accessible label for screen readers
                                    >
                                        Read More {/* Button text */}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestBlogPosts; // Exporting the LatestBlogPosts component for use in other parts of the application
