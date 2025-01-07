import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaQuestionCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import questionPng from "../assets/question.png";
import contactPic from "../assets/ContactPic.png";

const SupportPage = () => {
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
        <h1 className="text-4xl font-bold mb-4 text-cyan-600">Support</h1>
        <p className="text-lg">
          We're here to help! Find answers to your questions or contact our
          support team.
        </p>
      </header>

      {/* FAQ Section */}
      <section className="max-w-screen-xl mx-auto mt-16">
        <h2 className="text-4xl text-center font-bold text-cyan-600 mb-5">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
              >
                <div className="collapse-title text-xl font-medium flex gap-5 items-center">
                  <FaQuestionCircle /> <span>How do I reset my password?</span>
                </div>
                <div className="collapse-content">
                  <p>
                    Go to the login page, click on "Forgot Password," and follow
                    the instructions to reset your password.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
              >
                <div className="collapse-title text-xl font-medium flex gap-5 items-center">
                  <FaQuestionCircle />{" "}
                  <span>How do I track my visa application?</span>
                </div>
                <div className="collapse-content">
                  <p>
                    Use the tracking tool on your dashboard to monitor the
                    status of your application.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
              >
                <div className="collapse-title text-xl font-medium flex gap-5 items-center">
                  <FaQuestionCircle />{" "}
                  <span>What documents are required for my visa?</span>
                </div>
                <div className="collapse-content">
                  <p>
                    Check the document checklist on the application page for
                    your specific visa type.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
              >
                <div className="collapse-title text-xl font-medium flex gap-5 items-center">
                  <FaQuestionCircle /> <span>How do I contact support?</span>
                </div>
                <div className="collapse-content">
                  <p>
                    You can contact us via email or phone. Details are provided
                    in the "Contact Us" section below.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <img src={questionPng} className="md:w-[450px]" alt="" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-100 py-10 ">
        <h2 className="text-3xl font-bold text-center text-cyan-700 my-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl mx-auto">
          <div data-aos="fade-right">
            <img  src={contactPic} className="md:w-[450px]" alt="" />
          </div>
          <div className="max-w-3xl" data-aos="fade-left">
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-white" data-aos="fade-up">
        <div>
          <div className="py-16 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-cyan-700 mb-8">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <FaPhone className="text-4xl text-green-500 mb-4" />
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 234 567 890</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaEnvelope className="text-4xl text-cyan-500 mb-4" />
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">support@visamate.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaMapMarkerAlt className="text-4xl text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 VisaMate Street, New York, NY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;
