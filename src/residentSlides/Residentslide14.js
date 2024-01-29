import './Residentslide.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Residentslide14({handleHideNext, handleUnhideNext}) {
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
                        <p style={{color: 'green'}}>C. Bladder: 85 Gy; Rectum/Sigmoid: 75 Gy; Small Bowel: 65 Gy</p>
                        <p>
                        There is limited data for maximum tolerated doses to OAR specifically in medically inoperable endometrial cancer. Extrapolating from data in cervical cancer, the ABS panel recommends D2CC to sigmoid and rectum be limited to 70-75 Gy, D2cc to bladder be limited to 80-100 Gy, and D2cc limit of 65 Gy to small bowel be considered (Georg et al., 2011; Schwartz et al., 2015). 
                        </p>
                        <p>
                        In practice we try to limit rectum/sigmoid dose to 65 Gy, or 70 Gy at the most, to limit toxicity to these organs. The rationale for this is that most inoperable endometrial cancer patients die from some other cause, not endometrial cancer. If brachytherapy treatment results in severe toxicity to rectum or sigmoid such as perforation, these patients are also not candidates for surgery. Hence, it is very important to limit toxicity and prioritize constraints in these patients.
                        </p>
                    </div>
                    
                ) : (
                    <div class="answers-container">
                        <div class="answer">
                            <button type="radio" onClick={() => {makeRed('button1');}}></button>
                            <p style={{color: button1Color}}>A. Bladder: 65 Gy; Rectum/Sigmoid: 65 Gy; Small Bowel: 45 Gy</p>
                        </div>
                        <div class="answer">
                            <button type="radio" onClick={() => {makeRed('button2');}}></button>
                            <p>B. Bladder: 85 Gy; Rectum/Sigmoid: 85 Gy; Small Bowel: 65 Gy</p>
                        </div>
                        <div class="answer">
                            <button type="radio" onClick={() => {handleUnhideNext(); setButtonAnswer(true)}}></button>
                            <p style={{color: button2Color}}>C. Bladder: 85 Gy; Rectum/Sigmoid: 75 Gy; Small Bowel: 65 Gy</p>
                        </div>
                        <div class="answer">
                            <button type="radio" onClick={() => {makeRed('button3');}}></button>
                            <p style={{color: button3Color}}>D. Bladder: 100 Gy; Rectum/Sigmoid: 90 Gy; Small Bowel: 70 Gy</p>
                        </div>
                        {answerSelected && <p style={{color : 'red'}}>Incorrect answer. Try again.</p>}
                    </div>
                )}
            </div>        
        </div>
    );
}
  
export default Residentslide14;
