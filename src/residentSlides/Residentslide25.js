import './Residentslide.css';
import React from 'react';
import { useState } from 'react';

function Residentslide25({handleHideNext, handleUnhideNext}) {
    const [button1Color, setButton1Color] = useState('white');
    const [button2Color, setButton2Color] = useState('white');
    const [button3Color, setButton3Color] = useState('white');
    const [buttonAnswer, setButtonAnswer] = useState(false);
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
                <p>You counsel Ms. C about the expected number of treatments. You also let her know that brachytherapy boost can be started while she is on EBRT, or just after she completes EBRT. Which of the following is the recommended overall treatment time for external beam radiation + brachytherapy boost?</p>
            </div>
            <div>
                {buttonAnswer ? (
                    <div class="correct-answer">
                        <p style={{color: 'green'}}>A. 49 days</p>
                        <p>
                        In the retroEMBRACE series, median overall treatment time (OTT) was 49 days. Increase in OTT by just one week was equivalent to a decrease in HR CTV D90 of 5 Gy, resulting in decreased local control (Tanderup et al., 2016). The magnitude of the decrease in local control was based on the volume of disease (1% less for 20 cc, 1.2% less for 30 cc, and 2.5% less for 70 cc). At a median OTT of 49 days, an HR CTV D90 of 85 Gy was associated with 94% local control in stage II patients and 86% local control in stage III patients
                        </p>
                        <p>
                        Note that the advantage of allowing as many EBRT fractions as possible prior to brachytherapy treatment is that EBRT with concurrent chemotherapy can shrink the tumor, improving brachytherapy geometry. If brachytherapy is interdigitated with chemotherapy, the ABS recommends delivering chemotherapy on the same day as an EBRT dose, not a brachytherapy treatment due to high dose per fraction.
                        </p>
                    </div>
                    
                ) : (
                    <div class="answers-container">
                        <div class="answer">
                            <label onClick={() => {handleUnhideNext(); setButtonAnswer(true)}}>
                                <button type="radio" onClick={() => {handleUnhideNext(); setButtonAnswer(true)}}></button>
                                <p>A. 49 days</p>
                            </label>
                        </div>
                        <div class="answer">
                            <label onClick={() => {makeRed('button1');}}>
                                <button type="radio" onClick={() => {makeRed('button1');}}></button>
                                <p style={{color: button1Color}}>B. 56 days</p>
                            </label>
                        </div>
                        <div class="answer">
                            <label onClick={() => {makeRed('button2');}}>
                                <button type="radio" onClick={() => {makeRed('button2');}}></button>
                                <p style={{color: button2Color}}>C. 63 days</p>
                            </label>
                        </div>
                        <div class="answer">
                            <label onClick={() => {makeRed('button3');}}>
                                <button type="radio" onClick={() => {makeRed('button3');}}></button>
                                <p style={{color: button3Color}}>D. There is no data for overall treatment time in cervical cancer</p>
                            </label>
                        </div>
                        {answerSelected && <p style={{color : 'red'}}>Incorrect answer. Try again.</p>}
                    </div>
                )}
            </div>        
        </div>
    );
}
  
export default Residentslide25;
