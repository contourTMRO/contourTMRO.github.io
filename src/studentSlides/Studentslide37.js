import './Studentslide.css';
import React from 'react';

function Studentslide37() {
  return (
    <div class="body">
      <div class = "sslide36_image_text_div"><img class = "sslide36_image_text" src = "sslide36_text.png"/></div>
      <div class = "image-lines">
        <img class = "sslide36_image" src = "sslide36_scan1.png"></img>
        <img class = "sslide36_image" src = "sslide36_scan2.png"></img>
        <img class = "sslide36_image" src = "sslide36_scan3.png"></img>
      </div>
      <div class = "sslide37_text">
        <p>
        You may wonder, why does the <em class = "yellow">100% isodose line</em> (30 Gy dose) extend so far beyond our delineated <em class = "orange"> PTV?</em> Shouldn't it be more conformal with our <em class = "orange">PTV?</em>  
        <br/>
        Remember, since our fields were designed <em class = "green">AP/PA</em>, there is a lot of dose spreading in the anterior and posterior directions. 
        <br/>
        This is a limitation of the technique we used to design our fields (<em class = "green">3D technique</em>).
        <br/>
        Since we are prescribing a palliative dose (30 Gy), it is acceptable for the plan to be less conformal. This <em class = "green">dose distribution</em> looks acceptable.
        </p>
        <img class ="sslide37_image" src = "sslide37_scan4.png"/>
      </div>
    </div>
  );
}
  
export default Studentslide37;
