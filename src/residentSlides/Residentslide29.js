import "./Residentslide.css";
import React from "react";
import { useState } from "react";

function Residentslide29({ handleHideNext, handleUnhideNext }) {
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
          Which of the following should be our target dose to 90% of the HR CTV
          (HR CTV D90) as per EMBRACE II protocol?
        </p>
      </div>
      <div>
        {buttonAnswer ? (
          <div class="correct-answer">
            <p style={{ color: "green" }}>C. At least 90 Gy</p>
            <p>
              EMBRACE II is a multicenter prospective study which aims to
              document local control rates using advanced EBRT (IMRT & IGRT) and
              image-guided adaptive BT techniques for treatment of cervical
              cancer. Per EMBRACE II protocol, HR CTV D90 planning aim should be
              90-95 Gy, with 85 Gy accepted as the lower limit.
            </p>
            <p>
              In practice, many practitioners accept 85 Gy to the HR CTV based
              on existing guidelines. Based on retrospective studies, treating
              HR CTV to 90 Gy results in favorable outcomes, but this data may
              be biased since smaller tumors can be easily dose escalated to 90
              Gy. Data from EMBRACE II will hopefully provide more guidance as
              to which patients benefit most from dose escalation.
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
                <p style={{ color: button1Color }}>A. At least 80 Gy</p>
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
                <p style={{ color: button2Color }}>B. At least 85 Gy</p>
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
                <p>C. At least 90 Gy</p>
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
                <p style={{ color: button3Color }}>D. At least 95 Gy</p>
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

export default Residentslide29;
