import "./Residentslide.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Residentslide23({ handleHideNext, handleUnhideNext }) {
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
          Based on our patient's response to EBRT, which of the following
          brachytherapy applicators would be most appropriate?
        </p>
      </div>
      <div>
        {buttonAnswer ? (
          <div class="correct-answer">
            <p style={{ color: "green" }}>B. Ring & Tandem</p>
            <img src="ring_tandem.png"></img>
            <p>
              Ring & tandem or tandem & ovoids would both be appropriate to
              adequately cover the cervix. The ring and/or ovoids can be loaded
              with HDR source to treat the cervix.
            </p>
            <p>
              Tandem & cylinder is generally used for treatment of inoperable
              endometrial cancer. With this applicator, it is difficult to cover
              the entire cervix. Especially in our case, with parametrial
              extension, tandem and cylinder would not allow adequate coverage.
            </p>
            <p>
              Hybrid applicators or template-based interstitial BT is indicated
              if there is extensive disease that cannot be adequately treated
              using intracavitary applicators. Generally, template-based
              interstitial BT is necessary if there is a fistula between
              reproductive organs and vagina and/or rectum, distal vaginal
              disease, and/or pelvic side wall involvement requiring laterally
              placed interstitial needles.
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
                <p style={{ color: button1Color }}>A. Tandem & Cylinder</p>
                <img src="tandem_cylinder.png"></img>
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
                <p>B. Ring & Tandem</p>
                <img src="ring_tandem.png"></img>
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
                  C. Hybrid Interstitial Applicator
                </p>
                <img src="resident_case2/hybrid_interstitial_applicator.png"></img>
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
                  D. Template-baseed Interstitial Applicator
                </p>
                <img src="template_based_interstitial_applicator.png"></img>
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

export default Residentslide23;
