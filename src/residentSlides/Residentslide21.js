import "./Residentslide.css";
import React from "react";
import { useState } from "react";

function Residentslide21({ handleHideNext, handleUnhideNext }) {
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
        <p>Why is this patient's cervical cancer classified as stage IIB?</p>
      </div>
      <div>
        {buttonAnswer ? (
          <div class="correct-answer">
            <p style={{ color: "green" }}>
              D. RT to pelvis followed by brachytherapy boost to cervix/tumor
            </p>
            <p>
              The standard of care for locally advanced cervical cancer is EBRT
              followed by intracavitary or interstitial brachytherapy boost.
              EBRT is typically delivered to a dose of 45 in 1.8 Gy/Fx delivered
              daily M-F over 5 weeks. This is followed by BT boost. Addition of
              BT boost is necessary to treat tumor to cytotoxic doses while
              respecting OAR constraints of bladder, rectum, sigmoid, & small
              bowel. BT alone is insufficient as pelvis needs to be sterilized
              with EBRT.
            </p>
            <p>
              Modified radical hysterectomy can be considered for early stage
              cervical cancer (up to stage IB2) with postoperative radiation +/-
              chemotherapy if indicated* (Tewari et al., 2019). Indications for
              postoperative radiation in cervical cancer are based on Sedli
              criteria from GOG 92: simplified Sedlis criteria are 2/3 risk
              factors of (1) LVSI, (2) middle or deep 1/3 stromal invasion, and
              (3) tumor size ≥4. Indications for postoperative chemoradiation
              are based on Peters criteria from GOG 109 (3 P's): positive lymph
              nodes, positive surgical margins, parametrial involvement.
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
                  A. Modified radical hysterectomy (removal of uterus, cervix,
                  upper 1-2 cm vagina, and wide local excision of parametria)
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
                  B. External beam radiotherapy (EBRT) to pelvis with sequential
                  EBRT boost to cervix/tumor
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
                  C. Brachytherapy to cervix/tumor alone
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
                  D. EBRT to pelvis followed by brachytherapy boost to
                  cervix/tumor
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

export default Residentslide21;
