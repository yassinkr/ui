"use client"; // Indicates that this component is intended for client-side rendering
import { FaEnvelope, FaLock } from "react-icons/fa"; // Importing icon components for email and lock
import { useState } from "react"; // Importing useState hook for managing component state
import Image from "next/image"; // Importing Image component from Next.js for optimized image rendering
import { server } from "@/data/server"; // Importing the server URL for API requests
import axios from "axios"; // Importing axios for making HTTP requests
import { toast } from "react-toastify"; // Importing toast for notifications

const Login = () => {
  // State variables for username, password, and loading state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State to indicate loading state during login

  // Function to handle login submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Set loading state to true
    await axios
      .post(`${server}/users/login`, { // Making a POST request to the login endpoint
        username,
        password,
      },
      {
        withCredentials: true, // Sending cookies along with the request
      })
      .then((res) => {
        setLoading(false); // Set loading state to false on successful login
        toast.success("Login Successful"); // Show success notification
        window.location.reload(true); // Reload the page on successful login
      })
      .catch((err) => {
        console.log(err); // Log any errors to the console
        toast.error(err.response.data.message); // Show error notification with the error message
        setLoading(false); // Set loading state to false on error
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-light"> {/* Center the login form */}
      <div className="bg-card-white shadow-lg rounded-lg p-8 max-w-md w-full"> {/* Container for the login form */}
        {/* Logo */}
        <div className="text-center mb-8"> {/* Centered logo section */}
          <Image
            width={140}
            height={140}
            src="/logo.png" alt="Logo" className="mx-auto" /> {/* Logo image */}
          <h2 className="text-2xl font-semibold text-text-dark"> {/* Welcome text */}
            Welcome Back
          </h2>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6 font-semibold"> {/* Form with spacing */}
          {/* Username Input */}
          <div>
            <label className="block mb-2 text-text-dark " htmlFor="username"> {/* Label for username */}
              Username
            </label>
            <div className="flex items-center border border-main-yellow rounded-md bg-card-hover"> {/* Input container */}
              <FaEnvelope className="mx-3 text-main-yellow" /> {/* Email icon */}
              <input
                id="username"
                type="text"
                placeholder="Enter your username" // Placeholder text for username input
                className="w-full p-3 bg-card-hover outline-none focus:bg-card-white" // Input styling
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username state
                required // Make input required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-2 text-text-dark" htmlFor="password"> {/* Label for password */}
              Password
            </label>
            <div className="flex items-center border border-main-yellow rounded-md bg-card-hover"> {/* Input container */}
              <FaLock className="mx-3 text-main-yellow" /> {/* Lock icon */}
              <input
                id="password"
                type="password" // Type is password to hide input
                placeholder="Enter your password" // Placeholder text for password input
                className="w-full p-3 bg-card-hover outline-none focus:bg-card-white" // Input styling
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                required // Make input required
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="text-center"> {/* Center the button */}
            <button
              type="submit" // Button type is submit
              className="w-full py-3 px-4 bg-main-yellow text-text-dark rounded-md hover:bg-hover-yellow transition-all duration-300" // Button styling
            >
             {
              loading ? "Loading..." : "Login" // Show loading text if in loading state
             }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; // Exporting the Login component for use in other parts of the application
