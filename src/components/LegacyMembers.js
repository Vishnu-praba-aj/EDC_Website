import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LegacyMembers.css"; // Keep styles for page structure

const legacyData = {
  title: "Committee Chronicles",
  years: {
    2023: [
      { name: "Lakshmi Priya Anbarasu", role: "", 
        linkedin: "https://www.linkedin.com/in/lakshmi-priya-anbarasu-490463206/", 
        image: "Members_2023/lakshmi-priya-anbarasu1.jpg"
      },
      { name: "Abdurrahman Lalsudhesh", role: "", 
        linkedin: "https://www.linkedin.com/in/abdurrahman-lalsudhesh-h/", 
        image: "Members_2023/abdurrahman-lalsudhesh-h.jpg"
      },
      { name: "Suneeth Damodharan", role: "", 
        linkedin: "https://www.linkedin.com/in/suneeth-damodharan-2537a81b9/", 
        image: "Members_2023/Suneeth Damodharan.jpg"
      },
      { name: "Sai Sandeep", role: "", 
        linkedin: "https://www.linkedin.com/in/kovi-sai-sandeep-7874a91b5/", 
        image: "Members_2023/sai-sandeep.jpg"
      },
      { name: "Muthuvelan Mutharasu", role: "", 
        linkedin: "https://www.linkedin.com/in/muthuvelan-mutharasu-766227261/", 
        image: "Members_2023/muthuvelan-mutharasu.jpg"
      },
      { name: "Shri Thrisha", role: "", 
        linkedin: "https://www.linkedin.com/in/shri-thrisha/", 
        image: "Members_2023/shri-thrisha.jpg"
      },
      { name: "Jiiteash", role: "", 
        linkedin: "https://www.linkedin.com/in/jiitesh/", 
        image: "Members_2023/jiitesh.jpg"
      },
    ],
  },
};

// Helper function to divide members into chunks of 4
const chunkArray = (array, chunkSize) => {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

function LegacyBook() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page when the component mounts
  }, []);

  const goBackToLegacy = () => {
    navigate(-1);
    setTimeout(() => {
      const section = document.getElementById("legacy");
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="legacy-book-container">
      {/* Back Button */}
      <button onClick={goBackToLegacy} className="back-button">
        Back
      </button>

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
            {chunkArray(legacyData.years[year], 4).map((memberRow, index) => (
              <div key={index} className="committee-row">
                {memberRow.map((member, index) => (
                  <div key={index} className="committee-card1">
                    {/* Member Image */}
                    <div className="committee-photo1">
                      <img src={member.image} alt={member.name} className="member-image" />
                    </div>
                    <div className="card-info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

export default LegacyBook;
