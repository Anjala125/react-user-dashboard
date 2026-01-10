import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function User() {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://fakestoreapi.com/users/${id}`);
      const data = await response.json();
      setUser(data);
    }
    fetchUser();
  }, [id]);

  if (!user) {
    return <p className="text-center mt-20 text-gray-600">Loading user...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">
          {user.name.firstname} {user.name.lastname}
        </h1>

        <p className="text-gray-700 mb-2">
          <span className="font-medium text-indigo-500">Username:</span> {user.username}
        </p>

        <p className="text-gray-700 mb-2">
          <span className="font-medium text-indigo-500">Email:</span> {user.email}
        </p>

        <p className="text-gray-700 mb-2">
          <span className="font-medium text-indigo-500">Phone:</span> {user.phone}
        </p>

        <p className="text-gray-700 mb-2">
          <span className="font-medium text-indigo-500">City:</span> {user.address.city}
        </p>

        <p className="text-gray-700 mb-2">
          <span className="font-medium text-indigo-500">Street:</span> {user.address.street}
        </p>

        <p className="text-gray-700 mb-6">
          <span className="font-medium text-indigo-500">Zipcode:</span> {user.address.zipcode}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/users")}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
