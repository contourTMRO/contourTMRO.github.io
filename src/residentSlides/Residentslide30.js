import './Residentslide.css';
import React from 'react';
import { useState } from 'react';

function Residentslide30({handleHideNext, handleUnhideNext}) {
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
                <p>
                Which of the following should be our maximum tolerable dose constraints for dose to 2 cc (D2CC) of each organ at risk as per EMBRACE II?
                </p>
            </div>
            <div>
                {buttonAnswer ? (
                    <div class="correct-answer">
                        <p style={{color: 'green'}}>C. Bladder: 90 Gy; Rectum/Sigmoid: 75 Gy; Small Bowel: 75 Gy</p>
                        <p>
                        Per EMBRACE II protocol, planning aims (soft constraints) should be bladder &lt;80 Gy, rectum/sigmoid &lt;65 Gy, and small bowel &lt;70 Gy. However, the maximum tolerable dose to these organs (hard constraints) are bladder &lt;90 Gy, rectum/sigmoid &lt;75 Gy, and small bowel &lt;75 Gy.
                        </p>
                        <p>
                        In practice, we try to abide by EMBRACE II soft constraints to limit grade 2+ toxicity. The soft constraints are bladder &lt;80 Gy, rectum/sigmoid &lt;65 Gy, and small bowel &lt;70 Gy 
                        </p>
                    </div>
                    
                ) : (
                    <div class="answers-container">
                        <div class="answer">
                            <label onClick={() => {makeRed('button1');}}>
                                <button type="radio" onClick={() => {makeRed('button1');}}></button>
                                <p style={{color: button1Color}}>A. Bladder: 65 Gy; Rectum/Sigmoid: 65 Gy; Small Bowel: 45 Gy</p>
                            </label>
                        </div>
                        <div class="answer">
                            <label onClick={() => {makeRed('button2');}}>
                                <button type="radio" onClick={() => {makeRed('button2');}}></button>
                                <p style={{color: button2Color}}>B. Bladder: 90 Gy; Rectum/Sigmoid: 85 Gy; Small Bowel: 75 Gy</p>
                            </label>
                        </div>
                        <div class="answer">
                            <label onClick={() => {handleUnhideNext(); setButtonAnswer(true)}}>
                                <button type="radio" onClick={() => {handleUnhideNext(); setButtonAnswer(true)}}></button>
                                <p>C. Bladder: 90 Gy; Rectum/Sigmoid: 75 Gy; Small Bowel: 75 Gy</p>
                            </label>
                        </div>
                        <div class="answer">
                            <label onClick={() => {makeRed('button3')}}>
                                <button type="radio" onClick={() => {makeRed('button3')}}></button>
                                <p style={{color: button3Color}}>D. Bladder: 100 Gy; Rectum/Sigmoid: 90 Gy; Small Bowel: 70 Gy</p>
                            </label>
                        </div>
                        {answerSelected && <p style={{color : 'red'}}>Incorrect answer. Try again.</p>}
                    </div>
                )}
            </div>        
        </div>
    );
}
  
export default Residentslide30;
