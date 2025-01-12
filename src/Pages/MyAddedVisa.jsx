import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyAddedVisa = () => {
  const { user } = useContext(AuthContext);
  const [allVisa, setAllVisa] = useState([]);

  useEffect(() => {
    fetch(
      `https://visa-mate-server.vercel.app/myAddedVisas?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setAllVisa(data));
  }, [user.email]);

  const handleDelete = (id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-mate-server.vercel.app/all-visas/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Visa has been deleted.",
                icon: "success",
              });
              const remaining = allVisa.filter((visa) => visa._id !== id);
              setAllVisa(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <nav className="sticky z-50 top-0">
        <Navbar />
      </nav>
      <main className="max-w-screen-xl mx-auto py-8">
        <h1 className="text-center text-4xl font-bold text-cyan-600 mb-6">
          My Added Visas
        </h1>
        {/* Visa Cards */}
        {allVisa.length === 0 ? (
          <p className="text-center text-lg text-gray-600 mt-10">
            You have not added any visas yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {allVisa.map((visa) => (
              <div
                key={visa._id}
                className="bg-white border group overflow-hidden rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 flex flex-col justify-between"
              >
                {/* Country Image */}
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="w-full h-32 object-cover rounded-md mb-4 transition transform duration-500 group-hover:scale-110"
                />

                {/* Visa Details */}
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  {visa.countryName}
                </h2>
                <p className="text-gray-600">Visa Type: {visa.visaType}</p>
                <p className="text-gray-600">
                  Processing Time: {visa.processingTime}
                </p>
                <p className="text-gray-600">Fee: ${visa.fee}</p>
                <p className="text-gray-600">Validity: {visa.validity}</p>
                <p className="text-gray-600">
                  Application Method: {visa.applicationMethod}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                  <Link to={`/updateVisas/${visa._id}`}>
                    <button className="  text-yellow-600 text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-yellow-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2 rounded-lg group py-2 px-6  hover:bg-yellow-600 transition duration-300">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(visa._id)}
                    className=" text-red-600 text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2 rounded-lg group py-2 px-6  hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MyAddedVisa;
