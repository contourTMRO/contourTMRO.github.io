import "./Residentslide.css";
import React from "react";
import { useState } from "react";

function Residentslide19({ handleHideNext, handleUnhideNext }) {
  const [button1Color, setButton1Color] = useState("white");
  const [button2Color, setButton2Color] = useState("white");
  const [button3Color, setButton3Color] = useState("white");
  const [buttonAnswer, setButtonAnswer] = useState(false);
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
        <p>Why is this patient's cervical cancer classified as stage IIB?</p>
      </div>
      <div>
        {buttonAnswer ? (
          <div class="correct-answer">
            <p style={{ color: "#00FF00" }}>A. Parametrial invasion</p>
            <p>
              Cervical cancer is stage II if it invades beyond the uterus but
              does not involve lower 1/3 of vagina or pelvic sidewall.
            </p>
            <p>
              Tumors with invasion of upper 2/3 of vagina are classified as
              stage IIA (IIA1 if they are ≤4 cm and IIA2 if they are &gt;4 cm).
              Tumors with parametrial invasion are classified as stage IIB.
            </p>
            <p>
              Invasion into the lower 1/3 of vagina, pelvic sidewall, ureters,
              or lymph nodes is seen in stage III cervical cancers.
            </p>
          </div>
        ) : (
          <div class="answers-container">
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
                <p>A. Parametrial Invasion</p>
              </label>
            </div>
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
                <p style={{ color: button1Color }}>B. Size &gt;4cm</p>
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
                  C. Invasion into upper 2/3 of vagina
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
                  D. Invasion into lower 1/3 of vagina
                </p>
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

export default Residentslide19;
