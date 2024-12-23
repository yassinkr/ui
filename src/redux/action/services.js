import { server } from "@/data/server"; // Import the server URL configuration
import axios from "axios"; // Import axios for making HTTP requests

// Action creator for fetching all services
export const getAllServices = () => async (dispatch) => {
  try {
    // Dispatch an action to indicate that the request has started
    dispatch({
      type: "getAllServicesRequest", // Action type for the request
    });

    // Make an HTTP GET request to fetch services from the server
    const { data } = await axios.get(`${server}/services`); // Destructure the response to get the data

    // Dispatch an action to indicate that the services have been successfully fetched
    dispatch({
      type: "getAllServicesSuccess", // Action type for successful fetch
      payload: data.services, // The fetched services, ensure this matches the API response structure
    });
  } catch (error) {
    // Dispatch an action to indicate that the request failed
    dispatch({
      type: "getAllServicesFailed", // Action type for failed fetch
      payload: error.response?.data?.message || "Failed to fetch services", // Safely access error message or provide a fallback
    });
  }
};
