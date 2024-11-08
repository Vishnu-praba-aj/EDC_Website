import React from "react";
import "./Credits.css";

const teamMembers = [
    { name: "Abirami", role: "Frontend Development" },
    { name: "Aruna Devi", role: "Frontend Developer" },
    { name: "Vishnu Praba A J", role: "Frontend Developer" },
    { name: "Maria Lopez", role: "Project Manager" },
    {name: "Vishnu Praba A J", role: "Web development"},
    { name: "Alex Johnson", role: "UI/UX Designer" },
    { name: "Maria Lopez", role: "Project Manager" },
    {name: "Vishnu Praba A J", role: "Web development"},
    // Add more team members as needed
];

const Credits = () => {
    return (
        <section className="credits">
            <h2 className="credits-title">Credits</h2>
            <p className="credits-description">This website was created with contributions from the following team members:</p>
            <ul className="credits-list">
                {teamMembers.map((member, index) => (
                    <li key={index} className="credit-item">
                        <span className="credit-name">{member.name}</span> - {member.role}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Credits;
