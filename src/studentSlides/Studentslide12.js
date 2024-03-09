import "./Studentslide.css";
import React from "react";
import { useState } from "react";

function Studentslide12( { handleHideNext, handleUnhideNext }) {
  const [buttonAnswer, setButtonAnswer] = useState(false);
  const [button1Color, setButton1Color] = useState("white");
  const [answerSelected, setAnswerSelected] = useState(false);

  if (!buttonAnswer) {
    handleHideNext();
  }

  const makeRed = (button) => {
    switch (button) {
      case "button1":
        setButton1Color("red");
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
          Mr. C has met with his medical oncologist, who told him that his stage
          IV cancer is <em>not curable</em>. The medical oncologist plans to
          treat with palliative chemotherapy to try and reduce his burden of
          disease.
          <br></br>
          The patient is quite symptomatic. He complains of{" "}
          <em>8/10 pelvic pain</em>, and he still has{" "}
          <em>significant hematuria</em>. Do you think radiation can help him?
        </p>
      </div>
      <div>
        {buttonAnswer ? (
          <div class="correct-answer">
            <p style={{ color: "#00FF00" }}>
              A. Yes - we can deliver palliative radiation to help with his pain
              and bleeding
            </p>
            <p>
            The answer is A. We can absolutely help this patient with his pain & bleeding by delivering palliative radiation.
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
                <p>
                  A. Yes - we can deliver palliative radiation to help with his pain
                </p>
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
                <p style={{ color: button1Color }}>
                  B. No - there is no role for radiation in treatment of metastatic incurable cancer
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

export default Studentslide12;
