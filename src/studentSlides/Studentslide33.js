import './Studentslide.css';
import React from 'react';

function Studentslide33() {
  return (
    <div class="body">
      <p class="purple_box">
        AP/PA makes more sense! Let's think about why
      </p>
      <div class="image-lines">
        <figure>
          <img class="sslide32_image" src="sslide32_scan1.png"/>
          <figcaption>
            a. AP/PA (anterior posterior/posterior anterior)
          </figcaption>
        </figure>
        <p>
          No matter which beam arrangement we use, the bladder & the rectum (located just posterior to the bladder) 
          will receive significant incidental radiation dose.
          <br/>
          <br/>
          AP/PA beams will at least avoid treating all the bone and muscle lateral to the tumor.
          <br/>
          <br/>
          With this arrangement, we will deliver 50% of dose through the anterior beam, and 50% of dose 
          through the posterior beam.
        </p>
      </div>
    </div>
  );
}
  
export default Studentslide33;
