import { server } from "@/data/server"; // Importing server URL
import axios from "axios"; // Importing axios for HTTP requests
import React, { useEffect, useState } from "react"; // Importing React and hooks
import { HiX } from "react-icons/hi"; // Import menu icons
import { toast } from "react-toastify"; // Import toast notifications
import SercicesDashboardOverview from "./SercicesDashboardOverview"; // Import services overview component
import { getAllServices } from "@/redux/action/services"; // Import action to get all services from Redux
import { useDispatch } from "react-redux"; // Import useDispatch for Redux

function DashboardServices({ services }) {
  // State variables for managing component state
  const [open, setOpen] = useState(false); // Modal open/close state
  const [serviceName, setServiceName] = useState(""); // Service title state
  const [description, setDescription] = useState(""); // Service description state
  const [image, setImage] = useState(null); // Selected image state
  const [tags, setTags] = useState(""); // Tags state
  const [link, setLink] = useState(""); // Link state
  const [Loading, setLoading] = useState(false); // Loading state for submission
  const dispatch = useDispatch(); // Get dispatch function from Redux

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading to true
    // Convert tags into an array by splitting on comma and trimming whitespace
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== ""); // Filter out empty tags

    // Construct form data object
    const formData = {
      title: serviceName,
      description: description,
      imageUrl: image,
      tags: tagsArray,
      link: link,
    };

    try {
      // Make a POST request to create a new service
      axios
        .post(`${server}/services/create`, formData, {
          withCredentials: true, // Include credentials in request
        })
        .then((response) => {
          toast.success("Service added successfully"); // Show success notification
          setOpen(false); // Close the modal
          setLoading(false); // Set loading to false
          // Reset form fields
          setServiceName("");
          setDescription("");
          setImage(null);
          setTags("");
          setLink("");
          dispatch(getAllServices()); // Dispatch action to fetch all services
        })
        .catch((error) => {
          setLoading(false); // Set loading to false on error
          toast.error("Failed to add service" + error); // Show error notification
        });
    } catch (error) {
      toast.error("Failed to add service"); // Show error notification on catch
    }
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader(); // Create a FileReader object
    reader.readAsDataURL(file); // Read the file as a data URL
    reader.onloadend = () => {
      setImage(reader.result); // Set image state to the data URL
    };
  };

  return (
    <div className="w-full h-screen p-5 mt-20">
      <div className="flex justify-between">
        <h1 className="text-text-dark text-3xl font-bold">Services</h1>
        <button
          onClick={() => setOpen(true)} // Open the modal when clicked
          className="bg-main-yellow text-text-dark font-bold px-4 py-2 rounded-full"
        >
          Add Service
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="bg-gray-800 bg-opacity-50 absolute inset-0"
            onClick={() => setOpen(false)} // Close the modal when clicking outside
          />
          <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 w-full h-full max-h-screen flex flex-col md:flex-row overflow-y-auto">
            {/* Left Section: Form Inputs */}
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Add Service
              </h2>
              <HiX
                className="text-2xl absolute top-4 right-4 cursor-pointer" // Close icon
                onClick={() => setOpen(false)} // Close the modal when clicked
              />
              <form onSubmit={handleSubmit}>
                {/* Service Title Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Service Title
                  </label>
                  <input
                    type="text"
                    value={serviceName} // Bind input value to serviceName state
                    onChange={(e) => setServiceName(e.target.value)} // Update state on change
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                {/* Service Description Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={description} // Bind textarea value to description state
                    onChange={(e) => setDescription(e.target.value)} // Update state on change
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                    rows={4}
                  />
                </div>
                {/* Image Upload Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    onChange={handleImageChange} // Handle image change
                    accept="image/*" // Accept image files only
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                {/* Tags Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={tags} // Bind input value to tags state
                    onChange={(e) => setTags(e.target.value)} // Update state on change
                    required
                    placeholder="e.g. tag1, tag2"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                {/* Link Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Link</label>
                  <input
                    type="text"
                    value={link} // Bind input value to link state
                    onChange={(e) => setLink(e.target.value)} // Update state on change
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                {/* Action Buttons */}
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={() => setOpen(false)} // Close modal when clicked
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2 transition hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit" // Submit the form
                    className="bg-main-yellow text-text-dark px-4 py-2 rounded-lg transition hover:bg-main-yellow-dark"
                  >
                    {Loading ? "Loading..." : "Add Service"} // Change button text based on loading state
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section: Image Preview */}
            <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
              {image ? (
                <img
                  src={image} // Show selected image
                  alt="Preview"
                  className="rounded-lg border border-gray-300 shadow-md"
                  style={{ maxHeight: "300px", maxWidth: "100%" }} // Limit max dimensions for image
                />
              ) : (
                <div className="text-gray-400 text-center">
                  No image selected // Show message when no image is selected
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {services && services.length > 0 ? (
        <SercicesDashboardOverview services={services} /> // Render services overview if services are available
      ) : (
        <div className="p-4 text-text-dark flex justify-center items-center h-full font-bold">
          No services found // Message when no services are present
        </div>
      )}
    </div>
  );
}

export default DashboardServices; // Export the component
