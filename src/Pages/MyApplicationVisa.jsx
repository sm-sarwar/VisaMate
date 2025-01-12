import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyApplicationVisa = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://visa-mate-server.vercel.app/users?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user.email]);

  const handleCancel = (id) => {
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
        fetch(`https://visa-mate-server.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Application has been deleted.",
                icon: "success",
              });
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="sticky z-50 top-0">
        <Navbar></Navbar>
      </nav>

      {/* Main Content */}
      <main className="p-6 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-center text-cyan-600">
          My Visa Applications
        </h1>
        <div className="max-w-screen-xl mx-auto">
          {users.length > 0 ? (

            users.map((user) => (
                <div key={user._id} className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Applied Date</th>
                      <th>Country</th>
                      <th>Applicants</th>
                      <th>Processing Time</th>
                      <th>Fee</th>
                      <th>Application Method</th>
                      <th>Cancel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>{user.appliedDate}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={user.countryImage}
                                alt={user.countryName}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{user.countryName}</div>
                            <div className="text-sm opacity-50">
                              {user.visaType}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {user.firstName} {user.lastName}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          {user.email}
                        </span>
                      </td>
                      <td>{user.processingTime}</td>
                      <th>
                        <p className="">$ {user.fee}</p>
                      </th>
                      <th>
                        <p className="">{user.applicationMethod}</p>
                      </th>
                      <th>
                        <button
                          className=" btn bg-red-500 text-white  hover:bg-red-600 transition"
                          onClick={() => handleCancel(user._id)}
                        >
                          X
                        </button>
                      </th>
                    </tr>
                  </tbody>
                  {/* foot */}
                </table>
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
