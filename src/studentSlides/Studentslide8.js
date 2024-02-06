import './Studentslide.css';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Studentslide8({ handleHideNext, handleUnhideNext }) {
  const [buttonAnswer, setButtonAnswer] = useState(false);
  const [button1Color, setButton1Color] = useState("white");
  const [button2Color, setButton2Color] = useState("white");
  const [button3Color, setButton3Color] = useState("white");
  const [button4Color, setButton4Color] = useState("white");
  const [button5Color, setButton5Color] = useState("white");
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
      case "button4":
        setButton4Color("red");
        break;
      case "button5":
        setButton5Color("red");
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
          What are some uses of radiation therapy?
        </p>
      </div>
      <div>
        {buttonAnswer ? (
          <div class="correct-answer">
            <p style={{ color: "green" }}>F. All of the above</p>
            <p>
              The answer is F. All of the above are true!
              <br/>
              Radiation can be used in many ways.
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
                  A. Alone to treat certain types of cancer & benign conditions
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
                  B. With concurrent chemotherapy to cure certain types of cancer
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
                  C. Preoperatively to help a surgeon better resect the cancer
                </p>
              </label>
            </div>
            <div class="answer">
              <label
                onClick={() => {
                  makeRed("button4");
                }}
              >
                <button
                  type="radio"
                  onClick={() => {
                    makeRed("button4");
                  }}
                ></button>
                <p style={{ color: button4Color }}>
                  D. Postoperatively to help decrease chance of recurrence after resection
                </p>
              </label>
            </div>
            <div class="answer">
              <label
                onClick={() => {
                  makeRed("button5");
                }}
              >
                <button
                  type="radio"
                  onClick={() => {
                    makeRed("button5");
                  }}
                ></button>
                <p style={{ color: button5Color }}>
                  E. Palliatively to incurable or metastatic cancer to decrease symptoms such as pain or bleeding
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
                <p>F. All of the above</p>
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
  
export default Studentslide8;
