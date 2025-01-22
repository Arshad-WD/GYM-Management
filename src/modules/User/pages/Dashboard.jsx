import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Home from "../pages/Home";
import Posts from "../pages/Posts";

const UserDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 bg-black text-white p-6 md:ml-60"> {/* Added md:ml-60 for left margin on desktop */}
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="home" replace />} />

          {/* Child Routes */}
          <Route path="home" element={<Home />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;
