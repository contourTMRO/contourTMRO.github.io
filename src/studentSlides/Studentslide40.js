import './Studentslide.css';
import React from 'react';

function Studentslide40() {
  return (
    <div class="body">
      <img class = "sslide18_image" src = "sslide_highlight3.png" />
      <p>
      For palliative radiation plans, we typically accept <em class = "green">95-95 coverage</em>.
      </p>
      <p>
      This means, we are okay with <em class = "green">95%</em> of the <em class = "orange">PTV</em> receiving <em class = "green">95%</em> of the Rx dose. 
      </p>
      <p>
      In this case, we have achieved 95-100 coverage (<em class = "green">95%</em> of <em class = "orange">PTV</em> gets <em class = "green">100%</em> of dose), which is great! 
      </p>
      <p class = "orange_box">
      We are happy with both the dose distribution & the target coverage. We approve our treatment plan and call the patient in for treatment. 
      </p>
    </div>
  );
}
  
export default Studentslide40;
