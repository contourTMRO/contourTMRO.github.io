import Intro from './Intro.js';
import Residentslide1 from './residentSlides/Residentslide1.js';
import Residentslide2 from './residentSlides/Residentslide2.js';
import Residentslide3 from './residentSlides/Residentslide3.js';
import Residentslide4 from './residentSlides/Residentslide4.js';
import Residentslide5 from './residentSlides/Residentslide5.js';
import Residentslide6 from './residentSlides/Residentslide6.js';
import Residentslide7 from './residentSlides/Residentslide7.js';
import Residentslide8 from './residentSlides/Residentslide8.js';
import Residentslide9 from './residentSlides/Residentslide9.js';
import Residentslide10 from './residentSlides/Residentslide10.js';
import Residentslide11 from './residentSlides/Residentslide11.js';
import Residentslide12 from './residentSlides/Residentslide12.js';
import Residentslide13 from './residentSlides/Residentslide13.js';
import Residentslide14 from './residentSlides/Residentslide14.js';
import Residentslide15 from './residentSlides/Residentslide15.js';
import Residentslide16 from './residentSlides/Residentslide16.js';
import Residentslide17 from './residentSlides/Residentslide17.js';
import Residentslide18 from './residentSlides/Residentslide18.js';
import Residentslide19 from './residentSlides/Residentslide19.js';
import Residentslide20 from './residentSlides/Residentslide20.js';
import Residentslide21 from './residentSlides/Residentslide21.js';
import Residentslide22 from './residentSlides/Residentslide22.js';

import Studentslide1 from './studentSlides/Studentslide1.js';
import Studentslide2 from './studentSlides/Studentslide2.js';

import Contourslide from './studentSlides/Contourslide.js';

import './App.css';
import React, { useState, useEffect } from 'react';

// create an array of slides (pairs) first will be the name of the slide, second will be the component
const resident_slides = [
  ['Intro', Intro],
  ['Objectives', Residentslide1],
  ['Disclaimer', Residentslide2],
  ['Case 1', Residentslide3],
  ['Case 1', Residentslide4],
  ['Case 1: Question 1', Residentslide5],
  ['Endometrial Cancer Staging Review', Residentslide6],
  ['Case 1: Question 2', Residentslide7],
  ['Case 1: Question 3', Residentslide8],
  ['Case 1', Residentslide9],
  ['Case 1: Question 4', Residentslide10],
  ['Case 1: Question 5', Residentslide11],
  ['Case 1', Residentslide12],
  ['Case 1: Question 6', Residentslide13],
  ['Case 1: Question 7', Residentslide14],
  ['Case 1', Residentslide15],
  ['Case 1 Complete!', Residentslide16],
  ['Case 2', Residentslide17],
  ['Case 2', Residentslide18],
  ['Case 2: Question 1', Residentslide19],
  ['Cervical Cancer Staging Review', Residentslide20],
  ['Case 2: Question 2', Residentslide21],
  ['Case 2', Residentslide22]

]

const student_slides = [
  ['Intro', Intro],
  ['Contour', Contourslide],
  ['Slide 1', Studentslide1],
  ['Slide 2', Studentslide2],
]

// Set to hold slides that have a question on it
const set = new Set();

set.add(JSON.stringify(["resident_slides", 5]));
set.add(JSON.stringify(["resident_slides", 7]));
set.add(JSON.stringify(["resident_slides", 8]));
set.add(JSON.stringify(["resident_slides", 10]));
set.add(JSON.stringify(["resident_slides", 11]));
set.add(JSON.stringify(["resident_slides", 13]));
set.add(JSON.stringify(["resident_slides", 14]));
set.add(JSON.stringify(["resident_slides", 19]));
set.add(JSON.stringify(["resident_slides", 21]));


function App() {
  //create a state variable to keep track of resident or student
  const [slides, setSlides] = useState(resident_slides);
  // Create a state variable to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  // name of the slides
  const[slidesName, setSlidesName] = useState("resident_slides");
  // state variable to keep track of whether the next button should be hidden
  const [hideNext, setHideNext] = useState(false);
  //make a const for the current slide
  const CurrentSlideComponent = slides[currentSlide][1];

  
  // Functions to handle the Previous and Next buttons
  const handlePrev = () => {
    console.log("handlePrev");
    setHideNext(false);
    if (currentSlide > 0) {
      console.log(currentSlide);
      setCurrentSlide(currentSlide - 1);
      console.log(currentSlide);
      document.body.style.overflow = "auto";
    }
  }
  
  const handleNext = () => {
    console.log("handleNext");
    if (hideNext) return;
    if (currentSlide < slides.length - 1) {
      console.log(currentSlide);
      setCurrentSlide(currentSlide + 1);
      console.log(currentSlide);
      document.body.style.overflow = "auto";
    }
  }

  const handleHideNext = () => {
    // gray out the next button
    // make the next button unclickable
    console.log("handleHideNext");
    // UNCOMMENT
    // setHideNext(true);
  }

  const handleUnhideNext = () => {
    // gray out the next button
    // make the next button unclickable
    console.log("handleUnhideNext");
    setHideNext(false);
  }
  
  //functions to handle the resident and student buttons
  const handleResident = () => {
    setSlides(resident_slides);
    setCurrentSlide(1);
    setSlidesName("resident_slides");
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
    setSlidesName("student_slides");
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
            {set.has(JSON.stringify([slidesName, currentSlide])) ? <CurrentSlideComponent handleHideNext={handleHideNext} handleUnhideNext={handleUnhideNext}/> : <CurrentSlideComponent />}
          </div>
          <div className="button-group">
              <button onClick={handlePrev} className="prev">Back</button>
              <p>{currentSlide} / {slides.length - 1}</p>
              <button onClick={handleNext} className="next" disabled={hideNext} background-color='gray'>Next</button>
          </div>
      </div>
    );
    }
}

export default App;
