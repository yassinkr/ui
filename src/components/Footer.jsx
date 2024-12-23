// Footer.jsx
import React from "react"; // Importing React
import Link from "next/link"; // Importing Link for client-side navigation
import { footerData } from "../data/data"; // Importing footer data (adjust the path as needed)

const Footer = () => {
  // Destructuring footer data for easy access
  const { companyInfo, quickLinks, contactInfo, socialLinks } = footerData;

  return (
    <footer className="bg-[#1A1A1A] text-white py-12 max-w-full ">
      {" "}
      {/* Footer section with background color and padding */}
      <div className="px-4 lg:px-3">
        {" "}
        {/* Container for inner content with responsive padding */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {" "}
          {/* Grid layout for footer content */}
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Company</h3>{" "}
            {/* Company title */}
            <p className="text-gray-400 mb-6">{companyInfo.description}</p>{" "}
            {/* Company description */}
            <p className="text-gray-400">{companyInfo.address}</p>{" "}
            {/* Company address */}
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>{" "}
            {/* Quick links title */}
            <ul className="space-y-2">
              {" "}
              {/* List of quick links with vertical spacing */}
              {quickLinks.map(
                (
                  link,
                  index // Mapping through quick links
                ) => (
                  <li key={index}>
                    {" "}
                    {/* Using index as the key */}
                    <Link href={link.href}>
                      {" "}
                      {/* Link component for navigation */}
                      <div className="text-gray-400 hover:text-yellow-400 transition">
                        {" "}
                        {/* Link styling */}
                        {link.title} {/* Link text */}
                      </div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>{" "}
            {/* Contact title */}
            <p className="text-gray-400 mb-2">
              Email: {contactInfo.email}
            </p>{" "}
            {/* Email address */}
            <p className="text-gray-400 mb-2">
              Phone: {contactInfo.phone}
            </p>{" "}
            {/* Phone number */}
            <p className="text-gray-400">Address: {contactInfo.address}</p>{" "}
            {/* Physical address */}
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>{" "}
            {/* Social media title */}
            <div className="flex space-x-4">
              {" "}
              {/* Flexbox for social media icons */}
              {socialLinks.map((social, index) => {
                // Mapping through social links
                const Icon = social.icon; // Get the icon component
                return (
                  <Link
                    key={index} // Using index as the key
                    href={social.url} // Link to social media URL
                    target="_blank" // Opens link in a new tab
                    rel="noopener noreferrer" // Security measures for opening new tabs
                  >
                    <Icon
                      size={24} // Setting icon size
                      className="text-gray-400 hover:text-yellow-400 transition" // Icon styling with hover effect
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
          {" "}
          {/* Footer bottom styling */}
          <p>
            &copy; {new Date().getFullYear()} Our Company. All rights reserved.{" "}
            {/* Copyright notice with dynamic year */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporting the Footer component for use in other parts of the application
