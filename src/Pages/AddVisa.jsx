import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddVisa = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  const userInfo ={
    ...formData,
    email: user?.email
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => {
      const updatedDocuments = prevState.requiredDocuments.includes(value)
        ? prevState.requiredDocuments.filter((doc) => doc !== value)
        : [...prevState.requiredDocuments, value];
      return {
        ...prevState,
        requiredDocuments: updatedDocuments,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Visa Data Submitted:", userInfo);
    fetch('https://visa-mate-server.vercel.app/visas',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      Swal.fire({
        title: "Good job!",
        text: "Visa added successfully!",
        icon: "success"
      });
      navigate("/my-visas");
    })
    setFormData({
      countryImage: "",
      countryName: "",
      visaType: "",
      processingTime: "",
      requiredDocuments: [],
      description: "",
      ageRestriction: "",
      fee: "",
      validity: "",
      applicationMethod: "",
    });

  };

  return (
    <div>
        <nav className='sticky top-0 z-50 '>
            <Navbar></Navbar>
        </nav>
        <main>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-8">
            <h1 className="text-2xl font-bold text-cyan-600 mb-6 text-center">
              Add New Visa
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Country Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country Image (URL)
                </label>
                <input
                  type="url"
                  name="countryImage"
                  value={formData.countryImage}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Country Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country Name
                </label>
                <input
                  type="text"
                  name="countryName"
                  value={formData.countryName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Visa Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Visa Type
                </label>
                <select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-600 focus:border-cyan-600"
                  required
                >
                  <option value="">Select Visa Type</option>
                  <option value="Tourist visa">Tourist Visa</option>
                  <option value="Student visa">Student Visa</option>
                  <option value="Official visa">Official Visa</option>
                  <option value="Business visa">Business Visa</option>
                  <option value="Transit visa">Transit Visa</option>
                </select>
              </div>

              {/* Processing Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Processing Time
                </label>
                <input
                  type="text"
                  name="processingTime"
                  value={formData.processingTime}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Required Documents */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Required Documents
                </label>
                <div className="flex flex-col mt-2 space-y-2">
                  {["Valid passport", "Visa application form", "Recent passport-sized photograph"].map((doc) => (
                    <label key={doc} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={doc}
                        onChange={handleCheckboxChange}
                        checked={formData.requiredDocuments.includes(doc)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">{doc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Age Restriction */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Age Restriction
                </label>
                <input
                  type="number"
                  name="ageRestriction"
                  value={formData.ageRestriction}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Fee */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Fee
                </label>
            <input
              type="number"
              name="fee"
              value={formData.fee}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Validity */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
                  Validity
                </label>
                <input
                  type="text"
                  name="validity"
                  value={formData.validity}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Application Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Application Method
                </label>
                <input
                  type="text"
                  name="applicationMethod"
                  value={formData.applicationMethod}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white py-3 rounded-md shadow-lg "
                >
                  Add Visa
                </button>
              </div>
            </form>
          </div>
        </div>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  );
};

export default AddVisa;
