import React, { useState } from "react";
import "./TeamAccordion.css";
import teams from "./TeamData.js"; // Adjust the path as per your folder structure

const TeamAccordion = () => {
  const [openTeam, setOpenTeam] = useState(null);

  const toggleTeam = (index) => {
    setOpenTeam(openTeam === index ? null : index);
  };

  return (
    <div className="committee">
      {/* Heading for Committee Heads */}
      <h2 className="committee-heading">Committee Heads</h2>

      {/* Team Leads Row */}
      <div className="team-container">
        {teams.slice(0, 5).map((team, index) => (
          <div key={index} className="team-section">
            <div
              className="committee-card"
              onClick={() => toggleTeam(index)}
            >
              <img
                src={team.image}
                alt={team.teamLead}
                className="card-image"
              />
              <h3>{team.teamLead}</h3>
              <p className="white-text">{team.role}</p> {/* White text for description */}
            </div>

            {/* Display team members directly below the lead if clicked */}
            {openTeam === index && (
              <div className="team-members-row">
                {team.members.map((member, idx) => (
                  <div key={idx} className="committee-card">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="card-image"
                    />
                    <h4>{member.name}</h4>
                    <p className="white-text">{member.role}</p> {/* White text for description */}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Second Row of Teams */}
      <div className="team-container">
        {teams.slice(5).map((team, index) => (
          <div key={index} className="team-section">
            <div
              className="committee-card"
              onClick={() => toggleTeam(index + 3)} // Adjust index for the second row
            >
              <img
                src={team.image}
                alt={team.teamLead}
                className="card-image"
              />
              <h3>{team.teamLead}</h3>
              <p className="white-text">{team.role}</p> {/* White text for description */}
            </div>

            {/* Display team members directly below the lead if clicked */}
            {openTeam === index + 3 && (
              <div className="team-members-row">
                {team.members.map((member, idx) => (
                  <div key={idx} className="committee-card">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="card-image"
                    />
                    <h4>{member.name}</h4>
                    <p className="white-text">{member.role}</p> {/* White text for description */}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAccordion;
