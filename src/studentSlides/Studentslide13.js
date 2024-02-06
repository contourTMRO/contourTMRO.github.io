import './Studentslide.css';
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";

function Studentslide13({ handleHideNext, handleUnhideNext }) {
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
          What stage cancer does Mr. C have?
        </p>
      </div>
      <div>
        {buttonAnswer ? (
          <div class="correct-answer">
            <p style={{ color: "green" }}>D. Stage IV</p>
            <p>
              The answer is D. Distant metastasis automatically makes cancer stage IV. This pattern applies to nearly 
              all cancers.
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
                  A. Stage I
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
                  B. Stage II
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
                  C. Stage III
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
                <p>D. Stage IV</p>
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
  
export default Studentslide13;
