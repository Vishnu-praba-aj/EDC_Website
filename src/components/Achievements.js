import React, { useEffect } from "react";
import "./Achievements.css";
import { triggerConfetti } from "./Confetti";

const Achievements = () => {
    useEffect(() => {
        const achievementsSection = document.querySelector(".achievements");

        function handleHover() {
            triggerConfetti(); // Trigger confetti on hover
        }

        achievementsSection.addEventListener("mouseenter", handleHover);

        return () => achievementsSection.removeEventListener("mouseenter", handleHover);
    }, []);

    return (
        <div className="achievements">
            <div className="trophy-section">
                <div className="trophy-icon">🏆</div>
            </div>
            <div className="achievements-content">
                <h2 className="achievements-title">Achievements</h2>
                
                <div className="achievements-cards">
                    {/* Achievement cards go here */}
                    <div className="achievement-card">
                        <img src="Achievements\a1.jpg" alt="Award 1" className="award-image" />
                        <h3 className="achievement-heading">Award 1</h3>
                        <p className="achievement-text">Description of award 1.</p>
                    </div>
                    <div className="achievement-card">
                        <img src="Achievements\a1.jpg" alt="Award 2" className="award-image" />
                        <h3 className="achievement-heading">Award 2</h3>
                        <p className="achievement-text">Description of award 2.</p>
                    </div>
                    <div className="achievement-card">
                        <img src="Achievements\a1.jpg" alt="Award 3" className="award-image" />
                        <h3 className="achievement-heading">Award 3</h3>
                        <p className="achievement-text">Description of award 3.</p>
                    </div>
                </div>
            </div>
            <div className="confetti-container"></div>
        </div>
    );
};

export default Achievements;
