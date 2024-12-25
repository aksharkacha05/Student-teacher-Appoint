import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectToAppointmentsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/appointments"); // Redirect to the appointments page
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      Go to Appointments
    </button>
  );
};

// Optional: Inline styles for the button
const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  color: "#FFF",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default RedirectToAppointmentsButton;