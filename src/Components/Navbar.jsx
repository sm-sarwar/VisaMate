
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPassport, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user,signOutUser} = useContext(AuthContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut =()=>{
    signOutUser()
    .then(()=>{
      // console.log("User signed out successfully");
    })
    // .catch(error => console.log ('ERROR',error.message))
  }

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
          
          {user ? (
            <>
              <div className="relative group">
                {/* Profile Image */}
                <img
                  className="w-10 rounded-full cursor-pointer"
                  src={user.photoURL}
                  alt="User Profile"
                />
        
                {/* Tooltip for Display Name */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 bg-gray-800 text-white text-sm rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {user.displayName || "No Name"}
                </div>
              </div>
          
              {/* Log Out Button */}
              <Link
                to="/"
                onClick={handleSignOut}
                className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Register
              </Link>
            </>
          )}
    </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {user ? (
            <>
              <div className="relative group">
                {/* Profile Image */}
                <img
                  className="w-10 rounded-full cursor-pointer"
                  src={user.photoURL}
                  alt="User Profile"
                />
        
                {/* Tooltip for Display Name */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 bg-gray-800 text-white text-sm rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {user.displayName || "No Name"}
                </div>
              </div>
          
              {/* Log Out Button */}
              <Link
                to="/"
                onClick={handleSignOut}
                className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Register
              </Link>
            </>
          )}
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


