import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../util/firebase"; // Adjust the path as needed
import "./StudentDashboard.css";
import RedirectButton from "./RedirectComponent";
import RedirectToAppointmentsButton from "./RedirectToAppointmentsButton";

const StudentDashboard = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "appointment_data"));
        const appointments = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data().formData,
          status: doc.data().status || "Pending", // Default status if not set
        }));

        // Separate appointments into upcoming and history based on the date
        const today = new Date();
        const upcoming = appointments.filter((appointment) => {
          const appointmentDate = new Date(appointment.date);
          return appointmentDate >= today;
        });

        const past = appointments.filter((appointment) => {
          const appointmentDate = new Date(appointment.date);
          return appointmentDate < today;
        });

        setUpcomingAppointments(upcoming);
        setHistory(past);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="student-dashboard">
      <RedirectButton />
      <RedirectToAppointmentsButton/>
      <h2>Student Dashboard</h2>
      <section>
        <h3>Your appointments:</h3>
        <table>
          <thead>
            <tr>
              <th>Lecturer Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.length > 0 ? (
              history.map((appointment, index) => (
                <tr key={appointment.id}>
                  <td>{appointment.teacher}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No past appointments available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default StudentDashboard;
