import './Studentslide.css';
import React from 'react';

function Studentslide30() {
  return (
    <div class="body">
      <img class="sslide18_image" src="sslide_highlight2.png"/>
      <ul>
        <li style={{fontSize : '25px'}}>
          Good job contouring the GTV (red outline)!
        </li>
        <li> 
          In the treatment planning software, we can add a <em class="orange">1 cm symmetrical expansion</em> 
          to create a <em class="orange">PTV (orange outline)</em>, as shown below:
        </li>
        <div class="image-lines">
          <img class="sslide30_image" src="sslide30_scan1.png"/>
          <img class="sslide30_image" src="sslide30_scan2.png"/>
          <img class="sslide30_image" src="sslide30_scan3.png"/>
        </div>
        <p class="purple_box">
          We prescribe 30 Gy in 10 daily fractions to the PTV. We wait for our dosimetrists to design a radiation plan. 
        </p>
      </ul>
    </div>
  );
}
  
export default Studentslide30;
