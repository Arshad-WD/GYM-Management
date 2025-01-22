import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Home from "./Home";
import Posts from "./Posts";  
import Subscriptions from "./Subscritions.jsx";

const MemberDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 bg-black text-white p-6 md:ml-60">
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="home" replace />} />

          {/* Child Routes */}
          <Route path="home" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="subscriptions" element={<Subscriptions />} />
        </Routes>
      </div>
    </div>
  );
};

export default MemberDashboard;
