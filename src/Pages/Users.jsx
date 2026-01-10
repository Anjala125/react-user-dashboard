import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Users() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate() // initialize navigate

  async function fetchUsers() {
    const response = await fetch("https://fakestoreapi.com/users")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 px-6 py-10">
      
      {/* Go Home Button */}
      <div className="flex justify-start mb-6">
        <button
          onClick={() => navigate("/")} // navigate to Home
          className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
        >
          Go Home
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Users List
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white border-t-4 border-indigo-500 rounded-2xl shadow-md p-6 hover:shadow-xl transition cursor-pointer"
            onClick={() => navigate(`/user/${user.id}`)} // navigate to user detail page
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-3">
              {user.name.firstname} {user.name.lastname}
            </h2>

            <p className="text-gray-700 mb-1">
              <span className="font-medium text-indigo-500">Email:</span> {user.email}
            </p>

            <p className="text-gray-700 mb-1">
              <span className="font-medium text-indigo-500">Username:</span> {user.username}
            </p>

            <p className="text-gray-700">
              <span className="font-medium text-indigo-500">City:</span> {user.address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
