import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyAddedVisa = () => {
  const allVisa = useLoaderData();

    
  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {allVisa.map((visa) => (
            <div
              key={visa._id}
              className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              {/* Country Image */}
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="w-full h-32 object-cover rounded-md mb-4"
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
                <button
                
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded transition duration-200"
                >
                  Update
                </button>
                </Link>
                <button
                  onClick={() => handleDelete(visa._id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition duration-200"
                >
                  Delete
                </button>
              </div>
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

export default MyAddedVisa;

