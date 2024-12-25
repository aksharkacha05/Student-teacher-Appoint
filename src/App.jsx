import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AppointmentBooking from "./components/AppointmentBooking";
import StudentDashboard from "./components/StudentDashboard";
import LecturerDashboard from "./components/LecturerDashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import About from "./components/About";
import Features from "./components/Feature";
import Contact from "./components/Contact";

const App = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/appointments" element={<AppointmentBooking />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
};

export default App;
