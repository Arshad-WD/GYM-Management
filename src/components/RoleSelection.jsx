import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="bg-gray-800 text-white p-10 rounded-3xl shadow-2xl max-w-md w-full">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-10">
          Choose Your Role
        </h2>

        <div className="space-y-6">
          <button
            className="w-full py-4 bg-gradient-to-r from-green-400 to-green-600 text-white text-lg font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => navigate("/admin/login", { state: { role: "admin" } })}
          >
            Admin Login
          </button>

          <button
            className="w-full py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => navigate("/member/login", { state: { role: "member" } })}
          >
            Member Login
          </button>

          <button
            className="w-full py-4 bg-gradient-to-r from-red-400 to-red-600 text-white text-lg font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => navigate("/user/login", { state: { role: "user" } })}
          >
            User Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
