import './Studentslide.css';
import React from 'react';

function Contourintro() {
  return (
    <div class="body">
      <p>
        You will now attempt to contour the GTV!
      </p>
      <p>
        On the next slide you will see a series of images that make up a CT scan. Scroll through the images using your scroll wheel or the up and down arrow keys.
      </p>
      <p>
        Use your mouse to draw a contour the GTV that you see on each image. (Hint: the GTV is not visible in every image, so it is okay to skip some images!)
      </p>
      <p>
        Once you are finished, make sure that you scroll to the last image in the scan and click the "Done!" button to submit your contours.
      </p>
      <p>
        The correct contours will now be visible on the images. Use them to compare to your own contours and see how you did!
      </p>
    </div>
  );
}
  
export default Contourintro;
