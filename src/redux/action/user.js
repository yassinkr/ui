import { server } from "@/data/server"; // Import the server URL configuration
import axios from "axios"; // Import axios for making HTTP requests

// Action creator for loading user data
export const loadUser = () => async (dispatch) => {
  try {
    // Dispatch an action to indicate that the user loading request has started
    dispatch({
      type: "LoadUserRequest", // Action type for the request
    });

    // Make an HTTP GET request to fetch user data from the server
    const { data } = await axios.get(`${server}/users/getuser`, {
      withCredentials: true, // Include credentials for cross-origin requests (e.g., cookies)
    });

    // Dispatch an action to indicate that the user data has been successfully loaded
    dispatch({
      type: "LoadUserSuccess", // Action type for successful fetch
      payload: data.user, // The fetched user data, ensure this matches the API response structure
    });
  } catch (error) {
    // Dispatch an action to indicate that the request failed
    dispatch({
      type: "LoadUserFail", // Action type for failed fetch
      payload: error.response?.data?.message || "Failed to load user", // Safely access error message or provide a fallback
    });
  }
};
