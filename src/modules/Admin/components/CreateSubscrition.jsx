import React, { useState } from "react";
import { addSubscription } from "../../../services/dbService"; // Import addSubscription from dbService

const CreateSubscription = () => {
  const [subscription, setSubscription] = useState({
    name: "",
    price: "",
    duration: "",
  });

  const [error, setError] = useState(""); // For handling form errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubscription({ ...subscription, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (subscription.name && subscription.price && subscription.duration) {
      setError(""); // Clear error if form is valid
      
      try {
        // Call addSubscription from dbService to store the subscription in Firestore
        await addSubscription(subscription);
        setSubscription({ name: "", price: "", duration: "" }); // Clear form after submission
      } catch (error) {
        setError("Failed to create subscription. Please try again.");
      }
    } else {
      setError("All fields are required.");
    }
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Subscription</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-gray-300">Subscription Name</label>
          <input
            type="text"
            name="name"
            value={subscription.name}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-300">Price</label>
          <input
            type="number"
            name="price"
            value={subscription.price}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-300">Duration (in months)</label>
          <input
            type="number"
            name="duration"
            value={subscription.duration}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 py-2 px-4 rounded-lg text-white hover:bg-blue-500"
        >
          Create Subscription
        </button>
      </form>
    </div>
  );
};

export default CreateSubscription;
