import './Studentslide.css';
import React from 'react';

function Studentslide23() {
  return (
    <div class="body">
      <p class="purple_box">
        Let's look at the tumor in a few different planes to help find the center of it. This is where we will mark our isocenter.
      </p>
      <div class="image-lines">
        <figure>
          <img class="sslide23_image" src="sslide23_scan1.png"/>
          <figcaption>Axial</figcaption>
        </figure>
        <figure>
          <img class="sslide23_image2" src="sslide23_scan2.png"/>
          <figcaption>Sagittal plane</figcaption>
        </figure>
        <figure>
          <img class="sslide23_image" src="sslide23_scan3.png"/>
          <figcaption>Coronal plane</figcaption>
        </figure>
        
      </div>
      <p class="green_box">
        Do you see the tumor?
      </p>
    </div>
  );
}
  
export default Studentslide23;
