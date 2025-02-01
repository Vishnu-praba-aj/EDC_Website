import React from 'react';
import committeeData from './CommitteeData';
import './Committee.css';

const Committee = () => {
  // Split the data into heads and members
   // Assuming `heads` array has 10 members
  const members = committeeData.members; // Assuming `members` array has 8 members



  // Split members into 2 rows (4 members each)
  const membersRow1 = members.slice(0, 4);
  const membersRow2 = members.slice(4, 8);

  return (
    <div className=" committee">
      <h2>Meet the Committee</h2>


      <h3 className="section-title">Committee Members</h3>
      {/* Members Row 1 */}
      <div className="committee-row">
        {membersRow1.map((member, index) => (
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

      {/* Members Row 2 */}
      <div className="committee-row">
        {membersRow2.map((member, index) => (
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
