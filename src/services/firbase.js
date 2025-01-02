// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);