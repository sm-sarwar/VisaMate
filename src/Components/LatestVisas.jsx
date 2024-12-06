import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const LatestVisas = () => {
  const [visas , setVisas] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    fetch("http://localhost:5000/latest-visas")
    .then(res=>res.json())
    .then(data => setVisas(data))
},[])

  return (
    <section className="bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-4">
        <h2 className=" font-bold text-center mb-8 text-4xl  text-[#1f6981]">Latest Visas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visas.map((visa, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Country Image */}
              <img
                src={visa.countryImage}
                className="w-full h-60 object-cover"
              />
              {/* Visa Details */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {visa.countryName}
                </h3>
                <p className="text-gray-600">Visa Type: {visa.visaType}</p>
                <p className="text-gray-600">Processing Time: {visa.processingTime}</p>
                <p className="text-gray-600">Fee: ${visa.fee}</p>
                <p className="text-gray-600">Validity: {visa.validity}</p>
                <p className="text-gray-600">
                  Application Method: {visa.applicationMethod}
                </p>
                {/* "See Details" Button */}
                <button 
                onClick={() => navigate(`/visa-details/${visa._id}`)}
                className="mt-4 bg-cyan-600 text-white px-4 py-2 
                rounded hover:bg-cyan-700 transition duration-300">
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Link to="/all-visas">
        <button className="mt-4 bg-teal-600
         text-white px-16 py-2 rounded
          hover:bg-teal-900 transition duration-300">
        See all visas
        </button>
        </Link>
      </div>
    </section>
  );
};

export default LatestVisas;
