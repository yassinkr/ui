import { server } from "@/data/server"; // Import the server URL from a config file
import axios from "axios"; // Import axios for making HTTP requests
import React, { useState } from "react"; // Import React and useState hook
import { HiX } from "react-icons/hi"; // Import close icon from React Icons
import { toast } from "react-toastify"; // Import toast notifications
import ProjectsDashboardOverview from "./ProjectsDashboardOverview.jsx"; // Import the project overview component
import { getAllProjects } from "@/redux/action/projects"; // Import action to get all projects from Redux
import { useDispatch } from "react-redux"; // Import useDispatch from Redux

function DashboardProjects({ projects }) {
  // State variables to manage form inputs and loading state
  const [open, setOpen] = useState(false); // Toggle for modal visibility
  const [projectName, setProjectName] = useState(""); // Project name input
  const [category, setCategory] = useState(""); // Project category input
  const [description, setDescription] = useState(""); // Project description input
  const [content, setContent] = useState(""); // Project content input
  const [mainImage, setMainImage] = useState(null); // State for main image
  const [images, setImages] = useState([]); // State for additional images
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const dispatch = useDispatch(); // Get dispatch function from Redux

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    // Create form data object
    const formData = {
      name: projectName,
      category,
      description,
      content,
      mainImage,
      images,
    };

    try {
      // Make a POST request to create a new project
      await axios.post(`${server}/projects/create`, formData, {
        withCredentials: true, // Include credentials for CORS
      }).then((response) => {
        toast.success("Project added successfully"); // Show success message
        setOpen(false); // Close the modal
        setLoading(false); // Set loading state to false
        // Reset form fields
        setProjectName("");
        setCategory("");
        setDescription("");
        setContent("");
        setMainImage(null);
        setImages([]);
        dispatch(getAllProjects()); // Refresh the list of projects
      }).catch((error) => {
        // Handle errors from the POST request
        toast.error("Failed to add project: " + error.message);
        setLoading(false); // Set loading state to false
      });
     
    } catch (error) {
      // Handle unexpected errors
      setLoading(false); // Set loading state to false
      toast.error("Failed to add project: " + error.message); // Show error message
    }
  };

  // Function to handle the change in main image input
  const handleMainImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader(); // Create a new FileReader
    reader.readAsDataURL(file); // Read the file as a data URL
    reader.onloadend = () => {
      setMainImage(reader.result); // Set the main image state with the data URL
    };
  };

  // Function to handle the change in additional images input
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to Array
    const images = []; // Array to store the image data
    const readerPromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader(); // Create a new FileReader
        reader.readAsDataURL(file); // Read the file as a data URL
        reader.onloadend = () => {
          resolve(reader.result); // Resolve the promise with the image data
        };
      });
    });

    // Wait for all readers to finish
    Promise.all(readerPromises).then((results) => {
      setImages(results); // Update the state with all image data
    });
  };

  return (
    <div className="w-full h-screen p-5 mt-20">
      <div className="flex justify-between">
        <h1 className="text-text-dark text-3xl font-bold">Projects</h1>
        <button
          onClick={() => setOpen(true)} // Open the modal when clicked
          className="bg-main-yellow text-text-dark font-bold px-4 py-2 rounded-full"
        >
          Add Project
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="bg-gray-800 bg-opacity-50 absolute inset-0"
            onClick={() => setOpen(false)} // Close modal when clicking outside
          />
          <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 w-full h-full max-h-screen flex flex-col md:flex-row overflow-y-auto">
            {/* Left Section: Form Inputs */}
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Add Project
              </h2>
              <HiX
                className="text-2xl absolute top-4 right-4 cursor-pointer"
                onClick={() => setOpen(false)} // Close modal when close icon clicked
              />
              <form onSubmit={handleSubmit}>
                {/* Input for Project Name */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={projectName} // Bind input value to state
                    onChange={(e) => setProjectName(e.target.value)} // Update state on change
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                {/* Input for Category */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    value={category} // Bind input value to state
                    onChange={(e) => setCategory(e.target.value)} // Update state on change
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                {/* Input for Description */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={description} // Bind textarea value to state
                    onChange={(e) => setDescription(e.target.value)} // Update state on change
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                    rows={4} // Set number of visible rows
                  />
                </div>
                {/* Input for Content */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Content</label>
                  <textarea
                    value={content} // Bind textarea value to state
                    onChange={(e) => setContent(e.target.value)} // Update state on change
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                    rows={4} // Set number of visible rows
                  />
                </div>
                {/* Input for Main Image */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Upload Main Image
                  </label>
                  <input
                    type="file"
                    onChange={handleMainImageChange} // Handle image change
                    accept="image/*" // Only accept image files
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                {/* Input for Additional Images */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Upload Additional Images
                  </label>
                  <input
                    type="file"
                    onChange={handleImagesChange} // Handle image changes
                    accept="image/*" // Only accept image files
                    multiple // Allow multiple file uploads
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                <div className="flex justify-end mt-6">
                  {/* Cancel Button */}
                  <button
                    type="button"
                    onClick={() => setOpen(false)} // Close modal on click
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2 transition hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  {/* Submit Button */}
                  <button
                    type="submit" // Submit form
                    disabled={loading} // Disable button if loading
                    className={`bg-main-yellow text-text-dark font-bold px-4 py-2 rounded-lg transition ${
                      loading ? "opacity-50 cursor-not-allowed" : "hover:bg-main-yellow-dark"
                    }`}
                  >
                    {loading ? "Adding..." : "Add Project"} // Change button text based on loading state
                  </button>
                </div>
              </form>
            </div>
            {/* Right Section: Overview of Current Projects */}
            <div className="w-full md:w-1/2 p-4">
              <ProjectsDashboardOverview projects={projects} /> {/* Render project overview component */}
            </div>
          </div>
        </div>
      )}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Current Projects</h2>
        {/* Render current projects list */}
        {projects.length > 0 ? (
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.id} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No projects available.</p> // Message when no projects are present
        )}
      </div>
    </div>
  );
}

export default DashboardProjects; // Export the component
