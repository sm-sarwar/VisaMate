
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPassport, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-cyan-600 text-white shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        <div className="flex items-center">
          <FaPassport className="text-2xl mr-2" />
          <Link to="/" className="text-xl font-bold">
            VisaMate
          </Link>
        </div>

        
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/all-visas" className="hover:text-gray-300">
            All Visas
          </NavLink>
          <NavLink to="/add-visa" className="hover:text-gray-300">
            Add Visa
          </NavLink>
          <NavLink to="/my-visas" className="hover:text-gray-300">
            My Added Visas
          </NavLink>
          <NavLink to="/my-applications" className="hover:text-gray-300">
            My Applications
          </NavLink>
        </div>

     
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/auth/login"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
          >
            Login
          </NavLink>
          <NavLink
            to="/auth/register"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
          >
            Register
          </NavLink>
        </div>

    
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink
            to="/auth/login"
            className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
          >
            Login
          </NavLink>
          <NavLink
            to="/auth/register"
            className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
          >
            Register
          </NavLink>
          <hr className="border-gray-200" />
          <NavLink to="/" className="block hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/all-visas" className="block hover:text-gray-300">
            All Visas
          </NavLink>
          <NavLink to="/add-visa" className="block hover:text-gray-300">
            Add Visa
          </NavLink>
          <NavLink to="/my-visas" className="block hover:text-gray-300">
            My Added Visas
          </NavLink>
          <NavLink to="/my-applications" className="block hover:text-gray-300">
            My Applications
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


