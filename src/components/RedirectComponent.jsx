import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Redirect to the homepage
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      Go to Homepage
    </button>
  );
};

// Optional: Inline styles for the button
const buttonStyle = {
  margin: "20px",
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "#FFF",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default RedirectButton;