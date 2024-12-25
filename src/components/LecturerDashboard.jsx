import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../util/firebase"; 
import "./LecturerDashboard.css";
import RedirectButton from "./RedirectComponent";

const LecturerDashboard = () => {
  const [appointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "appointment_data"));
        const requests = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data().formData, // Extract the `formData` object fields
          status: doc.data().status || "Pending", // Default status is "Pending"
        }));
        setAppointmentData(requests);
      } catch (error) {
        console.error("Error fetching appointment requests:", error);
      }
    };

    fetchData();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const docRef = doc(db, "appointment_data", id);
      await updateDoc(docRef, { status });
      setAppointmentData((prevData) =>
        prevData.map((request) =>
          request.id === id ? { ...request, status } : request
        )
      );
    } catch (error) {
      console.error(`Error updating status for ID ${id}:`, error);
    }
  };

  const handleApprove = (id) => {
    updateStatus(id, "Confirmed");
  };

  const handleDecline = (id) => {
    updateStatus(id, "Rejected");
  };

  return (
    <div className="lecturer-dashboard">
      <RedirectButton />
      <h2>Lecturer Dashboard</h2>
      <section>
        <h3>Appointment Requests</h3>
        <table>
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Date</th>
              <th>Time</th>
              <th>Message</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointmentData.length > 0 ? (
              appointmentData.map((request) => (
                <tr key={request.id}>
                  <td>{request.teacher}</td>
                  <td>{request.date}</td>
                  <td>{request.time}</td>
                  <td>{request.message || "No message provided"}</td>
                  <td>{request.status}</td>
                  <td>
                    <button
                      onClick={() => handleApprove(request.id)}
                      disabled={request.status !== "Pending"}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDecline(request.id)}
                      disabled={request.status !== "Pending"}
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No appointment requests available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
      <section>
        <h3>Schedule Overview</h3>
        <div className="calendar-view">Calendar view coming soon...</div>
      </section>
    </div>
  );
};

export default LecturerDashboard;
