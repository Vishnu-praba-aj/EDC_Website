import logo from '../landing_image/logo.svg';
import './Hero.css';
import profile from '../landing_image/profile.jpeg';
import React, { useRef } from 'react';
import entrepreneur from '../landing_image/image.png';


function App({ homeRef,eventsRef, speakersRef, committeeRef, contactRef, scrollToSection }){
  

  return (
    <div className='Background'>
      
      <nav className='Header'>
        <img src={logo} className="appLogo" alt="ReactLogo"></img>
        <ul className='options'>
          <listItem className='optionItem' onClick={() => scrollToSection(homeRef)} style={{ cursor: 'pointer' }}>Home</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(eventsRef)} style={{ cursor: 'pointer' }}>Events</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(speakersRef)} style={{ cursor: 'pointer' }}>Speakers</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(committeeRef)} style={{ cursor: 'pointer' }}>Commitee</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(contactRef)} style={{ cursor: 'pointer' }}>Contact</listItem>
        </ul>
        <img src={profile} className="profile" alt="profile"  style={{ cursor: 'pointer' }}></img>
      </nav>

      <div ref={homeRef} className='picture-description-container'>
        <img src={entrepreneur} className='Entrepreneur-pic' alt="entreprenuer-image"></img>
        <p className='Description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default App;
