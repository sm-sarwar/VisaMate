import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const ApplyVisaModal = ({ isOpen, onClose, visaFee }) => {
  const {user} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: user.email,
    firstName: '',
    lastName: '',
    appliedDate: new Date().toISOString().split('T')[0], 
    fee: visaFee,
  });


  const handleChange = (e) => {
    const { name, value,} = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form Data Submitted:', formData);
    // You can add your API call here to submit the data.
    fetch('https://visa-mate-server.vercel.app/users',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    Swal.fire({
        title: "Good job!",
        text: "Application successfully!",
        icon: "success"
      });
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Apply for the Visa
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              readOnly
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Applied Date
            </label>
            <input
              type="text"
              name="appliedDate"
              value={formData.appliedDate}
              readOnly
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Fee
            </label>
            <input
              type="text"
              name="fee"
              value={`$${formData.fee}`}
              readOnly
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyVisaModal;
