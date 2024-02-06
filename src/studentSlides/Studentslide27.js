import './Studentslide.css';
import React from 'react';

function Studentslide27() {
  return (
    <div class="body">
      <img class="sslide18_image" src="sslide_highlight2.png"/>
      <p style={{fontSize : '25px'}}>
        Contouring the tumor:
        <br/>
        <br/>
        First, we will contour the <em class="red">Gross Tumor Volume (GTV)</em>
      </p>
      <ul>
        <li style={{fontSize : '20px'}}>This represents the <em class="red">entire tumor volume that we see on the scan</em></li>
      </ul>
      <p style={{fontSize : '25px'}}>
        Next, we will add a <em class="orange">1 cm margin</em> around the GTV to create a <em class="orange">Planning 
        Target Volume (PTV)</em>
      </p>
      <ul>
        <li style={{fontSize : '20px'}}>
          Additional margin accounts for <em class="orange">day-to-day set-up error</em> (e.g., if the patient is not lined up perfectly to his 
          skin markers, or his bladder/rectum filling varies each day) as well as <em class="orange">patient movement during the treatment</em> 
          (e.g., if he fidgets during treatment)
        </li>
      </ul>
      <p style={{fontSize : '25px'}}>
        We will finally prescribe our radiation dose: <em class="red">30 Gy/10</em> Fx to the PTV
      </p>
    </div>
  );
}
  
export default Studentslide27;
