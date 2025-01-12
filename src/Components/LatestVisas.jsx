import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://visa-mate-server.vercel.app/latest-visas")
      .then((res) => res.json())
      .then((data) => setVisas(data));
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-bold text-center mb-8 text-4xl text-[#1f6981]">
          Latest Visas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {visas.map((visa, index) => (
            <div
              key={index}
              className=" bg-white shadow-md rounded-lg overflow-hidden group transition transform  duration-500 ease-in-out "
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} // Alternate AOS effects
              data-aos-delay={index * 100} // Add delay for a cascading effect
            >
              {/* Country Image */}
              <img
                src={visa.countryImage}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                alt={`${visa.countryName} visa`}
              />
              {/* Visa Details */}
              <div className="p-4 relative">
                <h3 className="text-xl font-bold text-gray-800">
                  {visa.countryName}
                </h3>
                <p className="text-gray-600">Visa Type: {visa.visaType}</p>
                <p className="text-gray-600">
                  Processing Time: {visa.processingTime}
                </p>
                <p className="text-gray-600">Fee: ${visa.fee}</p>
                <p className="text-gray-600">Validity: {visa.validity}</p>
                <p className="text-gray-600">
                  Application Method: {visa.applicationMethod}
                </p>
                {/* "See Details" Button */}
                <button
                  onClick={() => navigate(`/visa-details/${visa._id}`)}
                  className="mt-4 button transition transform duration-700 hover:-translate-y-2 "
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* see all visa button  */}
      <div className="text-center  flex flex-col items-center justify-center">
        <Link to="/all-visas">
          <button className="mt-4 cssbuttons-io-button ">
            See all visas
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LatestVisas;
