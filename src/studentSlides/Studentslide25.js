import "./Studentslide.css";
import React from "react";

function Studentslide25() {
  return (
    <div class="body">
      <p class="purple_box">
        Good job! You found the tumor and correctly marked isocenter (green plus
        sign)
      </p>
      <div class="image-lines">
        <figure>
          <img class="sslide25_image" src="sslide25_scan1.png" />
          <figcaption>Axial</figcaption>
        </figure>
        <figure>
          <img class="sslide25_image" src="sslide25_scan2.png" />
          <figcaption>Sagittal plane</figcaption>
        </figure>
        <figure>
          <img class="sslide25_image" src="sslide25_scan3.png" />
          <figcaption>Coronal plane</figcaption>
        </figure>
      </div>
      <p class="orange_box">
        Based on your isocenter, the software calculated skin markings on the
        patient's front and sides (orange arrows) which correspond to the same
        point. The therapists marked these with small tattoos on the patient's
        skin. Now, each time he comes in for treatment, he will be aligned to
        these marks on the treatment machine.
      </p>
    </div>
  );
}

export default Studentslide25;
