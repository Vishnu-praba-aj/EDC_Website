import React from "react";
import { Link } from "react-router-dom";
import './VerticalList.css';

const verticals = [
  { id: 1, name: "Creative & PR", emoji: "🎨" },
  { id: 2, name: "Operations", emoji: "⚙️" },
  { id: 3, name: "IMS", emoji: "📊" },
  { id: 4, name: "PMO", emoji: "📋" },
  { id: 5, name: "Finance", emoji: "💰" },
  { id: 6, name: "Documentation", emoji: "✍️" },
  { id: 7, name: "Logistics", emoji: "🚛" },
  { id: 8, name: "Marketing", emoji: "📈" },
];

const VerticalList = () => {
  return (
    <div id="vertical-list-section" className="vertical-list-container">
      <h2 className="vertical-list-heading">Verticals</h2>
      <div className="vertical-list">
        {verticals.map((vertical) => (
          <div key={vertical.id} className="vertical-card">
            <span className="vertical-emoji">{vertical.emoji}</span>
            <h3 className="vertical-name">{vertical.name}</h3>
            <Link to={`/vertical/${vertical.id}`} className="view-members-button">
              Explore
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalList;
