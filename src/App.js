import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero.js";
import Events from "./components/Events";
import Timeline from "./components/Timeline.js";
import Statistics from "./components/Statistics";
import Faculty from "./components/Faculty";
import Committee from "./components/Committee";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Credits from "./components/Credits";
import Speakers from "./components/Speakers";
import Footer from "./components/Footer";
import Legacy from "./components/Legacy"; // New Legacy Section
import LegacyMembers from "./components/LegacyMembers"; // New Legacy Members Page
import Login from "./components/Login"; // Login Page
import Regform from "./components/Regform"; // Register Form
import Admin from "./components/Admin"; // Admin Page
import VerticalList from "./components/VerticalList";
import VerticalDetails from './components/VerticalDetails';  // Import VerticalDetails
import "./App.css";

function App() {
  const homeRef = useRef(null);
  const eventsRef = useRef(null);
  const speakersRef = useRef(null);
  const committeeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}

        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <>
                <Hero
                  homeRef={homeRef}
                  eventsRef={eventsRef}
                  speakersRef={speakersRef}
                  committeeRef={committeeRef}
                  contactRef={contactRef}
                  scrollToSection={scrollToSection}
                />
                <Statistics />
                <div ref={eventsRef}>
                  <Timeline />
                </div>
                <div ref={speakersRef}>
                  <Speakers />
                </div>
                <div ref={committeeRef}>
                  <Faculty />
                </div>

                <Committee />
                <VerticalList />
                <Legacy /> {/* New Legacy Section */}
                <Gallery />
                <Achievements />
                <div ref={contactRef}>
                  <Contact />
                </div>
                <Credits />
                <Footer />
              </>
            }
          />
          
          {/* Additional Routes */}
          <Route path="/legacy-members" element={<LegacyMembers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regform />} />
          <Route path="/admin" element={<Admin />} />
          
          {/* Route for VerticalDetails */}
          <Route path="/vertical/:id" element={<VerticalDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
