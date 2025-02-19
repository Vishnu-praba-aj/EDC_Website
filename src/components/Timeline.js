import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // For "More" icon
import "./Timeline.css"; // Import the updated CSS

const events = [
  {
    title: "Mela",
    date: "21st Feb 2025",
    description: "Mela-The Enterpreneurship Carnival",
    moreDetails: "Every year, around the month of February, the campus of SSN College of Engineering comes alive with the energy of Mela, the annual carnival organized by the Lakshya Entrepreneurship Club. This one-day festival is a vibrant showcase of student-driven entrepreneurial spirit, with stalls offering everything from flavorful treats like chaats, biryanis, momos, and fresh juices to handmade crafts, art, games, and much more. Lakshya has designed Mela as more than just an event—it’s an opportunity for students to get hands-on entrepreneurial experience. From bidding in live auctions to secure their ideal stalls, to designing marketing plans that reach people on social media and across campus, Mela lets students dive into the world of business in a way that goes beyond the classroom. They get to see their ideas come to life, connecting with customers and managing real sales on the big day.But Mela isn’t just for stall owners. For everyone on campus, it’s a chance to come together, celebrate, and experience the creativity of their peers. Mela is where food, art, and games combine into a festive, unforgettable experience, and where the excitement of entrepreneurship fills the air."
  },

  {
    title: "Marketplace Maze",
    date: "March 2025",
    description: "Short description of event 2.",
    moreDetails: "Here are more details about Event 2, including highlights, sponsors, and key moments.",
  },

  {
    title: "Sycon",
    date: "April 2025",
    description: "Short description of event 3.",
    moreDetails: "Sycon- The conference.Sycon, the annual business summit hosted by the Lakshya Entrepreneurship Club at SSN College of Engineering, is a dynamic blend of inspiration, learning, and fun. Designed to ignite the entrepreneurial spirit, Sycon brings in leading entrepreneurs and social media personalities to share their journeys and insights with the budding entrepreneurs of SSN. Past speakers have included well-known names like Pradeep Ranganathan, Sylendra Babu, Srimathy Kesan,Vikkals Vikram, the Blacksheep, and Santhosh Premkumar, each sharing the highs and lows of their paths to success.This one-day event goes beyond traditional conferences by weaving music, dance, and games into the schedule, ensuring a lively and engaging experience for all attendees. Sycon not only inspires students to imagine their own business ventures but also teaches essential organizational skills through its large committee of student volunteers. Together, these elements make Sycon a memorable day for participants, filled with valuable lessons and lasting excitement."
  },
  
 
];

function Timeline() {
  const [expandedEventIndex, setExpandedEventIndex] = useState(null);

  const handleMoreClick = (index) => {
    setExpandedEventIndex(expandedEventIndex === index ? null : index);
  };

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Event Timeline</h1>
      <div className="timeline">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="event-content">
              <h2>{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
              {expandedEventIndex === index && (
                <p className="event-details">{event.moreDetails}</p>
              )}
              <button className="more-btn" onClick={() => handleMoreClick(index)}>
                  {expandedEventIndex === index ? (
                      <>Show Less<FaArrowUp /></>
                     ) : (
                      <>Show More<FaArrowDown /></>
                  )}
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
