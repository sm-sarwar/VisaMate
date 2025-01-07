
import React from "react";
import { Link } from "react-router-dom";
import error from '../assets/404.png'

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
