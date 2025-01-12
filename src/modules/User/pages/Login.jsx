import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../../services/authServices.js";

const UserLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = location.state || {}; // Access role passed from RoleSelection

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state for the login button

  useEffect(() => {
    if (!role) {
      navigate("/"); // Redirect if no role is passed
    }
  }, [role, navigate]);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError(""); // Reset error state before login attempt
    setIsLoading(true); // Set loading state

    try {
      // Pass role to the login function along with email and password
      await login(email, password, role);
    } catch (err) {
      setError(err.message || "Invalid login credentials");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-6">
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-6">
          {role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Login` : "Login"}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full px-4 py-3 mb-4 text-lg rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 text-lg rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-lg rounded-lg shadow-lg hover:from-pink-400 hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-orange-500 hover:text-orange-400 font-semibold">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
