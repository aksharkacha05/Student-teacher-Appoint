// About.js
import RedirectButton from "./RedirectComponent";

const About = () => {
    return (
      <>
      <div style={{background:"linear-gradient(135deg, #012b45, #48628f)", height:"600px", color:"white"}} className="about-container">
        <RedirectButton/>
        <h2>About Us</h2>
        <p>This is a platform for booking student-lecturer appointments...</p>
      </div>
      </>
    );
  };
  
  export default About;