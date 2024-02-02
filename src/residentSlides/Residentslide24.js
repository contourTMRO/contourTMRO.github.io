import "./Residentslide.css";
import React from "react";
import { useState } from "react";

function Residentslide24({ handleHideNext, handleUnhideNext }) {
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
        <p>
          Ms. C is seen as an on-treatment visit. She inquires about her
          brachytherapy boost. Which of the following dose fractionation schemes
          would you recommend for her cervical brachytherapy boost?
        </p>
      </div>
      <div>
        {buttonAnswer ? (
          <div class="correct-answer">
            <p style={{ color: "green" }}>
              B. 28 Gy in 4 Fx delivered in 2 fractions per week
            </p>
            <p>
              28 Gy in 4 fractions delivered in 2 fractions per week is a common
              brachytherapy boost dose used in cervical cancer following EBRT.
            </p>
            <p>
              21 Gy in 3 fractions is an adjuvant brachytherapy dose that is
              typically used in endometrial cancer following surgical staging.
            </p>
            <p>
              20 to 25 Gy in 5 Fx represent potential dose fractionation schemes
              when using interstitial brachytherapy where the applicator remains
              in place for the duration of treatment. In our patient's case, we
              are using a ring & tandem which will allow the patient to be
              treated as an outpatient. For each fraction, the applicator will
              be inserted under conscious sedation, the patient will undergo CT
              simulation and MRI for treatment planning, and then undergo
              treatment. The applicator will be removed following delivery of
              each fraction.
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
                  A. 21 Gy in 3 Fx delivered in 2 fractions per week
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
                <p>B. 28 Gy in 4 Fx delivered in 2 fractions per week</p>
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
                  C. 20 Gy in 5 Fx delivered twice daily
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
                  D. 25 Gy in 5 Fx delivered twice daily
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

export default Residentslide24;
