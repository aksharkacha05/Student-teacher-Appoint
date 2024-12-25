import RedirectButton from "./RedirectComponent";

// Features.js
const Features = () => {
    return (
      <div  style={{background:"linear-gradient(135deg, #012b45, #48628f)", height:"600px", color:"white"}} className="features-container">
        <RedirectButton/>
        <h2>Features</h2>
        <ul>
          <li>Book appointments easily</li>
          <li>See upcoming appointments</li>
          <li>Message your lecturer or student</li>
        </ul>
      </div>
    );
  };
  
  export default Features;  