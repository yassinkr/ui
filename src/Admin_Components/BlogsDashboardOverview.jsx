import { server } from "@/data/server"; // Import server URL from data
import { getAllBlogs } from "@/redux/action/blogs"; // Import action to get all blogs from Redux
import axios from "axios"; // Import Axios for making HTTP requests
import Link from "next/link"; // Import Link for client-side navigation
import React, { useState } from "react"; // Import React and useState hook
import { useDispatch } from "react-redux"; // Import useDispatch to access Redux store
import { toast } from "react-toastify"; // Import toast for notifications

function BlogsDashboardOverview({ blogs }) {
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const [selectedBlog, setSelectedBlog] = useState(null); // State to track the selected blog for editing or deleting
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to control the visibility of the edit modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State to control the visibility of the delete modal

  // States for storing updated blog information
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");
  const [updatedTags, setUpdatedTags] = useState("");
  const [imageFile, setImageFile] = useState(null); // State for storing the image file
  const [pdfFile, setPdfFile] = useState(null); // State for storing the PDF file
  const [loading, setLoading] = useState(false); // State to indicate loading state during updates/deletes

  // Handle image file selection and reading
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader(); // Create a FileReader instance
    reader.readAsDataURL(file); // Read the file as a data URL
    reader.onloadend = () => {
      setImageFile(reader.result); // Set the image file state to the data URL
    };
  };

  // Handle PDF file selection and reading
  const handlepdfChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader(); // Create a FileReader instance
    reader.readAsDataURL(file); // Read the file as a data URL
    reader.onloadend = () => {
      setPdfFile(reader.result); // Set the PDF file state to the data URL
    };
  };

  // Handle form submission for editing a blog
  const handleEditSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true
    const tagsArray = updatedTags.split(",").map((tag) => tag.trim()); // Convert tags string to an array

    const updatedBlog = {
      title: updatedTitle,
      description: updatedDescription,
      content: updatedContent,
      tags: tagsArray,
    };

    try {
      // Create a form data object including updated blog details and files
      const formData = {
        ...updatedBlog,
        image: imageFile,
        pdfUrl: pdfFile,
      };

      await axios.put(`${server}/blogs/${selectedBlog._id}`, formData, {
        withCredentials: true,
      }); // Make PUT request to update the blog

      toast.success("Blog updated successfully"); // Show success notification
      dispatch(getAllBlogs()); // Refresh the blog list
      handleCloseEditModal(); // Close the edit modal
    } catch (error) {
      // Show error notification if update fails
      toast.error(
        "Error updating blog: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Error updating blog:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Handle blog deletion confirmation
  const handleDeleteConfirm = async () => {
    try {
      setLoading(true); // Set loading state to true
      await axios.delete(`${server}/blogs/${selectedBlog._id}`, {
        withCredentials: true,
      }); // Make DELETE request to delete the blog
      toast.success("Blog deleted successfully"); // Show success notification
      dispatch(getAllBlogs()); // Refresh the blog list
      setLoading(false); // Reset loading state
      handleCloseDeleteModal(); // Close the delete modal
    } catch (error) {
      // Show error notification if deletion fails
      toast.error(
        "Error deleting blog: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Error deleting blog:", error);
      setLoading(false); // Reset loading state
    }
  };

  // Close the edit modal and reset selected blog
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedBlog(null);
  };

  // Close the delete modal and reset selected blog
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-card-color text-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              style={{ backgroundColor: "var(--card-color)" }} // Set background color using CSS variable
            >
              <img
                src={blog.image}
                alt={blog.title} // Set alt text for accessibility
                className="w-full h-48 object-cover" // Image styling
              />
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--text-dark)" }} // Set text color using CSS variable
                >
                  {blog.title} // Display blog title
                </h3>
                <p className="text-text-dark mb-4 line-clamp-1"> // Display blog description
                  {blog.description}
                </p>
                <div className="flex flex-wrap justify-center">
                  {blog.tags &&
                    blog.tags.slice(0, 2).map((tag, index) => ( // Display the first two tags
                      <span
                        key={index}
                        className="bg-main-yellow text-black py-1 px-3 rounded-full mr-2 mb-2 shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
                <div className="flex justify-center gap-3 mt-3 ">
                  <button
                    onClick={() => {
                      setSelectedBlog(blog); // Set the selected blog for editing
                      setUpdatedTitle(blog.title);
                      setUpdatedDescription(blog.description);
                      setUpdatedContent(blog.content);
                      setUpdatedTags(blog.tags.join(", "));
                      setImageFile(null); // Reset the image file
                      setIsEditModalOpen(true); // Open the edit modal
                    }}
                    className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                  >
                    Edit // Edit button
                  </button>
                  <button
                    onClick={() => {
                      setSelectedBlog(blog); // Set the selected blog for deletion
                      setIsDeleteModalOpen(true); // Open the delete modal
                    }}
                    className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                  >
                    Delete // Delete button
                  </button>
                  <Link href={`/blogs/${blog._id}`}>
                    <span
                      className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                      aria-label={`Read more about ${blog.title}`} // Accessibility label
                    >
                      See Blog // Link to see full blog
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>
            <form onSubmit={handleEditSubmit}>
              <label className="block mb-2">
                <span className="block mb-1 font-semibold">Title</span>
              </label>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)} // Update title state
                placeholder="Blog Title"
                className="border mb-2 p-2 w-full" // Input styling
                required // Make field required
              />

              <label className="block mb-2">
                <span className="block mb-1 font-semibold">Description</span>
              </label>
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)} // Update description state
                placeholder="Blog Description"
                className="border mb-2 p-2 w-full" // Textarea styling
                required // Make field required
              />

              <label className="block mb-2">
                <span className="block mb-1 font-semibold">Content</span>
              </label>
              <textarea
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)} // Update content state
                placeholder="Blog Content"
                className="border mb-2 p-2 w-full" // Textarea styling
                required // Make field required
              />

              <label className="block mb-2">
                <span className="block mb-1 font-semibold">Tags (comma separated)</span>
              </label>
              <input
                type="text"
                value={updatedTags}
                onChange={(e) => setUpdatedTags(e.target.value)} // Update tags state
                placeholder="Tag1, Tag2"
                className="border mb-2 p-2 w-full" // Input styling
              />

              <label className="block mb-2">
                <span className="block mb-1 font-semibold">Image</span>
              </label>
              <input
                type="file"
                onChange={handleImageChange} // Handle image file selection
                className="border mb-2 p-2 w-full" // Input styling
              />

              <label className="block mb-2">
                <span className="block mb-1 font-semibold">PDF</span>
              </label>
              <input
                type="file"
                onChange={handlepdfChange} // Handle PDF file selection
                className="border mb-2 p-2 w-full" // Input styling
              />

              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={handleCloseEditModal} // Close edit modal
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg mr-2"
                >
                  Cancel // Cancel button
                </button>
                <button
                  type="submit"
                  className={`bg-main-yellow text-black font-bold py-2 px-4 rounded-lg transition-all duration-300 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading} // Disable button when loading
                >
                  {loading ? "Updating..." : "Update"} // Button text based on loading state
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this blog?</p>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={handleCloseDeleteModal} // Close delete modal
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg mr-2"
              >
                Cancel // Cancel button
              </button>
              <button
                onClick={handleDeleteConfirm} // Confirm deletion
                className={`bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading} // Disable button when loading
              >
                {loading ? "Deleting..." : "Delete"} // Button text based on loading state
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default BlogsDashboardOverview; // Export the component for use in other parts of the app
