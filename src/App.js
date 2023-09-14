import Intro from './Intro.js';
import Residentslide1 from './residentSlides/Residentslide1.js';
import Residentslide2 from './residentSlides/Residentslide2.js';

import Studentslide1 from './studentSlides/Studentslide1.js';
import Studentslide2 from './studentSlides/Studentslide2.js';

import './App.css';
import React, { useState } from 'react';

// create an array of slides (pairs) first will be the name of the slide, second will be the component
const resident_slides = [
  ['Intro', Intro],
  ['Slide 1', Residentslide1],
  ['Slide 2', Residentslide2],
]

const student_slides = [
  ['Intro', Intro],
  ['Slide 1', Studentslide1],
  ['Slide 2', Studentslide2],
]

function App() {
  //create a state variable to keep track of resident or student
  const [slides, setSlides] = useState(resident_slides);
  // Create a state variable to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  //make a const for the current slide
  const CurrentSlideComponent = slides[currentSlide][1];



  // Functions to handle the Previous and Next buttons
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }
  
  //functions to handle the resident and student buttons
  const handleResident = () => {
    setSlides(resident_slides);
    setCurrentSlide(1);
  }

  const handleStudent = () => {
    setSlides(student_slides);
    setCurrentSlide(1);
  }

  if(currentSlide === 0) return (
    <div className="slideshow-container">
        <div className="header">
            <h1>{slides[currentSlide][0]}</h1>
        </div>
        <div className="content-box">
          <Intro/>
        </div>
        <div className="intro-button-group">
            <button onClick={handleResident} className="resident">Resident</button>
            <button onClick={handleStudent} className="student">Medical Student</button>
        </div>
    </div>
  );


  else {
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
}

export default App;
