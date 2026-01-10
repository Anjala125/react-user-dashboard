import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // ✅ initialize navigate here

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-blue-100">
      
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-xl text-center">
        
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          Welcome to the User Dashboard
        </h1>

        <p className="text-gray-700 mb-4">
          This application provides information about users in a clear and
          organized manner. It helps users easily understand personal details
          and application features.
        </p>

        <p className="text-gray-600 mb-6">
          The next section will guide you to the user page, where you can
          explore more details related to the user and the purpose of this
          application.
        </p>

        <div>
          <button
            onClick={() => navigate("/users")} // ✅ navigate to Users page
            className="px-8 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Go to Users
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;
