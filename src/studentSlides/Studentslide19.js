import "./Studentslide.css";
import React from "react";

function Studentslide19() {
  return (
    <div class="body">
      <p>
        Consider giving patients instructions prior to CT simulation to account
        for variables they may affect <em>internal movement</em> within the
        patient
      </p>
      <div class="image-lines">
        <img class="sslide19_image" src="sslide19_scan1.png"></img>
        <img class="sslide19_image" src="sslide19_scan2.png"></img>
        <p class="turquoise_box">
          Left: sagittal view of pelvis with empty bladder Right: sagittal view
          of pelvis with full bladder
          <br></br>
          <br></br>
          Note how differences in bladder filling can affect patient's internal
          anatomy!
        </p>
      </div>
      <p>
        For example, in our patient, differences in bladder and rectum filling
        from day to day may affect the internal anatomy. We can ask our patient
        to keep his bladder full by drinking water and have a bowel movement
        prior to treatment, so that there is some consistency between
        treatments.
      </p>
      <p class="purple_box">
        Let's tell our radiation therapists how we would like to simulate this
        patient by filling out a CT simulation order form
      </p>
    </div>
  );
}

export default Studentslide19;
