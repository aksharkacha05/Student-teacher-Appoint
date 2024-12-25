// src/components/ForgotPassword.js
import React, { useState } from "react";
import "./Common.css";
import RedirectButton from "./RedirectComponent";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send an email with reset instructions.
    // For now, we'll just simulate success.
    if (email) {
      alert("Password reset instructions have been sent to your email.");
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div  style={{background:"linear-gradient(135deg, #012b45, #48628f)", height:"600px", color:"white"}} className="forgot-password-container">
      <RedirectButton/>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
