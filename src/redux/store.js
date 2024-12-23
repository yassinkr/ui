// Import necessary functions and reducers from Redux Toolkit and local reducers
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";        // Reducer for managing user state
import { servicesReducer } from "./reducers/services";  // Reducer for managing services state
import { projectsReducer } from "./reducers/projects";  // Reducer for managing projects state
import { blogsReducer } from "./reducers/blogs";        // Reducer for managing blogs state

// Create the Redux store with the configured reducers
const Store = configureStore({
  reducer: {
    user: userReducer,             // State slice for user information
    services: servicesReducer,     // State slice for services data
    projects: projectsReducer,     // State slice for projects data
    blogs: blogsReducer,           // State slice for blogs data
  },
});

// Export the configured store as the default export
export default Store;
