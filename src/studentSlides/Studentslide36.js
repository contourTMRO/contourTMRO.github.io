import './Studentslide.css';
import React from 'react';

function Studentslide36() {
  return (
    <div class="body">
      <div class = "sslide36_image_text_div"><img class = "sslide36_image_text" src = "sslide36_text.png"/></div>
      <div class = "image-lines">
        <img class = "sslide36_image" src = "sslide36_scan1.png"></img>
        <img class = "sslide36_image" src = "sslide36_scan2.png"></img>
        <img class = "sslide36_image" src = "sslide36_scan3.png"></img>
      </div>
      <p>
      Everything within the <em class="yellow">100% isodose line</em>, for example, is receiving <em class = "yellow">AT LEAST 100%</em> of prescribed dose (30 Gy).
      </p>
      <p>
      Everything within the <em class = "blue">80% isodose line</em> is receiving <em class ="blue">AT LEAST 80%</em> of prescribed dose (24 Gy).
      </p>
      <p>
      No part of the tumor is receiving 110% or more (dose maximum is 108%).
      </p>
      <p class = "purple_box">What do you think? Do these isodose lines look acceptable to you?</p>

    </div>
  );
}
  
export default Studentslide36;
