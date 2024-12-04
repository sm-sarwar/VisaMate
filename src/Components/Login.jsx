import { FcGoogle } from "react-icons/fc";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const handleToLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user ={email,password}
        console.log(user)
        alert("Login Successful!");
    };
  return (
    <div className=" py-10 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h1>
        {/* Login Form */}
        <form onSubmit={handleToLogin}>
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
          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg text-gray-700 bg-white border-none shadow-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
          </div>
          {/* Forget Password */}
          <div className="text-right mb-4">
            <a
              href="/forgot-password"
              className="text-cyan-600 text-sm hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-cyan-600 text-white rounded-lg shadow-lg hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300"
            >
              Login
            </button>
          </div>
          </form>

        {/* Register Link */}
        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/auth/register"
              className="text-cyan-600 hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>

        {/* Social Login Button (Google) */}
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

export default Login;
