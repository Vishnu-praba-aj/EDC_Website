import React from "react";
import "./Credits.css";

const teamMembers = [
    { name: "Abirami"},
    { name: "Aruna Devi" },
    { name: "Vishnu Praba A J"},
    { name: "Vijay Srinivas" },
    {name: "Vishnu Praba A J"},
    { name: "Alex Johnson" },
    { name: "Maria Lopez" },
    {name: "Vishnu Praba A J"},
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
                        <span className="credit-name">{member.name}</span>  {member.role}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Credits;
