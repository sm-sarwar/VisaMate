import { FcGoogle } from "react-icons/fc";
import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";
import loginPic from '../assets/Login.png'
import 'animate.css';
const Login = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleToLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success("Login Successful!", { position: "top-center" });
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`, { position: "top-center" });
      });
  };

  const handleSignWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Google Login Successful!", { position: "top-center" });
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`, { position: "top-center" });
      });
  };

  const forgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please enter valid email");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Password Reset email sent , please check your email");
        })
        .catch();
    }
  };

  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto ">
      <div className="">
        <div className=" py-10 flex items-center justify-center ">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate__animated animate__fadeInLeft animate__slow	1s">
            {/* Title */}
            <h1 className="text-2xl font-bold text-center text-gray-700 mb-6 ">
              Login
            </h1>
            {/* Login Form */}
            <form onSubmit={handleToLogin} className="">
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
                  ref={emailRef}
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
                  onClick={forgetPassword}
                  href="#"
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
                <Link
                  to="/auth/register"
                  className="text-cyan-600 hover:underline"
                >
                  Register here
                </Link>
              </p>
            </div>

            {/* Social Login Button (Google) */}
            <div className="mt-6 text-center">
              <button
                onClick={handleSignWithGoogle}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 flex justify-center items-center gap-5"
              >
                <span className="text-2xl">
                  <FcGoogle />
                </span>
                Login with Google
              </button>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
      <div className="animate__animated animate__fadeInRight animate__slow	1s">
        <img className="md:w-[550px]" src={loginPic} alt="" />
      </div>
    </section>
  );
};

export default Login;
