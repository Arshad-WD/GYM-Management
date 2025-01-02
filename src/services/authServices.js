import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const login = async (email, password, role) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    if (role === "admin" && email === "admin@example.com") {
      console.log("Admin logged in:", user);
      window.location.href = "/admin/dashboard";
    } else if (role === "member" && email.endsWith("@member.com")) {
      console.log("Member logged in:", user);
      window.location.href = "/member/dashboard";
    } else if (role === "user" && email.endsWith("@user.com")) {
      console.log("User logged in:", user);
      window.location.href = "/user/dashboard";
    } else {
      throw new Error("Unauthorized role for this email.");
    }
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error; // Re-throw error to handle it in the UI
  }
};

export { login };
