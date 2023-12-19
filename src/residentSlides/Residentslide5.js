import './Residentslide.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Residentslide5({handlePrev}) {
    const [button1, setButton1] = useState(false);
    const [button2Color, setButton2Color] = useState('white');
    const [button3Color, setButton3Color] = useState('white');
    const [button4Color, setButton4Color] = useState('white');
    const [answerSelected, setAnswerSelected] = useState(false);

    handlePrev();



    const makeRed = (button) => {
        switch(button) {
            case 'button2':
                setButton2Color('red');
                break;
            case 'button3':
                setButton3Color('red');
                break;
            case 'button4':
                setButton4Color('red');
                break;
            default:
                break;
        }
        setAnswerSelected(true);
    }
    
    return (
        <div class="body">
            <div class="question">
                <p>What is the recommended treatment for our patient with FIGO stage 1A grade 1 inoperable endometrial cancer?</p>
            </div>
            <div>
                {button1 ? (
                    <div class="correct-answer">
                        <p>A.Brachytherapy alone</p>
                        <p>
                        Normally, endometrial cancer should be surgically staged with total hysterectomy & bilateral salpingo-oophorectomy +/- sentinel lymph node sampling (necessary if intermediate-high/high-risk). Additional staging procedures such as omentectomy should be considered for specific histologicsubtypes such as serous cell carcinoma or carcinosarcoma. Role of adjuvant radiation is based on risk stratification. For medically inoperable endometrial cancer patients, brachytherapy alone can be used for stage 1 grade 1 or 2 endometrial cancer with initial MRI demonstrating minimal myometrial invasion. Combination of EBRT + BT would be recommended for evidence of deep myometrial invasion, grade 3 disease, type II histology, or disease geometry that does not lend itself to brachytherapy (e.g., disease involving ). Use of temporizing IUD may be considered in patients who need to postpone surgical intervention, for example as a temporizing measure until weight loss interventions can be pursued and surgery can be considered.
                        </p>
                    </div>
                    
                ) : (
                    <div class="answers-container">
                        <div class="answer">
                            <button type="radio" onClick={() => {setButton1(true)}}></button>
                            <p>A.Brachytherapy alone</p>
                        </div>
                        <div class="answer">
                            <button type="radio" onClick={() => {makeRed('button2');}}></button>
                            <p style={{color: button2Color}}>B.Brachytherapy + external beam radiation therapy (EBRT)</p>
                        </div>
                        <div class="answer">
                            <button type="radio" onClick={() => {makeRed('button3');}}></button>
                            <p style={{color: button3Color}}>C.Brachytherapy + chemotherapy</p>
                        </div>
                        <div class="answer">
                            <button type="radio" onClick={() => {makeRed('button4');}}></button>
                            <p style={{color: button4Color}}>D.External beam radiation therapy (EBRT) + chemotherapy</p>
                        </div>
                        {answerSelected && <p style={{color : 'red'}}>Incorrect answer. Try again.</p>}
                    </div>
                )}
            </div>        
        </div>
    );
}
  
export default Residentslide5;
