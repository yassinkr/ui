import { server } from "@/data/server"; // Import the server URL from a configuration file
import { getAllProjects } from "@/redux/action/projects"; // Import the action to get all projects from Redux
import axios from "axios"; // Import axios for making HTTP requests
import Link from "next/link"; // Import Link for client-side navigation
import React, { useState } from "react"; // Import React and useState hook
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux to dispatch actions
import { toast } from "react-toastify"; // Import toast for notifications

function ProjectsDashboardOverview({ projects }) {
  const dispatch = useDispatch(); // Initialize dispatch to interact with Redux
  const [selectedProject, setSelectedProject] = useState(null); // State to track the currently selected project
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to manage the edit modal visibility
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State to manage the delete modal visibility

  // State for editing project details
  const [updatedName, setUpdatedName] = useState(""); // State for updated project name
  const [updatedContent, setUpdatedContent] = useState(""); // State for updated project content
  const [updatedDescription, setUpdatedDescription] = useState(""); // State for updated project description
  const [updatedCategory, setUpdatedCategory] = useState(""); // State for updated project category
  const [mainImageFile, setMainImageFile] = useState(null); // State for the main image file
  const [additionalImages, setAdditionalImages] = useState([]); // State for additional images
  const [loading, setLoading] = useState(false); // State to manage loading state during requests

  // Handle main image selection
  const handleMainImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader(); // Create a new FileReader instance
    reader.readAsDataURL(file); // Read the file as a data URL
    reader.onloadend = () => {
      setMainImageFile(reader.result); // Update the main image state with the file data
    };
  };

  // Handle additional image selection
  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array
    const fileReaders = files.map((file) => {
      const reader = new FileReader(); // Create a new FileReader instance for each file
      reader.readAsDataURL(file); // Read each file as a data URL
      return reader; // Return the reader for later use
    });

    // Wait for all file readers to finish
    Promise.all(
      fileReaders.map(
        (reader) =>
          new Promise((resolve) => {
            reader.onloadend = () => {
              resolve(reader.result); // Resolve with the file data when done
            };
          })
      )
    ).then((images) => {
      setAdditionalImages(images); // Update the state with additional images
    });
  };

  // Handle project edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state to true

    // Prepare updated project data
    const updatedProject = {
      name: updatedName,
      content: updatedContent,
      description: updatedDescription,
      category: updatedCategory,
    };

    try {
      // Create form data with updated project details and images
      const formData = {
        ...updatedProject,
        mainImage: mainImageFile,
        images: additionalImages,
      };

      // Send PUT request to update the project
      const response = await axios.put(
        `${server}/projects/${selectedProject._id}`,
        formData,
        {
          withCredentials: true, // Include credentials for CORS requests
        }
      );

      // Dispatch action to refresh project list and show success notification
      setLoading(false); // Reset loading state
      toast.success("Project updated successfully"); // Show success message
      dispatch(getAllProjects()); // Refresh projects
      handleCloseEditModal(); // Close edit modal
    } catch (error) {
      // Handle errors
      toast.error("Error updating project: " + error.message); // Show error message
      console.error("Error updating project:", error); // Log error
      setLoading(false); // Reset loading state
    }
  };

  // Handle project deletion confirmation
  const handleDeleteConfirm = async () => {
    try {
      setLoading(true); // Set loading state to true
      // Send DELETE request to remove the project
      await axios.delete(
        `${server}/projects/${selectedProject._id}`,
        {
          withCredentials: true, // Include credentials for CORS requests
        }
      );

      // Show success notification and refresh projects
      toast.success("Project deleted successfully");
      dispatch(getAllProjects()); // Refresh projects
      setLoading(false); // Reset loading state
      handleCloseDeleteModal(); // Close delete modal
    } catch (error) {
      // Handle errors
      toast.error("Error deleting project: " + error.message); // Show error message
      console.error("Error deleting project:", error); // Log error
      setLoading(false); // Reset loading state
    }
  };

  // Close the edit modal and reset selected project
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false); // Hide edit modal
    setSelectedProject(null); // Reset selected project
  };

  // Close the delete modal and reset selected project
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false); // Hide delete modal
    setSelectedProject(null); // Reset selected project
  };

  return (
    <section className="py-16"> {/* Main section with padding */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0"> {/* Container for projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> {/* Grid layout for projects */}
          {projects.map((project) => (
            <div
              key={project._id} // Unique key for each project
              className="bg-card-color text-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105" // Card styles
              style={{ backgroundColor: "var(--card-color)" }} // Background color from CSS variable
            >
              <img
                src={project.mainImage} // Main image for the project
                alt={project.name} // Alt text for accessibility
                className="w-full h-48 object-cover" // Image styles
              />
              <div className="p-6"> {/* Card content */}
                <h3
                  className="text-xl font-semibold mb-2" // Project name styles
                  style={{ color: "var(--text-dark)" }} // Text color from CSS variable
                >
                  {project.name} {/* Project name */}
                </h3>
                <p className="text-text-dark mb-4 line-clamp-1"> {/* Project description with line clamp */}
                  {project.description} {/* Project description */}
                </p>
                <div className="flex flex-wrap justify-center"> {/* Category tags container */}
                  {project.category && (
                    <span className="bg-main-yellow text-black py-1 px-3 rounded-full mr-2 mb-2 shadow-md">
                      {project.category} {/* Project category tag */}
                    </span>
                  )}
                </div>
                <div className="flex justify-center gap-3 mt-3 "> {/* Action buttons container */}
                  <button
                    onClick={() => { // Edit button click handler
                      setSelectedProject(project); // Set selected project
                      setUpdatedName(project.name); // Set initial values for editing
                      setUpdatedContent(project.content);
                      setUpdatedDescription(project.description);
                      setUpdatedCategory(project.category);
                      setMainImageFile(null); // Reset the main image file
                      setAdditionalImages([]); // Reset additional images
                      setIsEditModalOpen(true); // Open edit modal
                    }}
                    className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                  >
                    Edit {/* Edit button text */}
                  </button>
                  <button
                    onClick={() => { // Delete button click handler
                      setSelectedProject(project); // Set selected project for deletion
                      setIsDeleteModalOpen(true); // Open delete modal
                    }}
                    className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                  >
                    Delete {/* Delete button text */}
                  </button>
                  <Link href={`/projects/${project._id}`}> {/* Link to project details page */}
                    <span
                      className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                      aria-label={`Read more about ${project.name}`} // Aria label for accessibility
                    >
                      See Project {/* Button text */}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"> {/* Modal background */}
          <div className="bg-white rounded-lg shadow-lg w-96 p-6"> {/* Modal content */}
            <h2 className="text-xl font-bold mb-4">Edit Project</h2> {/* Modal title */}
            <form onSubmit={handleEditSubmit}> {/* Edit form */}
              <div className="mb-4"> {/* Project name input */}
                <label htmlFor="name" className="block text-sm font-semibold mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)} // Update name on change
                  className="border border-gray-300 rounded p-2 w-full" // Input styles
                  required // Make this field required
                />
              </div>
              <div className="mb-4"> {/* Project content input */}
                <label htmlFor="content" className="block text-sm font-semibold mb-1">
                  Project Content
                </label>
                <input
                  type="text"
                  id="content"
                  value={updatedContent}
                  onChange={(e) => setUpdatedContent(e.target.value)} // Update content on change
                  className="border border-gray-300 rounded p-2 w-full" // Input styles
                  required // Make this field required
                />
              </div>
              <div className="mb-4"> {/* Project description input */}
                <label htmlFor="description" className="block text-sm font-semibold mb-1">
                  Project Description
                </label>
                <textarea
                  id="description"
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)} // Update description on change
                  className="border border-gray-300 rounded p-2 w-full" // Input styles
                  required // Make this field required
                />
              </div>
              <div className="mb-4"> {/* Project category input */}
                <label htmlFor="category" className="block text-sm font-semibold mb-1">
                  Project Category
                </label>
                <input
                  type="text"
                  id="category"
                  value={updatedCategory}
                  onChange={(e) => setUpdatedCategory(e.target.value)} // Update category on change
                  className="border border-gray-300 rounded p-2 w-full" // Input styles
                  required // Make this field required
                />
              </div>
              <div className="mb-4"> {/* Main image input */}
                <label className="block text-sm font-semibold mb-1">Main Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageChange} // Handle main image change
                  className="border border-gray-300 rounded p-2 w-full" // Input styles
                />
              </div>
              <div className="mb-4"> {/* Additional images input */}
                <label className="block text-sm font-semibold mb-1">Additional Images</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleAdditionalImagesChange} // Handle additional images change
                  className="border border-gray-300 rounded p-2 w-full" // Input styles
                />
              </div>
              <button
                type="submit"
                className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Updating..." : "Update Project"} {/* Update button text */}
              </button>
            </form>
            <button
              onClick={handleCloseEditModal} // Close edit modal
              className="mt-4 text-red-500"
            >
              Cancel {/* Cancel button text */}
            </button>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"> {/* Modal background */}
          <div className="bg-white rounded-lg shadow-lg w-96 p-6"> {/* Modal content */}
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2> {/* Modal title */}
            <p>Are you sure you want to delete this project? This action cannot be undone.</p> {/* Confirmation message */}
            <div className="flex justify-between mt-4"> {/* Button container */}
              <button
                onClick={handleDeleteConfirm} // Confirm deletion
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Delete {/* Delete button text */}
              </button>
              <button
                onClick={handleCloseDeleteModal} // Close delete modal
                className="bg-gray-300 text-black py-2 px-4 rounded-lg"
              >
                Cancel {/* Cancel button text */}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsDashboardOverview; // Export the component for use in other parts of the application
