import './Speakers.css';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import data from './SpeakersData.js'; // Importing the separated data

function App(){
  return (
    <div className='Background'>
      <h2 className='innovative-speakers'>INNOVATIVE SPEAKERS</h2>
      
      <div className="Body">

      <Carousel autoFocus={true} infiniteLoop={false} autoPlay={false} interval={2000} width={"100%"} dynamicHeight={true} swipeable={true} centerMode={true} centerSlidePercentage={33.33} showThumbs={true} showIndicators={true} showStatus={false}>
          {data.map((d, index) => (
            <div className="speakercard" key={index} style={{ cursor: 'pointer' }}>
              <img src={d.person_image} alt='card_image' className='card_image'></img>
              <div className='card-body'>
                <h3 className='person_name'>{d.person_name}</h3>
                <p className='person_description'><em>{d.person_description}</em></p>
                <p className='short_description'>{d.short_description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
