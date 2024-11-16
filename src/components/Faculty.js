// src/components/Faculty.js
import React from 'react';
import facultyData from './FacultyData';
import './Faculty.css';

const Faculty = () => {
    return (
        <div className="section faculty">
            <h2>Faculty Coordinators</h2>
            <div className="faculty-cards">
                {facultyData.map((faculty, index) => (
                    <div key={index} className="faculty-card fade-in">
                        <img src={faculty.photo} alt={faculty.name} className="faculty-photo" />
                        <div className="faculty-info">
                            <h3>{faculty.name}</h3>
                            <h4>{faculty.title}</h4>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faculty;
