import React, { useEffect, useState } from "react";
import { fetchUsers, updateUserRole, fetchSubscriptions, deleteSubscription, deletePost } from "../../../services/dbService"; // Importing deletePost function

// Components
import Users from "./User";
import Members from "./Member";
import SubscriptionUpdates from "./Subscription";
import PostsSection from "./Post"; 

const Home = () => {
  const [users, setUsers] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [roleLoading, setRoleLoading] = useState(false);

  // Fetch Users and Subscriptions
  useEffect(() => {
    const getData = async () => {
      try {
        const usersData = await fetchUsers();
        const subscriptionsData = await fetchSubscriptions();
        setUsers(usersData);
        setSubscriptions(subscriptionsData);
      } catch (err) {
        setError("Failed to load users or subscriptions.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Handle updating user role (make member or remove member)
  const handleUserRoleChange = async (userId, newRole) => {
    try {
      setRoleLoading(true);
      await updateUserRole(userId, newRole);
      const updatedUsers = users.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error updating user role:", error);
      setError("Failed to update user role. Please try again.");
    } finally {
      setRoleLoading(false);
    }
  };

  // Handle deleting a subscription
  const handleDeleteSubscription = async (subscriptionId) => {
    try {
      await deleteSubscription(subscriptionId);
      const updatedSubscriptions = subscriptions.filter(
        (subscription) => subscription.id !== subscriptionId
      );
      setSubscriptions(updatedSubscriptions);
    } catch (error) {
      console.error("Error deleting subscription:", error);
      setError("Failed to delete subscription. Please try again.");
    }
  };

  // Handle deleting a post (in Home)
  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId); // Call deletePost function from dbService
      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error deleting post:", error);
      setError("Failed to delete post. Please try again.");
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
      <Members users={users} handleRemoveMember={(userId) => handleUserRoleChange(userId, "user")} />

      {/* Users Section */}
      <Users users={users} handleMakeMember={(userId) => handleUserRoleChange(userId, "member")} />

      {/* Subscription Updates Section */}
      <SubscriptionUpdates
        subscriptions={subscriptions}
        handleDeleteSubscription={handleDeleteSubscription}
      />

      {/* Posts Section */}
      <PostsSection handleDeletePost={handleDeletePost} />

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
