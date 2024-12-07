import React, { useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Swal from 'sweetalert2';

const MyApplicationVisa = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleCancel = (id) => {
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
              fetch(`http://localhost:5000/users/${id}`,{
                method: 'DELETE'
              })
              .then (res =>res.json())
              .then (data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Application has been deleted.",
                        icon: "success"
                      });
                      const remaining = users.filter(user => user._id !== id)
                      setUsers(remaining)
                }
              })
            }
          });
    }
    return (
        <div>
            {/* Navbar */}
            <nav className='sticky z-50 top-0'>
                <Navbar></Navbar>
            </nav>

            {/* Main Content */}
            <main className="p-6 min-h-screen">
                <h1 className="text-2xl font-bold mb-4 text-center text-cyan-600">My Visa Applications</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
                    {users.length > 0 ? (
                        users.map(user => (
                            <div 
                                key={user._id} 
                                className="border rounded-lg shadow-md p-4 bg-white"
                            >
                                <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
                                <p className="text-gray-600">
                                    <strong>Applied Date:</strong> {new Date(user.appliedDate).toDateString()}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Email:</strong> {user.email}
                                </p>
                                {/* Cancel Button */}
                                <button
                                    onClick={() => handleCancel(user._id)}
                                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No applications found.</p>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyApplicationVisa;
