import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase"; // Ensure correct path for your Firebase configuration file
import { doc, setDoc, getDoc } from "firebase/firestore"; // Firestore methods

/**
 * Login function with role-based validation and redirection.
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} role - Expected user role ('admin', 'member', 'user')
 */
const login = async (email, password, role) => {
  try {
    // Sign in the user with email and password
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch user data from Firestore
    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      throw new Error("User record not found.");
    }

    const userData = userDoc.data();

    // Validate the role of the user
    if (userData.role !== role) {
      throw new Error(`Unauthorized role: Expected ${role}, found ${userData.role}`);
    }

    // Redirect based on role
    const redirectPath = {
      admin: "/admin/dashboard",
      member: "/member/dashboard",
      user: "/user/dashboard",
    }[role] || "/";  // Default to "/" if no matching role

    window.location.href = redirectPath;
    console.log(`Login successful: Role=${role}, Redirecting to ${redirectPath}`);
  } catch (error) {
    console.error("Login error:", error.message);
    throw error; // Re-throw error to handle it in UI
  }
};

/**
 * Register function to create a user with a specific role.
 * @param {string} username - User's username
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @param {string} role - User's role (default is 'user')
 */
const register = async (username, email, password, role = "user") => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Assign role and username to the new user in Firestore
    const userRef = doc(db, "users", user.uid); // Using UID as document ID
    await setDoc(userRef, {
      username: username, // Added username
      email: user.email,
      role: role, // Role (default is 'user')
      createdAt: new Date(),
    });

    console.log(`User registered with role '${role}':`, user);

    // Redirect to the appropriate dashboard based on the role
    const redirectPath = role === "admin" ? "/admin/dashboard" : "/user/dashboard";
    window.location.href = redirectPath;
  } catch (error) {
    console.error("Error registering:", error.message);
    throw error; // Re-throw error to handle it in the UI
  }
};

/**
 * Helper function to check if a user exists in Firestore
 * @param {string} uid - Firebase user ID (UID)
 */
const checkIfUserExists = async (uid) => {
  const userRef = doc(db, "users", uid);
  const userDoc = await getDoc(userRef);

  return userDoc.exists();
};

export { login, register, checkIfUserExists };
