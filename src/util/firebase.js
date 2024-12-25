import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyB7OhJcLpemLGbZ2C3wRLrveR8obZ7GZZs",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "student-teacher-appointm-a47e2",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Authentication
export const auth = getAuth(app);

// Export Firestore instance
export const db = getFirestore(app);
