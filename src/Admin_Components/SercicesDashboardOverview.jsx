import { server } from "@/data/server"; // Import the server URL for API requests
import { getAllServices } from "@/redux/action/services"; // Import action to fetch all services
import axios from "axios"; // Import axios for HTTP requests
import Link from "next/link"; // Import Link for client-side navigation
import React, { useState } from "react"; // Import React and useState hook
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux for dispatching actions
import { toast } from "react-toastify"; // Import toast for displaying notifications

function SercicesDashboardOverview({ services }) {
  const dispatch = useDispatch(); // Initialize dispatch for Redux actions
  const [selectedService, setSelectedService] = useState(null); // State to track the currently selected service for editing or deleting
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to control the visibility of the edit modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State to control the visibility of the delete confirmation modal

  // States for managing the editing form inputs
  const [updatedTitle, setUpdatedTitle] = useState(""); // State for updated service title
  const [updatedDescription, setUpdatedDescription] = useState(""); // State for updated service description
  const [updatedTags, setUpdatedTags] = useState(""); // State for updated tags
  const [updatedLink, setUpdatedLink] = useState(""); // State for updated service link
  const [imageFile, setImageFile] = useState(null); // State for the uploaded image file
  const [loading, setLoading] = useState(false); // State to indicate loading status

  // Function to handle image file selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader(); // Create a FileReader to read the file
    reader.readAsDataURL(file); // Read the file as a data URL
    reader.onloadend = () => {
      setImageFile(reader.result); // Set the image file state with the data URL
    };
  };

  // Function to handle form submission for editing a service
  const handleEditSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    // Prepare the updated service data
    const tagsArray = updatedTags.split(",").map((tag) => tag.trim()); // Convert comma-separated tags to an array

    const updatedService = {
      title: updatedTitle,
      description: updatedDescription,
      tags: tagsArray,
      link: updatedLink,
    };

    try {
      const formData = {
        ...updatedService,
        imageUrl: imageFile, // Include the image URL in the form data
      };

      // Make a PUT request to update the service
      const response = await axios.put(
        `${server}/services/${selectedService._id}`,
        formData,
        {
          withCredentials: true, // Include credentials with the request
        }
      );

      // Notify success and fetch all services again
      toast.success("Service updated successfully");
      dispatch(getAllServices());
      handleCloseEditModal(); // Close the edit modal
    } catch (error) {
      // Handle errors during the update process
      toast.error(
        "Error updating service: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Error updating service:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Function to handle deletion confirmation
  const handleDeleteConfirm = async () => {
    try {
      setLoading(true); // Set loading state to true

      // Make a DELETE request to delete the selected service
      const response = await axios.delete(
        `${server}/services/${selectedService._id}`,
        {
          withCredentials: true, // Include credentials with the request
        }
      );

      // Notify success and fetch all services again
      toast.success("Service deleted successfully");
      dispatch(getAllServices());
      setLoading(false); // Reset loading state
      handleCloseDeleteModal(); // Close the delete modal
    } catch (error) {
      // Handle errors during the deletion process
      toast.error("Error deleting service: " + (error.response?.data?.message || error.message));
      console.error("Error deleting service:", error);
      setLoading(false); // Reset loading state
    }
  };

  // Function to close the edit modal and reset the selected service
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedService(null); // Reset the selected service
  };

  // Function to close the delete confirmation modal and reset the selected service
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedService(null); // Reset the selected service
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-card-color text-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              style={{ backgroundColor: "var(--card-color)" }} // Set background color from CSS variable
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover" // Style for the service image
              />
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--text-dark)" }} // Set text color from CSS variable
                >
                  {service.title} {/* Display the service title */}
                </h3>
                <p className="text-text-dark mb-4 line-clamp-1">
                  {service.description} {/* Display the service description */}
                </p>
                <div className="flex flex-wrap justify-center">
                  {service.tags &&
                    service.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-main-yellow text-black py-1 px-3 rounded-full mr-2 mb-2 shadow-md"
                      >
                        {tag} {/* Display service tags */}
                      </span>
                    ))}
                </div>
                <div className="flex justify-center gap-3 mt-3 ">
                  <button
                    onClick={() => {
                      setSelectedService(service); // Set the selected service for editing
                      setUpdatedTitle(service.title); // Pre-fill title
                      setUpdatedDescription(service.description); // Pre-fill description
                      setUpdatedTags(service.tags.join(", ")); // Pre-fill tags
                      setUpdatedLink(service.link); // Pre-fill link
                      setImageFile(null); // Reset the image file
                      setIsEditModalOpen(true); // Open edit modal
                    }}
                    className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                  >
                    Edit {/* Edit button */}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedService(service); // Set the selected service for deletion
                      setIsDeleteModalOpen(true); // Open delete modal
                    }}
                    className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                  >
                    Delete {/* Delete button */}
                  </button>
                  <Link href={service.link}>
                    <span
                      className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                      aria-label={`Read more about ${service.title}`} // Accessible label for screen readers
                    >
                      See Service {/* Link to view service */}
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
            <h2 className="text-xl font-semibold mb-4">Edit Service</h2>
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)} // Update title on change
                placeholder="Service Title"
                className="border mb-2 p-2 w-full" // Input styling
                required
              />
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)} // Update description on change
                placeholder="Service Description"
                className="border mb-2 p-2 w-full" // Input styling
                required
              />
              <input
                type="text"
                value={updatedTags}
                onChange={(e) => setUpdatedTags(e.target.value)} // Update tags on change
                placeholder="Tags (comma-separated)"
                className="border mb-2 p-2 w-full" // Input styling
              />
              <input
                type="text"
                value={updatedLink}
                onChange={(e) => setUpdatedLink(e.target.value)} // Update link on change
                placeholder="Service Link"
                className="border mb-2 p-2 w-full" // Input styling
                required
              />
              <input
                type="file"
                onChange={handleImageChange} // Handle image change
                className="border mb-2 p-2 w-full" // Input styling
              />
              {imageFile && (
                <img
                  src={imageFile}
                  alt="Selected"
                  className="w-full h-48 object-cover mb-2" // Style for preview image
                />
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseEditModal} // Close edit modal without saving
                  className="bg-gray-400 text-white py-2 px-4 rounded-md mr-2"
                >
                  Cancel {/* Cancel button */}
                </button>
                <button
                  type="submit"
                  className="bg-main-yellow hover:bg-hover-yellow text-black py-2 px-4 rounded-md"
                  disabled={loading} // Disable button if loading
                >
                  {loading ? "Saving..." : "Save Changes"} {/* Submit button */}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">
              Are you sure you want to delete this service? {/* Confirmation prompt */}
            </h2>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleCloseDeleteModal} // Close delete modal without deleting
                className="bg-gray-400 text-white py-2 px-4 rounded-md mr-2"
              >
                Cancel {/* Cancel button */}
              </button>
              <button
                onClick={handleDeleteConfirm} // Confirm deletion
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                disabled={loading} // Disable button if loading
              >
                {loading ? "Deleting..." : "Delete"} {/* Delete button */}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SercicesDashboardOverview; // Export the component for use in other parts of the application
