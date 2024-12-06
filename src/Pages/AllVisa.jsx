import React, { useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const AllVisas = () => {
    const [visas, setVisas] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Initialize AOS
      AOS.init();
  
      // Fetch all visas from the API
      fetch('http://localhost:5000/all-visas')
        .then((res) => res.json())
        .then((data) => setVisas(data));
    }, []);

  return (
    <div>
        <nav className='sticky z-50 top-0'>
            <Navbar></Navbar>
        </nav>
        <main className='max-w-screen-xl mx-auto'>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-cyan-600 text-center mb-8">All Visas</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {visas.map((visa) => (
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
            <Footer></Footer>
        </footer>
    </div>
  );
};

export default AllVisas;
