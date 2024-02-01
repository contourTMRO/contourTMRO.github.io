import "./Residentslide.css";
import React from "react";

function Residentslide1() {
  return (
    <div class="body">
      <p>
        This training module is intended for residents in radiation oncology
      </p>
      {/* //add a break */}
      <br></br>
      <p>
        We will review 2 gynecologic cancer cases treated with high-dose rate
        (HDR) brachytherapy.
      </p>
      <br></br>
      <p>For each case, we will review the following principles:</p>
      <div class="ol-container">
        <ol>
          <li>Disease-specific treatment paradigm</li>
          <li>Applicator selection</li>
          <li>
            Dosimetric parameters for evaluation of an HDR radiation treatment
            plan
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Residentslide1;
