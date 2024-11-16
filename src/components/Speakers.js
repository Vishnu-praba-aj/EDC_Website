import './Speakers.css';
import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const data1= [
  {
    person_image:"/speakers/s1.jpg",  // Using imported image here
    person_name: 'NAME OF THE SPEAKER 1',
    person_description: 'What does he do',
    short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: "/speakers/s2.jpg",
    person_name: 'NAME OF THE SPEAKER 2',
    person_description: 'What does he do',
    short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: "/speakers/s3.jpg",
    person_name: 'NAME OF THE SPEAKER 2',
    person_description: 'What does he do',
    short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Repeat for other speakers
];

function App(){
  

  return (
    <div className='Background'>

      <h2 className='innovative-speakers' >INNOVATIVE SPEAKERS</h2>
     {
      <div className='Body'>
      <Carousel autoFocus={true}  infiniteLoop={true} autoPlay={true} interval={2000} width={1000} dynamicHeight={false} swipeable={true} centerMode={true} centerSlidePercentage={33.33} showThumbs={false} showIndicators={true} showStatus={false}>
        {data1.map((d,index) => (
          <div className="card"  style={{ cursor: 'pointer' }}>
            <img src={d.person_image} alt='card_image' className='card_image'></img>
            <div className='card-body'>
              <h3 className='person_name'>{d.person_name}</h3>
              <p className='person_description'><em>{d.person_description}</em></p>
              <p className='short_description'>{d.short_description}</p>
            </div>
          </div>
        ))}
        </Carousel>
    </div>}
    </div>
  );
}


const data = [
  {
    person_image: 'images/bg.png',
    person_name: 'NAME OF THE SPEAKER 1',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: 'images/bg.png',
    person_name: 'NAME OF THE SPEAKER 2',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: 'images/bg.png',
    person_name: 'NAME OF THE SPEAKER 3',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: 'images/bg.png',
    person_name: 'NAME OF THE SPEAKER 4',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    person_image: 'images/bg.png',
    person_name: 'NAME OF THE SPEAKER 5',
    person_description: 'What does he do',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default App;

