import React from 'react';
import committeeData from './CommitteeData';
import './Committee.css';

const Committee = () => {
  // Split the data into heads and members
  const heads = committeeData.heads; // Assuming `heads` array has 10 members
  const members = committeeData.members; // Assuming `members` array has 8 members

  // Split heads into 2 rows (5 members each)
  const headsRow1 = heads.slice(0, 5);
  const headsRow2 = heads.slice(5, 10);

  // Split members into 2 rows (4 members each)
  const membersRow1 = members.slice(0, 4);
  const membersRow2 = members.slice(4, 8);

  return (
    <div className="section committee">
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
      
      <h3 className="section-title">Core Committee Heads</h3>
      {/* Heads Row 1 */}
      <div className="committee-row">
        {headsRow1.map((head, index) => (
          <div key={index} className="committee-card">
            <img src={head.photo} alt={head.name} className="committee-photo" />
            <div className="card-info">
              <h3>{head.name}</h3>
              <p>{head.role}</p>
              <p1>{head.dept}</p1>
              <p className="description">{head.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Heads Row 2 */}
      <div className="committee-row">
        {headsRow2.map((head, index) => (
          <div key={index} className="committee-card">
            <img src={head.photo} alt={head.name} className="committee-photo" />
            <div className="card-info">
              <h3>{head.name}</h3>
              <p>{head.role}</p>
              <p1>{head.dept}</p1>
              <p className="description">{head.description}</p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Committee;
