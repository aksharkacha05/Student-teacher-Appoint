import React, { useState } from "react";
import { db } from "../util/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import RedirectButton from "./RedirectComponent";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add message to Firestore
      await addDoc(collection(db, "messages"), {
        message: message,
        timestamp: Timestamp.fromDate(new Date()),
      });
      alert("Your message has been sent!");
      setMessage(""); // Reset message field
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Failed to send your message. Please try again.");
    }
  };

  return (
    <div  style={{background:"linear-gradient(135deg, #012b45, #48628f)", height:"600px", color:"white"}} className="contact-container">
      <RedirectButton/>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
