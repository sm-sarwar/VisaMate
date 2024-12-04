import React from "react";
import { FaPassport, FaFileAlt, FaClock, FaPlane } from "react-icons/fa";
import bg from '../assets/3d-icon-travel-with-airplane.jpg'

const GuidanceSection = () => {
  const steps = [
    {
      id: 1,
      icon: <FaPassport className="text-3xl text-orange-500" />,
      title: "Choose your visa type",
      description: "Determine the Visa type for your travel purpose.",
    },
    {
      id: 2,
      icon: <FaPlane className="text-3xl text-green-500" />,
      title: "Contact our branches",
      description: "Start your transaction by applying to our branches.",
    },
    {
      id: 3,
      icon: <FaFileAlt className="text-3xl text-blue-500" />,
      title: "Submit All Your Documents",
      description: "Collect all the required documents for the process.",
    },
    {
      id: 4,
      icon: <FaClock className="text-3xl text-yellow-500" />,
      title: "Passport delivery",
      description: "Receive your visa, which is finalized after application.",
    },
  ];

  return (
    <div className="bg-white py-12 md:flex justify-between items-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-700">
            Dependable and Trustworthy Visa & Immigration Guidance
          </h2>
          <p className="text-gray-500 mt-2">
            Our team of seasoned professionals understands the complexities of
            immigration laws and visa procedures.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-start bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              {/* Icon and Number */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 mr-4">
                {step.icon}
              </div>

              {/* Title and Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {step.title}
                </h3>
                <p className="text-gray-500 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={bg} 
        className="w-96 opacity-75"
        alt="" />
      </div>
    </div>
  );
};

export default GuidanceSection;
