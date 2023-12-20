import './Residentslide.css';
import React from 'react';

function Residentslide12() {
    return (
        <div class="body">
           <p>
           We obtain CT simulation to confirm applicator placement and subsequent MRI for planning of fraction 1. Planning should be done directly on MRI unless patient is unable to undergo MRI on treatment day. We contour hyperintense gross tumor volume (GTV), high-risk CTV (HR CTV) as defined by ABS consensus statement, and organs at risk (OAR) including bladder, rectum, sigmoid, and small bowel.
           </p>
            <div class="image-container-12">
                <figure>
                    <img src="mri_axial.png"></img>
                    <figcaption>T2-weighted MRI Axial</figcaption>
                </figure>
                <figure>
                    <img src="mri_sagittal.png"></img>
                    <figcaption>T2-weighted MRI Sagittal</figcaption>
                </figure>
                <div class="key-12">
                    <img src="key_12.png"></img>
                </div>
            </div>
        </div>
    );
}
  
export default Residentslide12;
