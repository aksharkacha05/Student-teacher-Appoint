import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../util/firebase"; // Import Firebase auth
import "./Common.css";
import RedirectButton from "./RedirectComponent";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Authenticate user with Firebase
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect based on role
      if (role === "student") {
        navigate("/appointments");
      } else {
        navigate("/lecturer-dashboard");
      }
    } catch (error) {
      alert(error.message); // Handle errors, e.g., invalid credentials
    }
  };

  return (
    <div  style={{background:"linear-gradient(135deg, #012b45, #48628f)", height:"600px", color:"white"}} className="login-container">
      <RedirectButton/>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
      <p>
        <a href="/forgot-password">Forgot password?</a>
      </p>
    </div>
  );
};

export default Login;
