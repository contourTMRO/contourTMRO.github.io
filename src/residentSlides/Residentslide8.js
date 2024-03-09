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
          Which of the following brachytherapy applicators would be most
          appropriate for treating our patient?
        </p>
      </div>
      <div>
        {buttonAnswer ? (
          <div class="correct-answer">
            <p style={{ color: "#00FF00" }}>C. Tandem & cylinder</p>
            <img src="tandem_cylinder.png"></img>
            <p>
              Tandem & cylinder would be the preferred applicator for our
              patient with stage IA grade 1 inoperable endometrial cancer.
            </p>
            <p>
              Vaginal cylinder is an appropriate device for adjuvant vaginal
              cuff BT following surgical staging with hysterectomy. This allows
              treatment of the upper 3-5 cm of the vaginal cuff.
            </p>
            <p>
              Ring & tandem or tandem & ovoids are both appropriate applicators
              for treatment of cervical cancer. The ring and/or ovoids can be
              loaded with HDR source to treat the cervix.
            </p>
            <p>
              Template-based interstitial BT is indicated if there is extensive
              disease that cannot be adequately treated using intracavitary
              applicators. It is generally necessary if there is a fistula
              between reproductive organs and vagina and/or rectum, distal
              vaginal disease, and/or pelvic side wall involvement requiring
              laterally placed interstitial needles.
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
                <p style={{ color: button1Color }}>A. Vaginal Cylinder</p>
                <img src="vaginal_cylinder.png"></img>
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
                <p style={{ color: button2Color }}>B. Ring & tandem</p>
                <img src="ring_tandem.png"></img>
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
                <p>C. Tandem & cylinder</p>
                <img src="tandem_cylinder.png"></img>
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
                  D. Template-based interstitial applicator
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

export default Residentslide5;
