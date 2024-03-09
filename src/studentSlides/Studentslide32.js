import "./Studentslide.css";
import React from "react";
import { useState } from "react";

function Studentslide32({ handleHideNext, handleUnhideNext }) {
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
    <div className="body">
      <div className="question">
        <p className="purple_box">
          Which beam arrangement makes more sense to use?
        </p>
      </div>
      <div>
        {buttonAnswer ? (
          <div className="correct-answer">
            <img style={{ width: '200px' }} src="sslide32_scan1.png" alt="Scan 1" />
            <p style={{ color: "green" }}>
              A. AP/PA (anterior posterior/posterior anterior)
            </p>
            <p>
              No matter which beam arrangement we use, the bladder & the rectum (located just posterior to the bladder)
              will receive significant incidental radiation dose.
              <br />
              <br />
              AP/PA beams will at least avoid treating all the bone and muscle lateral to the tumor.
              <br />
              <br />
              With this arrangement, we will deliver 50% of the dose through the anterior beam, and 50% of the dose through
              the posterior beam.
            </p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }} className="answers-container">
            <div className="answer">
              <label
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                onClick={() => {
                  handleUnhideNext();
                  setButtonAnswer(true);
                }}
              >
                <div className="image-lines">
                  <button
                    type="radio"
                    onClick={() => {
                      handleUnhideNext();
                      setButtonAnswer(true);
                    }}
                  ></button>
                  <p>
                    A. AP/PA (anterior posterior/posterior anterior)
                  </p>
                </div>
                <img id="sslide32_image" src="sslide32_scan1.png" alt="Scan 1" />
              </label>
            </div>
            <div className="answer">
              <label
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                onClick={() => {
                  makeRed("button1");
                }}
              >
                <div className="image-lines">
                  <button
                    type="radio"
                    onClick={() => {
                      makeRed("button1");
                    }}
                  ></button>
                  <p style={{ color: button1Color }}>
                    B. Opposed laterals
                  </p>
                </div>
                <img id="sslide32_image" src="sslide32_scan2.png" alt="Scan 2" />
              </label>
            </div>
          </div>
        )}
        {answerSelected && !buttonAnswer && (
          <p style={{ gridColumn: "span 2", textAlign: "center", color: "red" }}>Incorrect answer. Try again.</p>
        )}
      </div>
    </div>
  );
}

export default Studentslide32;
