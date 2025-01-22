import React from "react";
import Subscriptions from "../../Member/pages/Subscritions";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-6">
    <header className="flex justify-between items-center border-b pb-4 mb-6">
      <h1 className="text-3xl font-semibold">Gym User Dashboard</h1>
      <button className="bg-pink-600 px-4 py-2 rounded-lg">Logout</button>
    </header>

    <div className="grid grid-cols-1 gap-6">
      {/* Gym Membership Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Gym Membership</h2>
        <p className="mt-2">View available membership plans</p>
        <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg">
          View Plans
        </button>
      </div>

      {/* Subscription Updates Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Subscriptions Plans</h2>
        <Subscriptions />
      </div>
    </div>
  </div>
  );
};

export default Home;
