// src/components/Committee.js
import React from 'react';
import committeeData from './CommitteeData';
import './Committee.css';

const Committee = () => {
  // Split members into two groups for equal rows
  const half = Math.ceil(committeeData.length / 2);
  const row1 = committeeData.slice(0, half);
  const row2 = committeeData.slice(half);

  return (
    <div className="section committee">
      <h2>Meet the Committee</h2>

      {/* Row 1 */}
      <div className="committee-row">
        {row1.map((member, index) => (
          <div key={index} className="committee-card">
            <img src={member.photo} alt={member.name} className="committee-photo" />
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="description">{member.description}</p> {/* Added description */}
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="committee-row">
        {row2.map((member, index) => (
          <div key={index} className="committee-card">
            <img src={member.photo} alt={member.name} className="committee-photo" />
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="description">{member.description}</p> {/* Added description */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
