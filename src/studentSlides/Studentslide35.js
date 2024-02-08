import './Studentslide.css';
import React from 'react';

function Studentslide35() {
  return (
    <div class="body">
      <p>
        When we evaluate a radiation plan, we can look at the <em>dose distribution</em> by looking at what are called <em>isodose lines</em>.
        <br/>
        <br/>
        Each <em>isodose line</em> corresponds to a certain percentage of target dose coverage.
      </p>
      <div class="image-lines">
        <img class="sslide35_image" src="sslide35_scan.png"/>
        <div>
          <p style={{tabSize: '4'}}>
            <em class="red">Dose maximum: 108%</em>
            <br/>
            Isodose lines (%):
            <br/>
            <em class="red">110%</em>
            <br/>
            <em class="yellow">100%</em>
            <br/>
            <em>90%</em>
            <br/>
            <em class="blue">80%</em>
            <br/>
            <br/>
            Remember, the <em class="orange">orange contour</em> is our <em class="orange">PTV</em>.
          </p>
          <p class="purple_box">
            Let's take a closer look at how to interpret isodose lines.
          </p>
        </div>
      </div>
    </div>
  );
}
  
export default Studentslide35;
