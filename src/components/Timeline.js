import React, { useState } from 'react';
import './Timeline.css';  // Make sure your CSS file is correctly linked

const events = [
  {
    id: 1,
    name: 'Event 1',
    details: 'Details about event 1',
    description: 'Here is more detailed information about Event 1...',
  },
  {
    id: 2,
    name: 'Event 2',
    details: 'Details about event 2',
    description: 'Here is more detailed information about Event 2...',
  },
  {
    id: 3,
    name: 'Event 3',
    details: 'Details about event 3',
    description: 'Here is more detailed information about Event 3...',
  },
  // Add more events as needed
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-heading">Timeline</h1>  {/* Add Heading Here */}

      <div className="timeline">
        <div className="timeline-line"></div> {/* Yellow Line */}

        {events.map((event, index) => (
          <div
            className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
            key={event.id}
          >
            <div className="timeline-card">
              <h2>{event.name}</h2>
              <p>{event.details}</p>
              <div className="event-hover">
                <button>View Description</button>
              </div>
              <div className="event-description">
                <h3>{event.name} Description</h3>
                <p>{event.description}</p>
                <button className="register-btn">Register</button>
              </div>
            </div>
            <div className="timeline-pin"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
