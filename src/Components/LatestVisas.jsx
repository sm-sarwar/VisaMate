import React from "react";

const LatestVisas = () => {
  // Sample data for visas
  const visas = [
    {
      country: "Canada",
      image: "https://img.freepik.com/free-vector/canadian-flag-sky_603843-3072.jpg?t=st=1733310336~exp=1733313936~hmac=f9555a8084cb83b8fadee2e2904c5d03228afe08437e89c3b59a4cbe3a8fe1bc&w=740", // Replace with actual country image URL
      visaType: "Work Visa",
      processingTime: "15-30 Days",
      fee: "$150",
      validity: "2 Years",
      applicationMethod: "Online",
    },
    {
      country: "Australia",
      image: "https://img.freepik.com/free-vector/skyline-sydney_23-2147764810.jpg?t=st=1733310430~exp=1733314030~hmac=d413819db35015eacf1ddf8e28bc013960d5edbc8db3c7f5318e9095b73b4520&w=740", // Replace with actual country image URL
      visaType: "Student Visa",
      processingTime: "20-40 Days",
      fee: "$200",
      validity: "5 Years",
      applicationMethod: "Offline",
    },
    {
      country: "USA",
      image: "https://img.freepik.com/premium-vector/usa-design_24877-34811.jpg?w=740", // Replace with actual country image URL
      visaType: "Tourist Visa",
      processingTime: "10-20 Days",
      fee: "$160",
      validity: "6 Months",
      applicationMethod: "Online",
    },
    {
      country: "Germany",
      image: "https://img.freepik.com/free-vector/brandenburg-gate-landmark-purple-dotted-line-skyline_1057-10207.jpg?t=st=1733310577~exp=1733314177~hmac=7cd699c7a1820228562b5c44b21d41fe622f1a456b7eb17a0f4597dcc2a54ee8&w=740", // Replace with actual country image URL
      visaType: "Work Visa",
      processingTime: "30-60 Days",
      fee: "$100",
      validity: "4 Years",
      applicationMethod: "Online",
    },
    {
      country: "UK",
      image: "https://img.freepik.com/free-vector/flat-skyline-london_23-2147774101.jpg?t=st=1733310735~exp=1733314335~hmac=7ea6c3830ddf011cebd253cb551a6cc2db092d5506bd8a7cdfbaedb1858fc4bd&w=740", // Replace with actual country image URL
      visaType: "Spouse Visa",
      processingTime: "90 Days",
      fee: "$300",
      validity: "Indefinite",
      applicationMethod: "Online",
    },
    {
      country: "Japan",
      image: "https://img.freepik.com/free-photo/fuji-mountain-cherry-blossoms-spring-japan_335224-231.jpg?t=st=1733310777~exp=1733314377~hmac=7a35a8358125781547d3879b6e15433405ebade40066a24f34a064e68ec8a0ea&w=996", // Replace with actual country image URL
      visaType: "Tourist Visa",
      processingTime: "7-14 Days",
      fee: "$50",
      validity: "90 Days",
      applicationMethod: "Offline",
    },
  ];

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
                src={visa.image}
                alt={`${visa.country} Visa`}
                className="w-full h-60 object-cover"
              />
              {/* Visa Details */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {visa.country}
                </h3>
                <p className="text-gray-600">Visa Type: {visa.visaType}</p>
                <p className="text-gray-600">Processing Time: {visa.processingTime}</p>
                <p className="text-gray-600">Fee: {visa.fee}</p>
                <p className="text-gray-600">Validity: {visa.validity}</p>
                <p className="text-gray-600">
                  Application Method: {visa.applicationMethod}
                </p>
                {/* "See Details" Button */}
                <button className="mt-4 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition duration-300">
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestVisas;
