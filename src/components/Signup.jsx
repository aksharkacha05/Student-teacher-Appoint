// src/components/Signup.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../util/firebase";
import "./Common.css";
import RedirectButton from "./RedirectComponent";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Register the user with Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);

      // Store user role in localStorage or backend if needed
      localStorage.setItem("userRole", role);

      // Redirect to login page after successful signup
      alert("Signup successful! You can now log in.");
      navigate("/login");
    } catch (error) {
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div  style={{background:"linear-gradient(135deg, #012b45, #48628f)", height:"600px", color:"white"}} className="signup-container">
      <RedirectButton/>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="lecturer">Lecturer</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
