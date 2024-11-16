// src/components/Statistics.js
import React, { useState, useEffect } from 'react';
import './Statistics.css';

const Statistics = () => {
    const [members, setMembers] = useState(0);
    const [events, setEvents] = useState(0);
    const [workshops_seminars, setPartners] = useState(0);

    useEffect(() => {
        const increment = setInterval(() => {
            setMembers((prev) => Math.min(prev + 1, 220));
            setEvents((prev) => Math.min(prev + 1, 75));
            setPartners((prev) => Math.min(prev + 1, 100));
        }, 50); // Adjust the speed here
        return () => clearInterval(increment);
    }, []);

    return (
        <div className="section stats">
            <h2>Our Impact</h2>
            <div className="stats-cards">
                <div className="card stat-card">
                    <h3 className="count-up">{members}</h3>
                    <p>Members</p>
                </div>
                <div className="card stat-card">
                    <h3 className="count-up">{events}</h3>
                    <p>Events Conducted</p>
                </div>
                <div className="card stat-card">
                    <h3 className="count-up">{workshops_seminars}</h3>
                    <p>Workshops & Seminars</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
