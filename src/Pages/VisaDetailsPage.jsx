import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ApplyVisaModal from '../Components/ApplyVisaModal';
import 'animate.css';
const VisaDetailsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  const { id } = useParams();
 
  const loadedData = useLoaderData()

  const visa= loadedData.find(visa => visa._id === id)
    // console.log(visa)
  
  return (
    <div>
        <nav className='sticky z-50 top-0'>
            <Navbar></Navbar>
        </nav>
        <main className='my-5'>
        <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 p-4 ">
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 p-4">

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {visa.countryName}
            </h1>

            <p className="text-xl text-gray-700 font-semibold mb-2">
              Visa Type: {visa.visaType}
            </p>

            <p className="text-gray-600 mb-4">
              <strong>Processing Time:</strong> {visa.processingTime}
            </p>

            <div className="text-gray-600 mb-4">
              <strong>Required Documents:</strong>
              <ol className="list-decimal list-inside mt-2">
                {visa.requiredDocuments.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ol>
            </div>
            
            <p className="text-gray-600 mb-4">
              <strong>Description:</strong> {visa.description}
            </p>
            
            <p className="text-gray-600 mb-4">
              <strong>Age Restriction:</strong> {visa.ageRestriction}
            </p>
            
            <p className="text-gray-600 mb-4">
              <strong>Fee:</strong> ${visa.fee}
            </p>
            
            <p className="text-gray-600 mb-4">
              <strong>Validity:</strong> {visa.validity}
            </p>
            
            <p className="text-gray-600 mb-4">
              <strong>Application Method:</strong> {visa.applicationMethod}
            </p>
            
            <div className=" space-x-4">
              <button 
              onClick={openModal}
              className="bg-cyan-600 text-white  w-full py-2 rounded-lg hover:bg-cyan-700 transition">
                Apply For The Visa
              </button>
              <ApplyVisaModal
                isOpen={isModalOpen}
                onClose={closeModal}
                visaFee={visa.fee}
                />
            </div>
          </div>
        </div>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  );
};

export default VisaDetailsPage;
