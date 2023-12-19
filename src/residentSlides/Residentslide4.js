import './Residentslide.css';
import './Residentslide4.css';
import React from 'react';

function Residentslide4() {
    return (
        <div class="body">
           <div class='image-line'>
            <figure>
                <img src="axial.png"></img>
                <figcaption>Axial</figcaption>
            </figure>
            <figure>
                <img src="coronal.png"></img>
                <figcaption>Coronal</figcaption>
            </figure>
            <figure>
                <img src="sagittal.png"></img>
                <figcaption>Sagittal</figcaption>
            </figure>
           </div>
           <p>
           Representative T2-weighted MR images in axial, coronal, & sagittal sections showing IUD in place and thin strip of hyperintense endometrial thickening. 
           </p>
           
        </div>
    );
}
  
export default Residentslide4;
