import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import signUpPic from '../assets/Sign.png'
import 'animate.css';
const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleToRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const user = { name, email };

    setError("");
    setSuccess(false);

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!regex.test(password)) {
      setError(
        " Please write at least one uppercase and at least one lowercase"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        fetch("https://visa-mate-server.vercel.app/loginUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          navigate("/");
        });
        // .catch(error => console.log(error))
        Swal.fire({
          title: "Good job!",
          text: "Registration successful",
          icon: "success",
        });
        setSuccess(true);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        // console.log('ERROR',error.message)
        setError(error.message);
        setSuccess(false);
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
  return (
    <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 ">
      <div>
        <div className="py-10  flex items-center justify-center ">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate__animated animate__fadeInLeft animate__slow	1s">
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
                  name="name"
                  required
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
                  type={show ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-lg text-gray-700 bg-white border-none shadow-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="btn btn-xs absolute right-4 top-13"
                >
                  {show ? (
                    <FaEyeSlash type="button"></FaEyeSlash>
                  ) : (
                    <FaEye type="button" />
                  )}
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
                <Link
                  to="/auth/login"
                  className="text-cyan-600 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </div>

            {/* Google Social Login Button */}
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
            {error && <div className="text-red-500 text-center">{error}</div>}
          </div>
          <ToastContainer />
        </div>
      </div>
      <div className="animate__animated animate__fadeInRight animate__slow	1s">
        <img className="md:w-[550px]" src={signUpPic} alt="" />
      </div>
    </section>
  );
};

export default Register;
