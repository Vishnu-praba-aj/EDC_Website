import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './VerticalDetails.css';
import verticalsData from './verticalsData';

const VerticalDetails = () => {
  const { id } = useParams();
  const vertical = verticalsData.find(v => v.id === parseInt(id));
  const navigate = useNavigate();

  const goBackToSection = () => {
    navigate(-1);
    setTimeout(() => {
      const section = document.getElementById("vertical-list-section");
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  if (!vertical) {
    return <h2>Vertical not found</h2>;
  }

  return (
    <div className="page-container">  {/* Wrapper for the whole page */}
      <button onClick={goBackToSection} className="back-arrow">
        &#8592; Back
      </button>

      <div className="vertical-details-container">
        <h2 className="vertical-name">{vertical.verticalName}</h2>

        {/* Head Section */}
        <div className="card-row">
        <div className="committee-card">
          <img src={vertical.head.image} alt={vertical.head.name} className="card-image" />
          <div className="card-info">
            <h3>{vertical.head.name}</h3>
            <p>{vertical.head.role}</p>
            <p>{vertical.head.department}</p>
          </div>
        </div>
        </div>
        {/* Deputies in the same row */}
        <div className="card-row">
          {vertical.deputies.map((deputy, idx) => (
            <div className="committee-card" key={idx}>
              <img src={deputy.image} alt={deputy.name} className="card-image" />
              <div className="card-info">
                <h3>{deputy.name}</h3>
                <p>{deputy.role}</p>
                <p>{deputy.department}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Members below deputies */}
        <div className="card-row members-row">
          {vertical.members.map((member, idx) => (
            <div className="committee-card" key={idx}>
              <img src={member.image} alt={member.name} className="card-image"/>
              <div className="card-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalDetails;
