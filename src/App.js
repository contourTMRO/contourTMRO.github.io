import Intro from './Intro.js';
import Residentslide1 from './residentSlides/Residentslide1.js';
import Residentslide2 from './residentSlides/Residentslide2.js';
import Residentslide3 from './residentSlides/Residentslide3.js';
import Residentslide4 from './residentSlides/Residentslide4.js';
import Residentslide5 from './residentSlides/Residentslide5.js';

import Studentslide1 from './studentSlides/Studentslide1.js';
import Studentslide2 from './studentSlides/Studentslide2.js';

import './App.css';
import React, { useState, useEffect } from 'react';

// create an array of slides (pairs) first will be the name of the slide, second will be the component
const resident_slides = [
  ['Intro', Intro],
  ['Objectives', Residentslide1],
  ['Slide 2', Residentslide2],
  ['Case 1', Residentslide3],
  ['Case 1', Residentslide4],
  ['Case 1: Question 1', Residentslide5],
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
    console.log("handlePrev");
    if (currentSlide > 0) {
      console.log(currentSlide);
      setCurrentSlide(currentSlide - 1);
      console.log(currentSlide);
    }
  }
  
  const handleNext = () => {
    console.log("handleNext");
    if (currentSlide < slides.length - 1) {
      console.log(currentSlide);
      setCurrentSlide(currentSlide + 1);
      console.log(currentSlide);
    }
  }
  
  //functions to handle the resident and student buttons
  const handleResident = () => {
    setSlides(resident_slides);
    setCurrentSlide(1);
  }

  const handleButtonClick = () => {
    //make the next button unclickable
    //shade the next button
    //go
    console.log("handleButtonClick");
  };
  
  const handleStudent = () => {
    setSlides(student_slides);
    setCurrentSlide(1);
  }
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (currentSlide === 0) return;
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, handlePrev, handleNext]);


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
            {currentSlide === 5 ? <CurrentSlideComponent handlePrev={this.handlePrev}/> : <CurrentSlideComponent />}
            
          </div>
          <div className="button-group">
              <button onClick={handlePrev} className="prev">Back</button>
              <p>{currentSlide} / {slides.length - 1}</p>
              <button onClick={handleNext} className="next">Next</button>
          </div>
      </div>
    );
    }
}

export default App;
