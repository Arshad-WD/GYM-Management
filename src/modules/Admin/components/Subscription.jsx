import React from "react";

const SubscriptionUpdates = ({ subscriptions = [], handleDeleteSubscription }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">Subscription Updates</h2>
      <div className="space-y-4">
        {subscriptions && subscriptions.length > 0 ? (
          subscriptions.map((subscription) => (
            <div key={subscription.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-200">{subscription.name}</h3>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-400 text-sm">Price: ${subscription.price}</p>
                <p className="text-gray-400 text-sm">Duration: {subscription.duration} months</p>
              </div>
              <p className="text-gray-500 text-sm">
                Added on: {subscription.createdAt ? new Date(subscription.createdAt * 1000).toLocaleDateString() : "N/A"}
              </p>
              {/* Display delete button only if it's from Home component */}
              {handleDeleteSubscription && (
                <button
                  onClick={() => handleDeleteSubscription(subscription.id)} // Handle delete click
                  className="mt-2 bg-red-600 hover:bg-red-500 text-white py-1 px-4 rounded-lg"
                >
                  Delete Subscription
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400">No subscription updates available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default SubscriptionUpdates;
