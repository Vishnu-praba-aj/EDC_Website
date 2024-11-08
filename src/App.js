// src/App.js
import React from "react";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Timeline from "./components/Timeline";
import Statistics from "./components/Statistics";
import Faculty from "./components/Faculty";
import Committee from "./components/Committee";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact"; 
import Achievements from "./components/Achievements"; 
import Credits from "./components/Credits";// Import the new component
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Events />
      
      <Statistics />
      <Faculty />
      <Committee />
      <Gallery />
      <Achievements />
      <Credits/>
      <Contact />
    </div>
  );
}

export default App;
