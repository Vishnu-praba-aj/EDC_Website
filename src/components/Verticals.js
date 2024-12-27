// Verticals.js
import React from "react";
import "./Verticals.css";
import './Committee.css';
import verticalsData from './verticalsData';  // Importing the data

const Verticals = () => {
  return (
    <div className="verticals-container">
      <h1 className="verticals-heading">Verticals</h1>
      {verticalsData.map((vertical, index) => (
        <div className="vertical-card" key={index}>
          <h2>{vertical.verticalName}</h2>

          {/* Head */}
          <div className="card-row">
            <div className="committee-card">
              <img src={vertical.head.image} alt={vertical.head.name} className="card-image" />
              <div className="card-info">
              <h3>{vertical.head.name}</h3>
              <p>{vertical.head.role}</p>
              <p>{vertical.head.department}</p> {/* Display department */}
              </div>
            </div>
          </div>

          {/* Deputies */}
          <div className="card-row">
            {vertical.deputies.map((deputy, idx) => (
              <div className="committee-card" key={idx}>
                <img src={deputy.image} alt={deputy.name} className="card-image" />
                <div className="card-info">
              <h3>{vertical.head.name}</h3>
              <p>{vertical.head.role}</p>
              <p>{vertical.head.department}</p> {/* Display department */}
              </div>
              </div>
            ))}
          </div>

          {/* Members */}
          <div className="card-row members-row">
            {vertical.members.map((member, idx) => (
              <div className="committee-card" key={idx}>
                <img src={member.image} alt={member.name} className="card-image"/>
                <div className="card-info">
              <h3>{vertical.head.name}</h3>
              <p>{vertical.head.role}</p>
              <p>{vertical.head.department}</p> {/* Display department */}
              </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Verticals;
