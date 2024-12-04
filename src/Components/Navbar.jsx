import React from "react";
import { Link } from "react-router-dom";
import { FaPassport } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-cyan-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div className="flex items-center">
          <FaPassport className="text-2xl mr-2" />
          <Link to="/" className="text-xl font-bold">
            VisaMate
          </Link>
        </div>

        {/* Center: Routes */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/all-visas" className="hover:text-gray-300">
            All Visas
          </Link>
          <Link to="/add-visa" className="hover:text-gray-300">
            Add Visa
          </Link>
          <Link to="/my-visas" className="hover:text-gray-300">
            My Added Visas
          </Link>
          <Link to="/my-applications" className="hover:text-gray-300">
            My Applications
          </Link>
        </div>

        {/* Right: Login/Register */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
