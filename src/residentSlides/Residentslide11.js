import "./Residentslide.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Residentslide10({ handleHideNext, handleUnhideNext }) {
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
        <p>Target volumes & organs at risk are contoured on T2-weighted MRI.</p>
        <p>
          Which of the following correctly describes the ABS consensus approach
          to contouring the clinical target volume (CTV)?
        </p>
      </div>
      <div>
        {buttonAnswer ? (
          <div class="correct-answer">
            <p style={{ color: "green" }}>
              B. CTV includes the entire uterus, cervix, and upper 1-2 cm of the
              vagina.
            </p>
            <p>
              Per ABS guidelines, the recommendation is to include entire
              uterus, cervix, and upper 1-2 cm of the vagina in the CTV.
            </p>
            <p>
              The 2000 ABS guidelines which recommended use of CT, MRI, or US
              for image guidance defined the target volume for inoperable
              primary endometrial cancer as the entire uterus, cervix, and upper
              3-5 cm of the vagina.
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
                  A. CTV includes the entire uterus, cervix, and upper 3-5 cm of
                  the vagina.
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
                <p>
                  B. CTV includes the entire uterus, cervix, and upper 1-2 cm of
                  the vagina.
                </p>
              </label>
            </div>
            <div class="answer">
              <label onClick={() => makeRed("button2")}>
                <button
                  type="radio"
                  onClick={() => {
                    makeRed("button2");
                  }}
                ></button>
                <p style={{ color: button2Color }}>
                  C. CTV includes the GTV with an additional 2 cm margin,
                  obeying natural barriers to spread (i.e., CTV will not extend
                  outside the uterus, cervix, or vagina).
                </p>
              </label>
            </div>
            <div class="answer">
              {/* make label */}
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
                  D. CTV includes the entire uterus and cervix only.
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

export default Residentslide10;
