import React from "react";
import { FaCheckCircle, FaRegHandshake } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import missionPic from "../assets/Bussiness.png";

const AboutUsPage = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
     <nav className='sticky top-0 z-50 '>
            <Navbar></Navbar>
        </nav>

      {/* Header Section */}
      <header className="text-center p-8 bg-base-200 ">
        <h1 className="text-4xl font-bold my-4">
          Welcome to <span className="text-cyan-600">VisaMate</span>
        </h1>
        <p className="text-lg m2-6">
          Your trusted companion for all your visa-related needs.
        </p>
        <p className="text- ">
          Making visa applications simple, efficient, and stress-free.
        </p>
      </header>

      {/* Mission Section */}
      <section className="max-w-screen-xl mx-auto py-10">
        <h2 className="text-3xl font-semibold text-cyan-700 text-center mt-5">
          Our Mission
        </h2>
        <div
          className=" grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center "
          data-aos="fade-up"
        >
          <div
            className="text-center rounded-lg p-16 shadow bg-blue-50"
            data-aos="fade-right"
          >
            <p className="text-lg text-gray-700 ">
              At <strong>VisaMate</strong>, our mission is to simplify the visa
              application process, making it seamless, efficient, and
              stress-free for everyone. We aim to provide an easy-to-use
              platform that guides you through every step of the way, ensuring
              your visa application is smooth and successful.
            </p>
          </div>
          <div data-aos="fade-left">
            <img src={missionPic} className="md:w-96" alt="" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Cards */}
      <section className="bg-white py-16" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center text-cyan-700 mb-8">
          Why Choose Us?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            data-aos="fade-right"
          >
            <FaCheckCircle className="text-green-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-cyan-700">
              Streamlined Process
            </h3>
            <p className="text-gray-600 mt-4">
              From document preparation to tracking your application, we provide
              tools to make the process hassle-free.
            </p>
          </div>
          <div
            className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            data-aos="fade-up"
          >
            <FaRegHandshake className="text-cyan-700 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-cyan-700">
              Expert Guidance
            </h3>
            <p className="text-gray-600 mt-4">
              Benefit from our resources and tips curated by visa experts to
              ensure accuracy and success.
            </p>
          </div>
          <div
            className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            data-aos="fade-left"
          >
            <FaCheckCircle className="text-green-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-cyan-700">
              Secure and Reliable
            </h3>
            <p className="text-gray-600 mt-4">
              Your data security is our top priority. We use state-of-the-art
              technology to safeguard your information.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className=" py-16" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-center mb-6">
          Whether you’re planning to study, work, or travel abroad,{" "}
          <strong>VisaMate</strong> is here <br /> to help you achieve your
          dreams.
        </p>
        <div className="text-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-xl">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
