import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AllVisas = () => {
  const [visas, setVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [visaTypes, setVisaTypes] = useState(["All"]);
  const [selectedVisaType, setSelectedVisaType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Fetch visas and initialize AOS
  useEffect(() => {
    AOS.init();

    fetch("https://visa-mate-server.vercel.app/all-visas")
      .then((res) => res.json())
      .then((data) => {
        setVisas(data);
        setFilteredVisas(data);

        const types = ["All", ...new Set(data.map((visa) => visa.visaType))];
        setVisaTypes(types);
      });
  }, []);

  useEffect(() => {
    const filtered = selectedVisaType === "All"
      ? visas
      : visas.filter((visa) => visa.visaType === selectedVisaType);
  
    // Further filter by search term
    setFilteredVisas(
      filtered.filter((visa) =>
        visa.countryName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [selectedVisaType, visas, searchTerm]);
  

  const handleToSort = () => {
    const sorted = [...filteredVisas].sort((a, b) => a.fee - b.fee);
    setFilteredVisas(sorted);
  };

  return (
    <div>
      <nav className="sticky z-50 top-0">
        <Navbar />
      </nav>
      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-cyan-600 text-center mb-8">
          All Visas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5 rounded-lg">
          {/* Dropdown for Filtering */}
          <select
            className="border col-span-1 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={selectedVisaType}
            onChange={(e) => setSelectedVisaType(e.target.value)}
            data-aos="fade-right"
          >
            {visaTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          {/* searching  */}

          <input
            type="text"
            className="border col-span-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Search by country name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Button for Sorting */}
          <button
            onClick={handleToSort}
            className="py-2 col-span-1 px-4 bg-cyan-600 text-white rounded-lg transition transform duration-300 hover:scale-105"
            data-aos="fade-left"
          >
            Sort By Visa Fee
          </button>
        </div>

        {/* Display Filtered Visas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVisas.map((visa) => (
            <div
              key={visa._id}
              className="border rounded-lg shadow-md p-4 hover:shadow-2xl transition transform duration-500 hover:scale-105 ease-in-out group"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="w-full h-32 object-cover rounded-md mb-4 transition-transform duration-500 group-hover:scale-110"
              />
              <h2 className="text-lg font-bold mb-2">{visa.countryName}</h2>
              <p className="text-gray-600">Visa Type: {visa.visaType}</p>
              <p className="text-gray-600">Fee: ${visa.fee}</p>
              <p className="text-gray-600">Validity: {visa.validity}</p>
              <button
                className="mt-4 bg-cyan-600 text-white py-2 px-4 button transition duration-300 hover:scale-105 shadow-xl"
                onClick={() => navigate(`/visa-details/${visa._id}`)}
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AllVisas;
