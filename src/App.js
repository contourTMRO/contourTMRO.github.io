import Slide1 from './Slide1.js';
import Slide2 from './Slide2.js';
import './App.css';
import React, { useState } from 'react';

// create an array of slides (pairs) first will be the name of the slide, second will be the component
const slides = [
  ['Slide 1', Slide1],
  ['Slide 2', Slide2],
]

function App() {
  // Create a state variable to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  //make a const for the current slide
  const CurrentSlideComponent = slides[currentSlide][1];


  // Functions to handle the Previous and Next buttons
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      // setCurrentSlideComponent(slides[currentSlide][1]);
    }
  }

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      // setCurrentSlideComponent(slides[currentSlide][1]);
    }
  }

  return (
    <div className="slideshow-container">
        <div className="header">
            <h1>{slides[currentSlide][0]}</h1>
        </div>
        <div className="content-box">
          <CurrentSlideComponent/>
        </div>
        <div className="button-group">
            <button onClick={handlePrev} className="prev">Previous</button>
            <button onClick={handleNext} className="next">Next</button>
        </div>
    </div>
  );
}

export default App;
