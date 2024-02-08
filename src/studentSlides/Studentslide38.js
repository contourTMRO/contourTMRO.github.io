import './Studentslide.css';
import React from 'react';

function Studentslide38() {
  return (
    <div class="body">
      <p>
        Aside from <em>dose distribution</em>, the other important piece to evaluate is 
        our <em>target coverage</em>.
        <br/>
        <br/>
        This is evaluated on a <em>dose-volume histogram (DVH)</em>.
      </p>
      <div class="image-lines">
        <img class="sslide38_image" src="sslide38_image.png"/>
        <p>
          On this DVH, we are looking at coverage of our <em class="orange">PTV</em> (<em class="orange">orange line</em>).
          <br/>
          <br/>
          The ratio of <em>total structure volume %</em> (Y-axis) is plotted against the relative dose % (X-axis)
          <br/>
          <br/>
          Let's zoom in
        </p>
      </div>
    </div>
  );
}
  
export default Studentslide38;
