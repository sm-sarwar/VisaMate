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
        <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-start group">
          <div className="w-full md:w-1/2 p-4 ">
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full h-auto transition transform duration-700 group-hover:scale-110 rounded-md shadow-md "
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
              className="btnn w-full text-cyan-600 text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-cyan-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2 rounded-lg group py-2 px-6  hover:bg-cyan-600 transition duration-300 ">
                Apply For The Visa
              </button>
              <ApplyVisaModal
                isOpen={isModalOpen}
                onClose={closeModal}
                visaFee={visa.fee}
                visaId= {visa._id}
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
