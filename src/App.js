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
import Residentslide23 from './residentSlides/Residentslide23.js';
import Residentslide24 from './residentSlides/Residentslide24.js';
import Residentslide25 from './residentSlides/Residentslide25.js';
import Residentslide26 from './residentSlides/Residentslide26.js';
import Residentslide27 from './residentSlides/Residentslide27.js';
import Residentslide28 from './residentSlides/Residentslide28.js';
import Residentslide29 from './residentSlides/Residentslide29.js';
import Residentslide30 from './residentSlides/Residentslide30.js';
import Residentslide31 from './residentSlides/Residentslide31.js';
import Residentslide32 from './residentSlides/Residentslide32.js';
import Residentslide33 from './residentSlides/Residentslide33.js';

import Studentslide1 from './studentSlides/Studentslide1.js';
import Studentslide2 from './studentSlides/Studentslide2.js';
import Studentslide3 from './studentSlides/Studentslide3.js';
import Studentslide4 from './studentSlides/Studentslide4.js';
import Studentslide5 from './studentSlides/Studentslide5.js';
import Studentslide6 from './studentSlides/Studentslide6.js';
import Studentslide7 from './studentSlides/Studentslide7.js';
import Studentslide8 from './studentSlides/Studentslide8.js';
import Studentslide9 from './studentSlides/Studentslide9.js';
import Studentslide10 from './studentSlides/Studentslide10.js';
import Studentslide11 from './studentSlides/Studentslide11.js';
import Studentslide12 from './studentSlides/Studentslide12.js';
import Studentslide13 from './studentSlides/Studentslide13.js';
import Studentslide14 from './studentSlides/Studentslide14.js';
import Studentslide15 from './studentSlides/Studentslide15.js';
import Studentslide16 from './studentSlides/Studentslide16.js';
import Studentslide17 from './studentSlides/Studentslide17.js';
import Studentslide18 from './studentSlides/Studentslide18.js';
import Studentslide19 from './studentSlides/Studentslide19.js';
import Studentslide20 from './studentSlides/Studentslide20.js';
import Studentslide21 from './studentSlides/Studentslide21.js';
import Studentslide22 from './studentSlides/Studentslide22.js';
import Studentslide23 from './studentSlides/Studentslide23.js';
import Studentslide24 from './studentSlides/Studentslide24.js';
import Studentslide25 from './studentSlides/Studentslide25.js';
import Studentslide26 from './studentSlides/Studentslide26.js';
import Studentslide27 from './studentSlides/Studentslide27.js';
import Studentslide29 from './studentSlides/Studentslide29.js';
import Studentslide30 from './studentSlides/Studentslide30.js';
import Studentslide31 from './studentSlides/Studentslide31.js';
import Studentslide32 from './studentSlides/Studentslide32.js';
import Studentslide33 from './studentSlides/Studentslide33.js';
import Studentslide34 from './studentSlides/Studentslide34.js';
import Studentslide35 from './studentSlides/Studentslide35.js';
import Studentslide36 from './studentSlides/Studentslide36.js';
import Studentslide37 from './studentSlides/Studentslide37.js';
import Studentslide38 from './studentSlides/Studentslide38.js';
import Studentslide39 from './studentSlides/Studentslide39.js';
import Studentslide40 from './studentSlides/Studentslide40.js';
import Studentslide41 from './studentSlides/Studentslide41.js';
import Studentslide42 from './studentSlides/Studentslide42.js';


import Contourslide from './studentSlides/Contourslide.js';
import Contourintro from './studentSlides/Contourintro.js';
import Contourslidecopy from './studentSlides/Contourslide-copy.js';

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
  ['Case 2', Residentslide22],
  ['Case 2: Question 3', Residentslide23],
  ['Case 2: Question 4', Residentslide24],
  ['Case 2: Question 5', Residentslide25],
  ['Case 2', Residentslide26],
  ['Case 2: Question 6', Residentslide27],
  ['Case 2', Residentslide28],
  ['Case 2: Question 7', Residentslide29],
  ['Case 2: Question 8', Residentslide30],
  ['Case 2', Residentslide31],
  ['Module Complete!', Residentslide32],
  ['References', Residentslide33]
]

