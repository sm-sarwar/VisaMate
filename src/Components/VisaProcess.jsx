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
        {/* From Uiverse.io by Uncannypotato69  */}
        <div className="div  bg-white m-auto rounded-[1em] overflow-hidden relative group p-10 z-0">
          <div className="circle absolute h-28 w-28 -top-[2.5em] -right-[2.5em] rounded-full bg-cyan-500 group-hover:scale-[800%] duration-500 z-[-1] op"></div>
          <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
            <i className="fa-solid fa-arrow-right"></i>
          </button>

          <div className="z-20  group-hover:text-white duration-500 ">
            <div className="text-center space-y-2">
              <p className="text-lg uppercase font-semibold">Step 1</p>
              <h2 className="text-xl font-bold">
                Complete Online Registrations
              </h2>
              <p className="text-lg opacity-80">
                These cases are perfectly simple and easy to distinguish.
              </p>
            </div>
          </div>
        </div>
        <div className="div  bg-white m-auto rounded-[1em] overflow-hidden relative group p-10 z-0">
          <div className="circle absolute h-28 w-28 -top-[2.5em] -right-[2.5em] rounded-full bg-cyan-500 group-hover:scale-[800%] duration-500 z-[-1] op"></div>
          <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
            <i className="fa-solid fa-arrow-right"></i>
          </button>

          <div className="z-20  group-hover:text-white duration-500 ">
            <div className="text-center space-y-2">
              <p className="text-lg uppercase font-semibold">Step 2</p>
              <h2 className="text-xl font-bold">Document And Payment</h2>
              <p className="text-lg opacity-80">
                These cases are perfectly simple and easy to distinguish.
              </p>
            </div>
          </div>
        </div>
        <div className="div  bg-white m-auto rounded-[1em] overflow-hidden relative group p-10 z-0">
          <div className="circle absolute h-28 w-28 -top-[2.5em] -right-[2.5em] rounded-full bg-cyan-500 group-hover:scale-[800%] duration-500 z-[-1] op"></div>
          <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
            <i className="fa-solid fa-arrow-right"></i>
          </button>

          <div className="z-20  group-hover:text-white duration-500 ">
            <div className="text-center space-y-2">
              <p className="text-lg uppercase font-semibold">Step 3</p>
              <h2 className="text-xl font-bold">Receive your Visa Now</h2>
              <p className="text-lg opacity-80">
                These cases are perfectly simple and easy to distinguish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaProcess;
