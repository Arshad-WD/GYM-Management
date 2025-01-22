import React, { useEffect, useState } from "react";
import { db } from "../../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch subscriptions from Firestore
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const subscriptionsCollection = collection(db, "subscriptions");
        const subscriptionsSnapshot = await getDocs(subscriptionsCollection);

        if (!subscriptionsSnapshot.empty) {
          const fetchedSubscriptions = subscriptionsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setSubscriptions(fetchedSubscriptions);
        } else {
          console.log("No subscriptions found.");
        }
      } catch (error) {
        console.error("Error fetching subscriptions: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  if (loading) {
    return <div className="text-gray-400">Loading subscriptions...</div>;
  }

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">Subscriptions</h2>
      <div className="space-y-4">
        {subscriptions.length > 0 ? (
          subscriptions.map((subscription) => (
            <div key={subscription.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-200">{subscription.name}</h3>
              <p className="text-gray-400">Price: ${subscription.price}</p>
              <p className="text-gray-400">Duration: {subscription.duration} months</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No subscriptions available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default Subscriptions;
