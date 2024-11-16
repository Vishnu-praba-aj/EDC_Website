import React , {useRef}from "react";
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
import Footer from "./components/Footer"
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
      
      <Statistics />
      {
      <div ref={eventsRef}>
        <Timeline />
      </div>}
      
      

     


      <div ref={speakersRef}>
        <Speakers />
      </div>

      <div ref={committeeRef}>
        <Faculty />
      </div>
      <Committee />
      <Gallery />
      <Achievements/>
      
      <div ref={contactRef}>
        <Contact />
      </div>
      <Credits/>
      <Footer/>
    </div>
  );
}

export default App;
