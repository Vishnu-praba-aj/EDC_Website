import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LegacyBook.css"; // Keep styles for page structure
import "./Committee.css"; // Import styles for member cards

const legacyData = {
  title: "Committee Chronicles",
  years: {
    2020: [
      { name: "John Doe", role: "Founder" },
      { name: "Jane Smith", role: "Co-Founder" },
    ],
    2021: [
      { name: "Robert Brown", role: "Team Lead" },
      { name: "Emily Davis", role: "Marketing Head" },
    ],
    2022: [
      { name: "Michael Wilson", role: "Operations Manager" },
      { name: "Sophia Taylor", role: "Strategy Advisor" },
    ],
  },
};

function LegacyBook() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page when the component mounts
  }, []);

  const goBackToLegacy = () => {
    navigate("/#legacy");
  };

  return (
    <div className="legacy-book-container">
      {/* Back Button
      <button className="back-button" onClick={goBackToLegacy}>
        ← Back
      </button> */}

      {/* Title */}
      <h1 className="book-title">{legacyData.title}</h1>

      {/* Sidebar Year Navigation */}
      <nav className="year-navigation">
        {Object.keys(legacyData.years).map((year) => (
          <a href={`#${year}`} key={year} className="year-item">
            {year}
          </a>
        ))}
      </nav>

      {/* Members Section */}
      <div className="main-content">
        {Object.keys(legacyData.years).map((year) => (
          <section id={year} key={year} className="year-section">
            <h2 className="year-header">Members of {year}</h2>
            <div >
              <div className="committee-row">
                {legacyData.years[year].map((member, index) => (
                  <div key={index} className="committee-card">
                    <div className="committee-photo"></div>
                    <div className="card-info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default LegacyBook;
