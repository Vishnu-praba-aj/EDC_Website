
import './Hero.css';
import React, { useRef,useEffect,useState } from 'react';



function App({ homeRef,eventsRef, speakersRef, committeeRef, contactRef, scrollToSection }){
  
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  
  const [displayedText, setDisplayedText] = useState(""); // State for animated text

  const eventName = "Mela";// event name

  
  useEffect(() => {
    const targetDate = new Date("2025-02-22T23:59:59"); //  target date and time here

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer); 
  }, []);


  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      
      setDisplayedText(eventName.slice(0, index + 1));

      index++;
      if (index === eventName.length) clearInterval(interval); // Stop when full text is displayed
    }, 250); // Adjust speed 

    return () => clearInterval(interval);
  }, [eventName]);



  return (
    <div className='Background'>
      
      <nav className='Header'>
        <img src={'images/lakshaya_logo.jpg'} className="appLogo" alt="ReactLogo"></img>
        <ul className='options'>
          <listItem className='optionItem' onClick={() => scrollToSection(homeRef)} style={{ cursor: 'pointer' }}>Home</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(eventsRef)} style={{ cursor: 'pointer' }}>Events</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(speakersRef)} style={{ cursor: 'pointer' }}>Speakers</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(committeeRef)} style={{ cursor: 'pointer' }}>Commitee</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(contactRef)} style={{ cursor: 'pointer' }}>Contact</listItem>
        </ul>
        <img src={'images/lakshaya_logo.jpg'} className="profile" alt="profile"  style={{ cursor: 'pointer' }}></img>
      </nav>

      {/* Countdown Timer */}
      <div className="countdown-timer">
      <div className="countdown-flex-container">
        <p className="EventName-display-container">
          {displayedText}&nbsp;&nbsp;&nbsp;&nbsp;
          {timeLeft.hours.toString().padStart(2, '0')} : 
          {timeLeft.minutes.toString().padStart(2, '0')} : 
          {timeLeft.seconds.toString().padStart(2, '0')}
        </p>
        <button className="register-button" style={{ cursor: 'pointer' }}>Register</button>
        </div>
      </div>

      <div ref={homeRef} className='picture-description-container'>
        <img src={'images/hero1.jpeg'} className='Entrepreneur-pic' alt="entreprenuer-image"></img>
        <p className='LakshayaText'>LAKSHYA</p>
        {<p className='Description'>Unleasing Ideas, Igniting Entrepreneurs.</p>}
      </div>

      <div className='AboutUs-container'>
        <h1 className='AboutUs'>AboutUs</h1>
        <p className='AboutUs-content'>
        Lakshya – SSN’s Entrepreneurship Development Cell was established in 2006 and has since become one of the most dynamic and prominent organizations on campus, representing the entrepreneurial spirit of SSN. Each year, we host a variety of high-impact events, including MELA, SYCon, UDAAN, as well as student workshops and webinars, which engage and inspire students to explore their entrepreneurial potential.

With a legacy spanning over 18 years, Lakshya has grown into a well-established organization, now consisting of a vibrant community of over 2,000 students. Our initiatives are designed to foster leadership, creativity, and entrepreneurial thinking, equipping students with the skills needed to thrive in today’s fast-evolving world.

Notably, our E-Cell has achieved national recognition, winning the prestigious E-Week India Trophy in both 2010 and 2011, and securing runner-up positions in 2012 and 2013, all under the esteemed guidance of the National Entrepreneurship Network (NEN). These accolades highlight our unwavering commitment to promoting entrepreneurship and 
leadership among SSN students.</p>
      </div>
    </div>
    
  );
}

export default App;
