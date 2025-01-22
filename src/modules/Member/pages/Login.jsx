import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase.js";
import { login } from "../../../services/authServices.js";

const MemberLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = login(email, password, "member");
     // if(userCredential.role == "member") {
     if(userCredential){
      window.location.href = "/member/dashboard"; // Redirect to Member Dashboard
    }else{
      throw new Error("Unauthorized role: Expected member, found " + userCredential.role);}
    } catch (err) {
      setError(err.message || "Invalid login credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-6">
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-6">
          Member Login
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Email Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full px-4 py-3 mb-4 text-lg rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Password Input */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 text-lg rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-lg rounded-lg shadow-lg hover:from-pink-400 hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300"
        >
          Login
        </button>

        {/* Forgot Password Link */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Forgot your password?{" "}
            <a href="/reset-password" className="text-pink-500 hover:text-pink-400 font-semibold">
              Reset Here
            </a>
          </p>
        </div>

        {/* Links */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <a href="/user/login" className="text-orange-500 hover:text-orange-400 font-semibold">
              User Login
            </a>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            <span>Or, </span>
            <a href="/admin/login" className="text-pink-500 hover:text-pink-400 font-semibold">
              Admin Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberLogin;
