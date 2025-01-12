// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import getAuth
import { getFirestore } from "firebase/firestore";  // Import getFirestore
import { getStorage, ref } from "firebase/storage";  // Import getStorage and ref

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZtIl8tE-OPBBx8NH7TryMNJY9gXd4XE0",
  authDomain: "gym-management-a4d25.firebaseapp.com",
  projectId: "gym-management-a4d25",
  storageBucket: "gym-management-a4d25.firebasestorage.app",
  messagingSenderId: "39972008969",
  appId: "1:39972008969:web:22940da6cd5a579b0974d8",
  measurementId: "G-W30N72CLGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);  // Firebase Authentication
export const db = getFirestore(app);  // Firestore Database
export const storage = getStorage(app);  // Firebase Storage

//custom ckam
// admin.auth().setCustomUserClaims(user.uid, { role: 'admin' });

// Storage references
export const storageRef = ref(storage);
export const storageRefImages = ref(storage, "images");
export const storageRefDocs = ref(storage, "docs");
export const storageRefOthers = ref(storage, "others");
export const storageRefProfile = ref(storage, "profile");
export const storageRefProfileImages = ref(storageRefProfile, "images");
export const storageRefProfileDocs = ref(storageRefProfile, "docs");
export const storageRefProfileOthers = ref(storageRefProfile, "others");
