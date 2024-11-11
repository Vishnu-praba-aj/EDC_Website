import React , {useRef}from "react";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Timeline from "./components/Timeline";
import Statistics from "./components/Statistics";
import Faculty from "./components/Faculty";
import Committee from "./components/Committee";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Speakers from "./components/Speakers.js"
import './App.css';

function App() {
  const homeRef = useRef(null);
  const eventsRef = useRef(null);
  const speakersRef = useRef(null);
  const committeeRef = useRef(null);
  const contactRef = useRef(null);

  
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Hero 
      homeRef={homeRef}
      eventsRef={eventsRef}
      speakersRef={speakersRef}
      committeeRef={committeeRef}
      contactRef={contactRef}
      scrollToSection={scrollToSection} 
      />
      <Events />
      <div ref={eventsRef}>
        <Timeline />
      </div>
      <Statistics />
      <div ref={speakersRef}>
        <Speakers />
      </div>
      <div ref={committeeRef}>
        <Faculty />
      </div>
      <Committee />
      <Gallery />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
