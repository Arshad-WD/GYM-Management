import { db } from "./firebase";
import { collection, getDocs, doc, updateDoc, addDoc, deleteDoc } from "firebase/firestore";

// Function to fetch all users (members)
export const fetchUsers = async () => {
  try {
    const usersCollection = collection(db, "users");
    const usersSnapshot = await getDocs(usersCollection);

    if (usersSnapshot.empty) {
      console.log("No users found.");
      return [];
    }

    const usersList = usersSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        username: data.username,
        email: data.email,
        role: data.role,
      };
    });

    return usersList;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw new Error("Unable to fetch users. Please try again later.");
  }
};

// Function to update user role
export const updateUserRole = async (userId, role) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { role });
    console.log(`User role updated to ${role}`);
  } catch (error) {
    console.error("Error updating user role:", error);
    throw new Error("Unable to update role. Please try again later.");
  }
};

// Function to add a new subscription
// Function to add a new subscription with creation date
export const addSubscription = async (subscription) => {
    try {
      const subscriptionRef = collection(db, "subscriptions");
  
      // Add creation date
      const newSubscription = {
        ...subscription,
        createdAt: new Date(),
      };
  
      const docRef = await addDoc(subscriptionRef, newSubscription);
      console.log("Subscription added with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding subscription: ", error);
      throw new Error("Unable to add subscription. Please try again later.");
    }
  };
  

// Function to delete a subscription
export const deleteSubscription = async (subscriptionId) => {
  try {
    const subscriptionRef = doc(db, "subscriptions", subscriptionId);
    await deleteDoc(subscriptionRef);
    console.log("Subscription deleted with ID: ", subscriptionId);
  } catch (error) {
    console.error("Error deleting subscription: ", error);
    throw new Error("Unable to delete subscription. Please try again later.");
  }
};

// Function to fetch all Subscriptions
// Function to fetch all Subscriptions including creation date
export const fetchSubscriptions = async () => {
    try {
      const subscriptionsCollection = collection(db, "subscriptions");
      const subscriptionsSnapshot = await getDocs(subscriptionsCollection);
  
      if (subscriptionsSnapshot.empty) {
        console.log("No subscriptions found.");
        return [];
      }
  
      const subscriptionsList = subscriptionsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          price: data.price,
          duration: data.duration,
          createdAt: data.createdAt?.seconds // Firestore timestamps are in seconds
        };
      });
  
      return subscriptionsList;
    } catch (error) {
      console.error("Error fetching subscriptions: ", error);
      throw new Error("Unable to fetch subscriptions. Please try again later.");
    }
  };
  

// Function to add a new post
export const addPost = async (post) => {
  try {
    const postsRef = collection(db, "posts");

    const newPost = {
      ...post,
      createdAt: new Date(),
    };
    const docRef = await addDoc(postsRef, newPost);
    console.log("Post added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding post: ", error);
    throw new Error("Unable to add post. Please try again later.");
  }
};

// Function to delete a post
export const deletePost = async (postId) => {
  try {
    const postRef = doc(db, "posts", postId);
    await deleteDoc(postRef);
    console.log("Post deleted with ID: ", postId);
  } catch (error) {
    console.error("Error deleting post: ", error);
    throw new Error("Unable to delete post. Please try again later.");
  }
};