const student_slides = [
  ['Intro', Intro],
  ['What is radiation oncology?', Studentslide1],
  ['How does radiation therapy work?', Studentslide2],
  ['Electron Direct Effect', Studentslide3],
  ['Electron Indirect Effect', Studentslide4],
  ['How is radiation delivered?', Studentslide5],
  ['LINAC', Studentslide6],
  ['Placeholder', Studentslide7],
  ['Question 1', Studentslide8],
  ['Prescribing radiation', Studentslide9],
  ['Sample Case', Studentslide10],
  ['Case Vignette', Studentslide11],
  ['Question 2: Can radiation help this patient?' , Studentslide12],
  ['Question 13: Bladder cancer staging', Studentslide13],
  ['Palliative radiation', Studentslide14],
  ['Placeholder', Studentslide15],
  ['Placeholder', Studentslide16],
  ['Overview of the radiation process', Studentslide17],
  ['Simulation scan', Studentslide18],
  ['Placeholder', Studentslide19],
  ['Placeholder', Studentslide20],
  ['Placeholder', Studentslide21],
  ['Placeholder', Studentslide22],
  ['Placeholder', Studentslide23],
  ['Placeholder', Studentslide24],
  ['Placeholder', Studentslide25],
  ['Placeholder', Studentslide26],
  ['Placeholder', Studentslide27],
  ['Contour Intro', Contourintro],
  ['Contour', Contourslide],
  ['Placeholder', Studentslide30],
  ['Placeholder', Studentslide31],
  ['Placeholder', Studentslide32],
  ['Placeholder', Studentslide33],
  ['Placeholder', Studentslide34],
  ['Placeholder', Studentslide35],
  ['Placeholder', Studentslide36],
  ['Placeholder', Studentslide37],
  ['Placeholder', Studentslide38],
  ['Placeholder', Studentslide39],
  ['Placeholder', Studentslide40],
  ['Placeholder', Studentslide41],
  ['Placeholder', Studentslide42],
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
set.add(JSON.stringify(["resident_slides", 23]));
set.add(JSON.stringify(["resident_slides", 24]));
set.add(JSON.stringify(["resident_slides", 25]));
set.add(JSON.stringify(["resident_slides", 27]));
set.add(JSON.stringify(["resident_slides", 29]));
set.add(JSON.stringify(["resident_slides", 30]));

set.add(JSON.stringify(["student_slides", 8]));
set.add(JSON.stringify(["student_slides", 12]));
set.add(JSON.stringify(["student_slides", 13]));
set.add(JSON.stringify(["student_slides", 29]));
set.add(JSON.stringify(["student_slides", 32]));




function App() {
  //create a state variable to keep track of resident or student
  const [slides, setSlides] = useState(resident_slides);
  // Create a state variable to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  // name of the slides
  const[slidesName, setSlidesName] = useState("resident_slides");
  // state variable to keep track of whether the next button should be hidden
  const [hideNext, setHideNext] = useState(false);

  const [hidePrev, setHidePrev] = useState(true);
  //make a const for the current slide
  const CurrentSlideComponent = slides[currentSlide][1];

  
  // Functions to handle the Previous and Next buttons
  const handlePrev = () => {
    console.log("handlePrev");
    setHideNext(false);
    if (hidePrev) return;
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

  const handleHidePrev = () => {
    console.log("handleHidePrev");
    setHidePrev(true);
  }

  const handleUnhidePrev = () => {
    console.log("handleUnhidePrev");
    setHidePrev(false);
  }

  const handleHideNext = () => {
    console.log("handleHideNext");
    // UNCOMMENT
    setHideNext(true);
  }

  const handleUnhideNext = () => {
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
          {currentSlide === 29 && slidesName === "student_slides" ? (
  <CurrentSlideComponent
    handleHideNext={handleHideNext}
    handleUnhideNext={handleUnhideNext}
    handleHidePrev={handleHidePrev}
    handleUnhidePrev={handleUnhidePrev}
  />
) : (
  set.has(JSON.stringify([slidesName, currentSlide])) ? (
    <CurrentSlideComponent
      handleHideNext={handleHideNext}
      handleUnhideNext={handleUnhideNext}
    />
  ) : (
    <CurrentSlideComponent />
  )
)}

            {/* {currentSlide === 29 && slidesName === "student_slides"} ? <CurrentSlideComponent handleHideNext={handleHideNext} handleUnhideNext={handleUnhideNext} handleHidePrev={handleHidePrev} handleUnhidePrev={handleUnhidePrev}/> : (set.has(JSON.stringify([slidesName, currentSlide])) ? <CurrentSlideComponent handleHideNext={handleHideNext} handleUnhideNext={handleUnhideNext}/> : <CurrentSlideComponent />)} */}
          </div>
          <div className="button-group">
              <button onClick={handlePrev} disabled={hidePrev} className="prev">Back</button>
              <p>{currentSlide} / {slides.length - 1}</p>
              <button onClick={handleNext} className="next" disabled={hideNext} background-color='gray'>Next</button>
          </div>
      </div>
    );
    }
}

export default App;
