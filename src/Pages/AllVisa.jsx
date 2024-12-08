import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const AllVisas = () => {
  const [visas, setVisas] = useState([]); 
  const [filteredVisas, setFilteredVisas] = useState([]); 
  const [visaTypes, setVisaTypes] = useState([]);
  const [selectedVisaType, setSelectedVisaType] = useState('All'); 
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Fetch all visas from the API
    fetch('https://visa-mate-server.vercel.app/all-visas')
      .then((res) => res.json())
      .then((data) => {
        setVisas(data);
        setFilteredVisas(data);

        // Extract unique visa types
        const types = ['All', ...new Set(data.map((visa) => visa.visaType))];
        setVisaTypes(types);
      });
  }, []);

  // Filter visas when selectedVisaType changes
  useEffect(() => {
    if (selectedVisaType === 'All') {
      setFilteredVisas(visas); // Show all visas
    } else {
      const filtered = visas.filter((visa) => visa.visaType === selectedVisaType);
      setFilteredVisas(filtered);
    }
  }, [selectedVisaType, visas]);

  return (
    <div>
      <nav className="sticky z-50 top-0">
        <Navbar />
      </nav>
      <main className="max-w-screen-xl mx-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-cyan-600 text-center mb-8">All Visas</h1>

          {/* Dropdown for Filtering */}
          <div className="mb-6 flex justify-center">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={selectedVisaType}
              onChange={(e) => setSelectedVisaType(e.target.value)}
            >
              {visaTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Display Filtered Visas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredVisas.map((visa) => (
              <div
                key={visa._id}
                className="border rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-bold mb-2">{visa.countryName}</h2>
                <p className="text-gray-600">Visa Type: {visa.visaType}</p>
                <p className="text-gray-600">Fee: ${visa.fee}</p>
                <p className="text-gray-600">Validity: {visa.validity}</p>
                <button
                  className="mt-4 bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700"
                  onClick={() => navigate(`/visa-details/${visa._id}`)}
                >
                  See Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AllVisas;
