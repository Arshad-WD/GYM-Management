import React from "react";
import SubscriptionUpdates from "../../Admin/components/Subscription";

const MemberDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-6">
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-3xl font-semibold">Gym Member Dashboard</h1>
        <button className="bg-pink-600 px-4 py-2 rounded-lg">Logout</button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Your Classes Section */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Your Classes</h2>
          <p className="mt-2">View and book available gym classes</p>
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg">View Classes</button>
        </div>

        {/* Your Progress Section */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Your Progress</h2>
          <p className="mt-2">Track your workouts and progress</p>
          <button className="mt-4 bg-green-600 px-4 py-2 rounded-lg">View Progress</button>
        </div>

        {/* Subscription Updates Section */}
        <SubscriptionUpdates />
      </div>
    </div>
  );
};

export default MemberDashboard;
