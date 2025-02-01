// src/components/Gallery.js
import React, { useState } from "react";
import "./Gallery.css";

const images = [
  "/gallery/910.jpg",
  "/gallery/g9.jpg",
  "/gallery/g11.jpg",
  "/gallery/g12.jpg",
  "/gallery/g1.jpg",
  "/gallery/g7.jpg",
  "/gallery/g8.jpg",
  "/gallery/g4.jpg",
  "/gallery/g5.jpg",
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="gallery-wrapper" onMouseLeave={handleMouseLeave}>
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
      <p className="instruction">Swipe or hover to explore</p>
    </div>
  );
};

export default Gallery;
