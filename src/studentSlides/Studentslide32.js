import './Studentslide.css';
import React from 'react';

function Studentslide32() {
  return (
    <div class="body">
      <p class="purple_box">
        Which beam arrangement makes more sense to use?
      </p>
      <div class="image-lines">
        <figure>
          <img class="sslide32_image" src="sslide32_scan1.png"/>
          <figcaption>
            a. AP/PA (anterior posterior/posterior anterior)
          </figcaption>
        </figure>
        <figure>
          <img class="sslide32_image" src="sslide32_scan2.png"/>
          <figcaption>
            b. Opposed laterals
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
  
export default Studentslide32;
