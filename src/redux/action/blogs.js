// Import the server configuration and axios for making HTTP requests
import { server } from "@/data/server"; // Ensure this is correctly pointing to your server config
import axios from "axios";

// Action creator to fetch all blog posts
export const getAllBlogs = () => async (dispatch) => {
  try {
    // Dispatch an action indicating the request for blogs has started
    dispatch({
      type: "getAllBlogsRequest",
    });

    // Make an asynchronous GET request to fetch blog posts
    const { data } = await axios.get(`${server}/blogs`); // Use destructuring to get data directly

    // Dispatch a success action with the fetched blog posts
    dispatch({
      type: "getAllBlogsSuccess",
      payload: data.blogPosts, // Ensure this matches the structure returned by your API
    });
  } catch (error) {
    // Dispatch a failure action if the request fails
    dispatch({
      type: "getAllBlogsFailed",
      payload: error.response?.data?.message || "Failed to fetch blogs", // Safely access error message
    });
  }
};
