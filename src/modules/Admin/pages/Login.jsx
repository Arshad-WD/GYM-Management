import React, { useState } from "react";

const admins = [
  { email: "admin1@gmail.com", password: "adminpass1" }, // Admin 1 credentials
  { email: "admin2@gmail.com", password: "adminpass2" }, // Admin 2 credentials
  // Add more admin accounts as needed
];

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Check if entered credentials match any admin in the array
      const validAdmin = admins.find(
        (admin) => admin.email === email && admin.password === password
      );

      if (!validAdmin) {
        throw new Error("Invalid email or password.");
      }

      // Redirect to Admin Dashboard on successful login
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError(err.message || "Invalid login credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center mb-6">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4" role="alert">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-4 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
            aria-label="Email"
          />

          {/* Password Field */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 mb-6 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
            aria-label="Password"
          />

          {/* Login Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-md text-white ${
              isLoading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-500"
            } focus:ring-2 focus:ring-blue-300 transition duration-300`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            Forgot Password?{" "}
            <a href="/reset-password" className="text-blue-400 hover:text-blue-500">
              Reset Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
