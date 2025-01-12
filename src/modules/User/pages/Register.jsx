import React, { useState } from "react";
import { register } from "../../../services/authServices.js"; 

const UserRegistration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Assuming your register function accepts username, email, and password
      await register(username, email, password);
      window.location.href = "/user/login"; // Redirect to Login after successful registration
    } catch (err) {
      setError(err.message || "Failed to register");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-6">
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-6">
          User Registration
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Username Input Field */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-4 py-3 mb-4 text-lg rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Email Input Field */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full px-4 py-3 mb-4 text-lg rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Password Input Field */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 mb-4 text-lg rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Confirm Password Input Field */}
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full px-4 py-3 mb-6 text-lg rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Submit Button */}
        <button
          onClick={handleRegistration}
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-lg rounded-lg shadow-lg hover:from-pink-400 hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
        >
          Register
        </button>

        {/* Link to Login page */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <a href="/user/login" className="text-orange-500 hover:text-orange-400 font-semibold">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
