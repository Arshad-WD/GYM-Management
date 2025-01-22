import React, { useState } from "react";
import Home from "../components/Home";
import CreatePost from "../components/CreatePost";
import CreateSubscription from "../components/CreateSubscrition";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("home"); // State to track active section

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "subscriptions":
        return <CreateSubscription onSubscriptionCreate={handleSubscriptionCreate} />;
      case "posts":
        return <CreatePost onPostCreate={(post) => console.log("Post Created:", post)} />;
      default:
        return <Home />;
    }
  };

  const handleSubscriptionCreate = (subscription) => {
    // Here, you can handle the subscription, e.g., save it to the database
    console.log("Subscription created:", subscription);
  }; 

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:w-64 bg-gray-800 p-6 rounded-l-3xl shadow-xl flex-col">
        <nav>
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8">
            Admin Dashboard
          </h2>
          <ul className="space-y-6">
            <li>
              <button
                onClick={() => setActiveSection("home")}
                className={`block px-4 pr-24 py-3 rounded-md transition-colors duration-300 transform ${
                  activeSection === "home" ? "bg-blue-700 text-white" : "hover:bg-blue-700 text-gray-300"
                }`}
              >
                <i className="text-xl mr-3">🏠</i> Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("subscriptions")}
                className={`block px-2 py-3 rounded-md transition-colors duration-300 transform ${
                  activeSection === "subscriptions" ? "bg-blue-700 text-white" : "hover:bg-blue-700 text-gray-300"
                }`}
              >
                <i className="text-xl mr-3">➕</i> Create Subscription
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("posts")}
                className={`block pr-[4.6rem]  py-3 rounded-md transition-colors duration-300 transform ${
                  activeSection === "posts" ? "bg-blue-700 text-white" : "hover:bg-blue-700 text-gray-300"
                }`}
              >
                <i className="text-xl mr-3">➕</i> Create Post
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-8 lg:p-12">
        <header className="flex justify-between items-center mb-8 border-b-2 border-gray-700 pb-4">
          <h1 className="text-3xl font-semibold text-gray-100">Gym Admin Dashboard</h1>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 focus:outline-none transition duration-300">
            Logout
          </button>
        </header>

        {/* Render Active Section */}
        {renderActiveSection()}
      </main>

      {/* Bottom Navigation Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-gray-800 p-4 flex justify-around items-center shadow-lg">
        <button
          onClick={() => setActiveSection("home")}
          className={`text-gray-400 hover:text-white ${activeSection === "home" && "text-white"}`}
        >
          <i className="text-2xl">🏠</i>
          <span className="text-xs">Home</span>
        </button>
        <button
          onClick={() => setActiveSection("subscriptions")}
          className={`text-gray-400 hover:text-white ${activeSection === "subscriptions" && "text-white"}`}
        >
          <i className="text-2xl">➕</i>
          <span className="text-xs">Subscription</span>
        </button>
        <button
          onClick={() => setActiveSection("posts")}
          className={`text-gray-400 hover:text-white ${activeSection === "posts" && "text-white"}`}
        >
          <i className="text-2xl">➕</i>
          <span className="text-xs">Post</span>
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
