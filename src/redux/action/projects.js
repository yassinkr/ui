import { server } from "@/data/server"; // Import the server URL configuration
import axios from "axios"; // Import axios for making HTTP requests

// Action creator for fetching all projects
export const getAllProjects = () => async (dispatch) => {
  try {
    // Dispatch an action to indicate that the request has started
    dispatch({
      type: "getAllProjectsRequest", // Action type for the request
    });

    // Make an HTTP GET request to fetch projects from the server
    const { data } = await axios.get(`${server}/projects`); // Destructure the response to get the data

    // Dispatch an action to indicate that the projects have been successfully fetched
    dispatch({
      type: "getAllProjectsSuccess", // Action type for successful fetch
      payload: data.projects, // The fetched projects, ensure this matches the API response structure
    });
  } catch (error) {
    // Dispatch an action to indicate that the request failed
    dispatch({
      type: "getAllProjectsFailed", // Action type for failed fetch
      payload: error.response?.data?.message || "Failed to fetch projects", // Safely access error message or provide a fallback
    });
  }
};
