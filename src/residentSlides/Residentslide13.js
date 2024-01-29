import './Residentslide.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function Residentslide13({handleHideNext, handleUnhideNext}) {

    const [buttonAnswer, setButtonAnswer] = useState(false);
    const [button1Color, setButton1Color] = useState('white');
    const [button2Color, setButton2Color] = useState('white');
    const [button3Color, setButton3Color] = useState('white');
    const [answerSelected, setAnswerSelected] = useState(false);

    if (!buttonAnswer) {
        handleHideNext();
    }

    const makeRed = (button) => {
        switch(button) {
            case 'button1':
                setButton1Color('red');
                break;
            case 'button2':
                setButton2Color('red');
                break;
            case 'button3':
                setButton3Color('red');
                break;
            default:
                break;
        }
        setAnswerSelected(true);
    }

    return (
        <div class="body">
            <div class="question">
                <p>Which of the following is the recommended EQD2 to 90% of the CTV volume (D90) for stage I endometrial cancer patients treated with brachytherapy alone?</p>
            </div>
            <div>
                {buttonAnswer ? (
                    <div class="correct-answer">
                        <p style={{color: 'green'}}>B. 48 Gy</p>
                        <p>
                        48 Gy is the recommended EQD2 to 90% of the CTV volume (D90) for stage I endometrial cancer treated with BT alone.
                        </p>
                        <p>
                        This is based on retrospective data from the University of Pittsburgh Medical Center showing excellent local control and overall survival outcomes when treating patients with inoperable endometrial cancer to a median CTV D90 EQD2 of 48.6 Gy (Gill et al., 2014). 65 Gy is the recommended CTV D90 EQD2 for patients treated with combination of external beam radiation therapy and brachytherapy boost. 80 Gy is the minimum recommended EQD2 for the GTV as delineated on T2-weighted MRI (Schwartz et al., 2015).
                        </p>
                    </div>
                    
                ) : (
                    <div class="answers-container">
                        <div class="answer">
                            <button type="radio" onClick={() => {makeRed('button1');}}></button>
                            <p style={{color: button1Color}}>A. 36 Gy</p>
                        </div>
                        <div class="answer">
                            <button type="radio" onClick={() => {handleUnhideNext(); setButtonAnswer(true)}}></button>
                            <p>B. 48 GY</p>
                        </div>
                        <div class="answer">
                            <button type="radio" onClick={() => {makeRed('button2');}}></button>
                            <p style={{color: button2Color}}>C. 65 Gy</p>
                        </div>
                        <div class="answer">
                            <button type="radio" onClick={() => {makeRed('button3');}}></button>
                            <p style={{color: button3Color}}>D. 80 Gy</p>
                        </div>
                        {answerSelected && <p style={{color : 'red'}}>Incorrect answer. Try again.</p>}
                    </div>
                )}
            </div>        
        </div>
    );
}
  
export default Residentslide13;
