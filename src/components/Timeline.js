import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // For "More" icon
import "./Timeline.css"; // Import the updated CSS

const events = [
  {
    title: "Event 1",
    date: "January 2024",
    description: "Short description of event 1.",
    moreDetails: "Here are more details about Event 1, including background, speakers, and outcomes.",
  },
  {
    title: "Event 2",
    date: "February 2024",
    description: "Short description of event 2.",
    moreDetails: "Here are more details about Event 2, including highlights, sponsors, and key moments.",
  },
  {
    title: "Event 3",
    date: "March 2024",
    description: "Short description of event 3.",
    moreDetails: "More details about Event 3, such as speakers, special sessions, and audience feedback.",
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
                  <><FaArrowUp /> Show Less</>
                ) : (
                  <><FaArrowDown /> Show More</>
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
