'use client'; // Indicating that this component is a client-side component

import { Provider } from "react-redux"; // Importing the Provider component from react-redux to connect Redux with the React application
import Store from '../redux/store'; // Importing the Redux store
import { useEffect } from 'react'; // Importing useEffect for side effects in functional components
import { loadUser } from '@/redux/action/user'; // Importing action to load user data
import { getAllServices } from "@/redux/action/services"; // Importing action to fetch all services
import { getAllProjects } from "@/redux/action/projects"; // Importing action to fetch all projects
import { getAllBlogs } from "@/redux/action/blogs"; // Importing action to fetch all blog posts

// Defining the ReduxProvider functional component that wraps children with the Redux Provider
export default function ReduxProvider({ children }) {
  useEffect(() => {
    // Dispatch actions to load user data and initial application state when the component mounts
    Store.dispatch(loadUser()); // Dispatching the loadUser action to fetch user data
    Store.dispatch(getAllServices()); // Dispatching the getAllServices action to fetch all available services
    Store.dispatch(getAllProjects()); // Dispatching the getAllProjects action to fetch all projects
    Store.dispatch(getAllBlogs()); // Dispatching the getAllBlogs action to fetch all blog posts
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Returning the Provider component to make the Redux store available to all child components
  return <Provider store={Store}>{children}</Provider>;
}
