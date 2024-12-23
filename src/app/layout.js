// Import necessary modules and components
import localFont from "next/font/local"; // Importing the local font utility from Next.js
import "./globals.css"; // Importing global CSS styles for the application
import ReduxProvider from "@/components/ReduxProvider"; // Importing a custom Redux provider component for managing global state
import { ToastContainer } from "react-toastify"; // Importing ToastContainer for displaying toast notifications
import "react-toastify/dist/ReactToastify.css"; // Importing the CSS for the toast notifications

// Define and configure local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Specifies the path to the font file for Geist Sans
  variable: "--font-geist-sans", // Declares a custom CSS variable for the font
  weight: "100 900", // Sets the weight range for this font
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Specifies the path to the font file for Geist Mono
  variable: "--font-geist-mono", // Declares a custom CSS variable for this font
  weight: "100 900", // Sets the weight range for this font
});

// Define metadata for the document (used in SEO, title bar, etc.)
export const metadata = {
  title: "IT Company by Meriem", // Sets the document title
  description: "IT Company by Meriem", // Sets the document description
};

// Root layout component for the application
export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* Defines the document language as English */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        // Applies the custom font CSS variables and enables anti-aliasing for smoother text
      >
        {/* Wraps the application with the ReduxProvider for global state management */}
        <ReduxProvider>
          {children} {/* Renders the children elements (the rest of the app's components) */}
          <ToastContainer
            position="bottom-center" // Sets the position of the toast notifications
            autoClose={5000} // Closes the toast after 5 seconds
            hideProgressBar={false} // Shows a progress bar for the toast notifications
            newestOnTop={false} // Does not place the newest toast on top
            closeOnClick // Closes the toast when clicked
            rtl={false} // Disables right-to-left text alignment
            pauseOnFocusLoss // Pauses the toast timer when the window loses focus
            draggable // Allows the toast to be dragged around
            pauseOnHover // Pauses the toast timer when hovered over
            theme="dark" // Sets the toast theme to dark
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
