import React from "react";

const HappyClients = () => {
  // Sample client data
  const clients = [
    {
      name: "John Doe",
      feedback: "VisaMate made my visa application process so much easier. Highly recommended!",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "A seamless experience! The platform is user-friendly and reliable.",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Robert Brown",
      feedback: "Thanks to VisaMate, I got my visa without any hassle. The support team is excellent!",
      photo: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    {
      name: "Emily Johnson",
      feedback: "VisaMate exceeded my expectations! It was a pleasure using the service.",
      photo: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Michael Lee",
      feedback: "The process was smooth, and I got my visa on time. Thank you, VisaMate!",
      photo: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      name: "Sophia Taylor",
      feedback: "I loved how easy it was to apply for a visa using VisaMate. Great job!",
      photo: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Happy Clients Says
        </h2>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              {/* Client Photo */}
              <img
                src={client.photo}
                alt={`${client.name}'s photo`}
                className="w-20 h-20 rounded-full mb-4 border-4 border-cyan-500"
              />
              {/* Feedback */}
              <p className="italic text-gray-600 text-center mb-4">
                "{client.feedback}"
              </p>
              {/* Client Name */}
              <h4 className="text-lg font-semibold text-cyan-600">
                {client.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
