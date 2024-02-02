import "./Residentslide.css";
import React from "react";

function Residentslide9() {
  return (
    <div class="body">
      <p>
        Based on physical exam and measurements obtained on patient's MRI, we
        opt to use a 6 cm tandem angled at 30 degrees, and 3 cm cylinder. The
        patient arrives for her first fraction and is placed under conscious
        sedation for applicator insertion. A CT scan is acquired with applicator
        in place.
      </p>
      <div class="image-container-9">
        <figure>
          <img src="iud.png"></img>
          <figcaption>
            Note: IUD was removed by Gyn Onc prior to brachytherapy procedure
          </figcaption>
        </figure>
      </div>
      <p>
        On a representative sagittal section of the patient's simulation CT
        scan, we see that the tandem is relatively centered within the uterus
        and reaches the top of the uterus without perforating. Additionally, the
        cylinder is flush against the cervix with no air gaps.
      </p>
    </div>
  );
}

export default Residentslide9;
