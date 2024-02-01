import "./Residentslide.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Residentslide5({ handleHideNext, handleUnhideNext }) {
  const [buttonAnswer, setButtonAnswer] = useState(false);
  const [button1Color, setButton1Color] = useState("white");
  const [button2Color, setButton2Color] = useState("white");
  const [button3Color, setButton3Color] = useState("white");
  const [answerSelected, setAnswerSelected] = useState(false);

  if (!buttonAnswer) {
    handleHideNext();
  }

  const makeRed = (button) => {
    switch (button) {
      case "button1":
        setButton1Color("red");
        break;
      case "button2":
        setButton2Color("red");
        break;
      case "button3":
        setButton3Color("red");
        break;
      default:
        break;
    }
    setAnswerSelected(true);
  };

  return (
    <div class="body">
      <div class="question">
        <p>
          What is the recommended brachytherapy dose and fractionation schedule
          for our patient?
        </p>
      </div>
      <div>
        {buttonAnswer ? (
          <div class="correct-answer">
            <p style={{ color: "green" }}>
              D. 36.5 Gy in 5 Fx delivered in 2 fractions per week
            </p>
            <p>
              When treating inoperable endometrial cancer with brachytherapy
              alone, the target EQD2 D90 to the CTV is 48-62.5 Gy as per ABS
              guidelines. This could be reached using 36.5 Gy in 5 Fx. Note that
              the EQD2 D90 to the GTV, when delineated, should be 80-90 Gy. The
              other answer choices represent doses that are too low for
              brachytherapy alone and would not meet our target EQD2 D90 dose.
              10 Gy in 2 Fx is typical dose for vaginal cuff brachytherapy boost
              following EBRT, and 28 Gy in 4 Fx is often used for cervical
              cancer brachytherapy boost following EBRT. 21 Gy in 3 Fx
              represents an appropriate dose for adjuvant vaginal cuff
              brachytherapy alone following surgical staging.
            </p>
            <p>
              The other answer choices represent doses that are too low for
              brachytherapy alone and would not meet our target EQD2 D90 dose.
            </p>
            <p>
              10 Gy in 2 Fx is typical dose for vaginal cuff brachytherapy boost
              following EBRT, and 28 Gy in 4 Fx is often used for cervical
              cancer brachytherapy boost following EBRT. 21 Gy in 3 Fx
              represents an appropriate dose for adjuvant vaginal cuff
              brachytherapy alone following surgical staging.
            </p>
          </div>
        ) : (
          <div class="answers-container">
            <div class="answer">
              <label
                onClick={() => {
                  makeRed("button1");
                }}
              >
                <button
                  type="radio"
                  onClick={() => {
                    makeRed("button1");
                  }}
                ></button>
                <p style={{ color: button1Color }}>
                  A. 10 Gy in 2 Fx delivered in 2 fractions per week
                </p>
              </label>
            </div>
            <div class="answer">
              <label
                onClick={() => {
                  makeRed("button2");
                }}
              >
                <button
                  type="radio"
                  onClick={() => {
                    makeRed("button2");
                  }}
                ></button>
                <p style={{ color: button2Color }}>
                  B. 21 Gy in 3 Fx delivered in 2 fractions per week
                </p>
              </label>
            </div>
            <div class="answer">
              <label
                onClick={() => {
                  makeRed("button3");
                }}
              >
                <button
                  type="radio"
                  onClick={() => {
                    makeRed("button3");
                  }}
                ></button>
                <p style={{ color: button3Color }}>
                  C. 28 Gy in 4 Fx delivered in 2 fractions per week
                </p>
              </label>
            </div>
            <div class="answer">
              <label
                onClick={() => {
                  handleUnhideNext();
                  setButtonAnswer(true);
                }}
              >
                <button
                  type="radio"
                  onClick={() => {
                    handleUnhideNext();
                    setButtonAnswer(true);
                  }}
                ></button>
                <p>D. 36.5 Gy in 5 Fx delivered in 2 fractions per week</p>
              </label>
            </div>
            {answerSelected && (
              <p style={{ color: "red" }}>Incorrect answer. Try again.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Residentslide5;
