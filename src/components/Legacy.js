import React from "react";
import { useNavigate } from "react-router-dom";
import './Legacy.css';

function Legacy() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/legacy-members");
  };

  return (
    <div id="legacy" className="legacy-section">
      <h2>Our Legacy Team</h2>
      <p>
        The Legacy Team represents the driving force behind the achievements of our organization. 
        With their unmatched dedication, vision, and teamwork, they have laid the foundation for a thriving community. 
        We are honored to continue building on the legacy they created.
      </p>
      <button className="legacy-button" onClick={handleButtonClick}>
        Meet the Team
      </button>
    </div>
  );
}

export default Legacy;
