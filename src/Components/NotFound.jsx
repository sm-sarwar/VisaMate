import error from '../assets/Error.jpg'
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Image */}
      <img
        src={error} // Replace with your desired image URL
        alt="404 Not Found"
        className="w-1/2 max-w-md"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mt-6">Oops! Page Not Found</h1>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-center max-w-md">
        The page you're looking for doesn't exist. It might have been removed, or you might have entered the wrong URL.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 bg-cyan-600 text-white px-6 py-2 rounded shadow hover:bg-cyan-700 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
