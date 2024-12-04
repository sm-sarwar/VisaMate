import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
    const [show, setShow]= useState(false)

    const handleToRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const user ={name, email, password, photo}
        console.log(user);
     } // 
  return (
    <div className="py-10  flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Register
        </h1>
        {/* Registration Form */}
        <form onSubmit={handleToRegister}>
          {/* Name Field */}
          <div className="mb-4">
            <label
            htmlFor="name"
              
              className="block text-gray-600 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" required
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg text-gray-700 bg-white border-none shadow-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg text-gray-700 bg-white border-none shadow-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
          </div>

          {/* Photo URL Field */}
          <div className="mb-4">
            <label
              htmlFor="photo-url"
              className="block text-gray-600 font-medium mb-2"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photo-url"
              name="photo"
              required
              placeholder="Enter your photo URL"
              className="w-full px-4 py-2 rounded-lg text-gray-700 bg-white border-none shadow-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-2 "
            >
              Password
            </label>
            <input
              type={show ? 'text': 'password'} 
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg text-gray-700 bg-white border-none shadow-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
            <button type='button' onClick={()=>{setShow(!show)}}               
                className='btn btn-xs absolute right-4 top-13'>
                {
                  show ? <FaEyeSlash type='button'></FaEyeSlash>:<FaEye type='button' />
                }
            </button>
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-cyan-600 text-white rounded-lg shadow-lg hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/auth/login"
              className="text-cyan-600 hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>

        {/* Google Social Login Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              console.log("Google Login (OAuth) button clicked");
              // Add your Google login integration here
            }}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 flex justify-center items-center gap-5"
          >
            <span className="text-2xl"><FcGoogle /></span>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
