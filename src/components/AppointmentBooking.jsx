// src/components/AppointmentBooking.js
import React, { useState } from "react";
import "./AppointmentBooking.css";
import { db } from "../util/firebase";
import { collection, addDoc } from "firebase/firestore";
import RedirectButton from "./RedirectComponent";


const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    teacher: "",
    date: "",
    time: "",
    message: "",
  });

  const [teachers] = useState(["John Doe", "Jane Smith", "Emily Johnson"]); // Sample teacher data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
          // Add message to Firestore
          await addDoc(collection(db, "appointment_data"), {
            formData: formData
          });
          alert("Your message has been sent!");
          setMessage(""); // Reset message field
        } catch (error) {
          console.error("Error sending message: ", error);
        }
      };

  return (
    <>
    <div className="appointment-booking">
      <RedirectButton/>
       <nav className="nav">
          <a href="/student-dashboard">View Dashboard</a>
        </nav>
      <h2>Book an Appointment</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="teacher">Select Teacher:</label>
        <select
          id="teacher"
          name="teacher"
          value={formData.teacher}
          onChange={handleChange}
          required
        >
          <option value="">-- Choose a Teacher --</option>
          {teachers.map((teacher, index) => (
            <option key={index} value={teacher}>
              {teacher}
            </option>
          ))}
        </select>

        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time">Select Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message (Optional):</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter the purpose of the appointment..."
        ></textarea>

        <button type="submit" className="submit-btn">
          Book Appointment
        </button>
      </form>
    </div>
    </>
  );
};

export default AppointmentBooking;
