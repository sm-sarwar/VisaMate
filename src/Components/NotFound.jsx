import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-gray-500 mt-2">
        It might have been removed, or the URL is incorrect.
      </p>
      <div className="mt-6">
        <Link to="/">
          <button className="btn bg-[#4A90E2] text-white">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
