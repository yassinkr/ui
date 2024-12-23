import { server } from "@/data/server"; // Import server configuration
import axios from "axios"; // Import axios for HTTP requests
import React, { useEffect, useState } from "react"; // Import React and hooks
import { HiX } from "react-icons/hi"; // Import close icon
import { toast } from "react-toastify"; // Import toast for notifications
import BlogsDashboardOverview from "./BlogsDashboardOverview"; // Component for displaying blogs
import { getAllBlogs } from "@/redux/action/blogs"; // Redux action for fetching all blogs
import { useDispatch } from "react-redux"; // Hook to interact with Redux store

function DashboardBlogs({ blogs }) {
  const [open, setOpen] = useState(false); // State to control modal visibility
  const [blogTitle, setBlogTitle] = useState(""); // State for blog title
  const [description, setDescription] = useState(""); // State for blog description
  const [content, setContent] = useState(""); // State for blog content
  const [image, setImage] = useState(null); // State for uploaded image
  const [pdf, setPdf] = useState(null); // State for uploaded PDF
  const [tags, setTags] = useState(""); // State for tags
  const [loading, setLoading] = useState(false); // State for loading indicator
  const dispatch = useDispatch(); // Dispatch function for Redux actions

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state to true

    // Convert tags from string to array
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    // Prepare form data
    const formData = {
      title: blogTitle,
      description,
      content,
      image,
      pdfUrl: pdf,
      tags: tagsArray,
    };

    try {
      await axios.post(`${server}/blogs/create`, formData, {
        withCredentials: true,
      });
      toast.success("Blog post added successfully"); // Notify success
      resetForm(); // Reset form after submission
      dispatch(getAllBlogs()); // Fetch updated blog list
    } catch (error) {
      toast.error("Failed to add blog post: " + (error.response?.data?.message || error.message)); // Notify error
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  // Function to reset form fields
  const resetForm = () => {
    setOpen(false);
    setBlogTitle("");
    setDescription("");
    setContent("");
    setImage(null);
    setPdf(null);
    setTags("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImage(reader.result); // Set image state
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setPdf(reader.result); // Set PDF state
  };

  return (
    <div className="w-full h-screen p-5 mt-20">
      <div className="flex justify-between">
        <h1 className="text-text-dark text-3xl font-bold">Blogs</h1>
        <button
          onClick={() => setOpen(true)} // Open the modal to add a new blog
          className="bg-main-yellow text-text-dark font-bold px-4 py-2 rounded-full"
        >
          Add Blog
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="bg-gray-800 bg-opacity-50 absolute inset-0"
            onClick={() => setOpen(false)} // Close modal on background click
          />
          <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 w-full h-full max-h-screen flex flex-col md:flex-row overflow-y-auto">
            {/* Left Section: Form Inputs */}
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Add Blog Post
              </h2>
              <HiX
                className="text-2xl absolute top-4 right-4 cursor-pointer"
                onClick={() => setOpen(false)} // Close modal
              />
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Blog Title</label>
                  <input
                    type="text"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                    rows={3}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Content</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                    rows={5}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">PDF File</label>
                  <input
                    type="file"
                    onChange={handlePdfChange}
                    required
                    accept="application/pdf"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Upload Image</label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    required
                    placeholder="e.g. tag1, tag2"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={() => setOpen(false)} // Close modal
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2 transition hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-main-yellow text-text-dark px-4 py-2 rounded-lg transition hover:bg-main-yellow-dark"
                    disabled={loading} // Disable button when loading
                  >
                    {loading ? "Loading..." : "Add Blog"}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section: Image Preview */}
            <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="rounded-lg border border-gray-300 shadow-md"
                  style={{ maxHeight: "300px", maxWidth: "100%" }}
                />
              ) : (
                <div className="text-gray-400 text-center">
                  No image selected
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {blogs && blogs.length > 0 ? (
        <BlogsDashboardOverview blogs={blogs} /> // Render blog overview if blogs exist
      ) : (
        <div className="p-4 text-text-dark flex justify-center items-center h-full font-semibold">
          No blogs found
        </div>
      )}
    </div>
  );
}

export default DashboardBlogs;
