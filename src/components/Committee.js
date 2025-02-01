import React from 'react';
import committeeData from './CommitteeData';
import './Committee.css';

const Committee = () => {
  const members = committeeData.members;

  return (
    <div className="committee">
      <h2>Meet the Committee</h2>
      

      <div className="committee-grid">
        {members.map((member, index) => (
          <div key={index} className="committee-card">
            <img src={member.photo} alt={member.name} className="committee-photo" />
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
