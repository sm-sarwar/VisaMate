import React from "react";
import { FaRegClipboard, FaFileAlt, FaRegSmileBeam } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const StepCard = ({ step, title, description, Icon }) => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="mb-4 text-red-500 text-4xl">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold mb-2">{step}</h3>
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

const VisaProcess = () => {
  return (
    <div className="bg-gray-100 py-12 ">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          Get your visa approved in 3 easy simple steps
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-screen-xl mx-auto">
        <div data-aos="fade-right">
          <StepCard
            step="STEP 01"
            title="Complete Online Registrations"
            description="These cases are perfectly simple and easy to distinguish."
            Icon={FaRegClipboard}
            className="text-center"
          />
        </div>
        <div data-aos="fade-up">
          <StepCard
            step="STEP 02"
            title="Documents and Payments"
            description="These cases are perfectly simple and easy to distinguish."
            Icon={FaFileAlt}
          />
        </div>
        <div data-aos="fade-left">
          <StepCard
            step="STEP 03"
            title="Receive your Visa Now"
            description="These cases are perfectly simple and easy to distinguish."
            Icon={FaRegSmileBeam}
          />
        </div>
      </div>
    </div>
  );
};

export default VisaProcess;
