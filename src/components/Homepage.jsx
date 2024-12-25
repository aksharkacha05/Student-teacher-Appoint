// src/components/Homepage.js
import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">Smart Appointments</div>
        <nav className="nav">
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/contact">Contact</a>
          <a href="/login" className="login-btn">Login</a>
        </nav>
      </header>

      <main className="hero-section">
        <h1>Simplify Your Scheduling</h1>
        <p>Effortlessly book appointments with teachers anytime, anywhere.</p>
        <a href="/login" className="cta-btn">Get Started</a>
      </main>

      <footer className="footer">
        <p>© 2024 Smart Appointments. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
