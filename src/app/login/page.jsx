'use client'; // Enables client-side rendering

// Importing necessary modules and components
import React, { useEffect } from "react";
import { useSelector } from "react-redux"; // Redux hook to access store data
import { useRouter } from "next/navigation"; // Next.js router for navigation
import Login from "@/Admin_Components/Login"; // Login component to render if not authenticated

// Main component for login page
function LoginPage() {
  // Accessing authentication state from Redux store
  const { isAuthenticated, loading } = useSelector((state) => state.user); // Fetch authentication and loading status
  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    // Redirect to the dashboard if the user is authenticated and not loading
    if (isAuthenticated && !loading) {
      router.push("/dashboard"); // Navigate to dashboard if authenticated
    }
  }, [isAuthenticated, router, loading]); // Dependencies to watch for re-running effect

  // Conditionally render the Login component if the user is not authenticated and not loading
  return !isAuthenticated && !loading ? <Login /> : null;
}

export default LoginPage; // Export the component
