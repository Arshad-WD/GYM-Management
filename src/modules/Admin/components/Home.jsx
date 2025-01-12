import React, { useEffect, useState } from "react";
import { fetchUsers, updateUserRole, fetchSubscriptions, deleteSubscription } from "../../../services/dbService"; // Importing functions

// Components
import Users from "./User";
import Members from "./Member";
import SubscriptionUpdates from "./Subscription"; 

const Home = () => {
  const [users, setUsers] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]); // State to store subscriptions
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Users and Subscriptions
  useEffect(() => {
    const getData = async () => {
      try {
        const usersData = await fetchUsers();
        const subscriptionsData = await fetchSubscriptions();
        setUsers(usersData);
        setSubscriptions(subscriptionsData); // Set fetched subscriptions
      } catch (err) {
        setError("Failed to load users or subscriptions.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Handle Make Member button click
  const handleMakeMember = async (userId) => {
    try {
      await updateUserRole(userId, "member");
      const updatedUsers = users.map((user) =>
        user.id === userId ? { ...user, role: "member" } : user
      );
      setUsers(updatedUsers); // Update user list
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  // Handle Remove Member button click (Make User)
  const handleRemoveMember = async (userId) => {
    try {
      await updateUserRole(userId, "user");
      const updatedUsers = users.map((user) =>
        user.id === userId ? { ...user, role: "user" } : user
      );
      setUsers(updatedUsers); // Update user list
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  // Handle Delete Subscription (Only in Home)
  const handleDeleteSubscription = async (subscriptionId) => {
    try {
      await deleteSubscription(subscriptionId); // Call delete function from dbService
      const updatedSubscriptions = subscriptions.filter(
        (subscription) => subscription.id !== subscriptionId
      );
      setSubscriptions(updatedSubscriptions); // Update subscriptions after deletion
    } catch (error) {
      console.error("Error deleting subscription:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-6">
      {/* Members Section */}
      <Members users={users} handleRemoveMember={handleRemoveMember} />
      
      {/* Users Section */}
      <Users users={users} handleMakeMember={handleMakeMember} />


      {/* Subscription Updates Section */}
      <SubscriptionUpdates
        subscriptions={subscriptions}
        handleDeleteSubscription={handleDeleteSubscription} // Pass delete function only to Home
      />

      {/* Bottom Bar */}
      <div className="bg-gray-900 p-4 fixed bottom-0 left-0 w-full flex justify-between items-center shadow-lg">
        <div className="text-gray-100">© 2025 Gym Management</div>
        <div className="space-x-4">
          <a href="/terms" className="text-gray-400 hover:text-gray-200">Terms</a>
          <a href="/privacy" className="text-gray-400 hover:text-gray-200">Privacy</a>
          <a href="/contact" className="text-gray-400 hover:text-gray-200">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
