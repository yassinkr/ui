// components/DashboardHome.jsx
import Image from "next/image";
import React from "react";

const DashboardHome = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-start h-full p-8 bg-bg-light text-text-dark">
      {/* Welcome Message */}
      <h1 className="text-5xl font-bold mb-4 text-center">
        Welcome Back, <span className="text-main-yellow">{user.username}!</span>
      </h1>

      {/* Video Animation */}
      <div className="mb-8">
        <Image
          src="/feature-img.webp" // Replace with your video path
          width={400}
          height={400}
          alt="Feature animation" // Provide a descriptive alt text
          className="rounded-lg shadow-lg" // Add some styling
        />
      </div>

      {/* Description Paragraph */}
      <p className="text-xl text-center max-w-2xl mb-8 font-semibold">
        Manage your data efficiently and effectively. This dashboard provides
        you with all the tools you need to control and monitor your activities.
        Enjoy your stay!
      </p>
      
      {/* Additional User Information (optional) */}
      <div className="text-center">
        {/* Example: Displaying user profile picture */}
        {user.profilePicture && (
          <Image
            src={user.profilePicture}
            alt={`${user.username}'s profile`}
            width={100}
            height={100}
            className="rounded-full mb-4" // Circular profile picture
          />
        )}
        {/* Optional: Account status or additional info */}
        <p className="text-lg">Your account is currently active.</p>
      </div>
    </div>
  );
};

export default DashboardHome;
