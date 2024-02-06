import "./Studentslide.css";
import React, { useState, useRef, useEffect } from "react";

const Contourslide = () => {
  const imageFiles = Array.from(
    { length: 30 },
    (_, index) => `slice_${index + 1}.jpg`
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [drawnData, setDrawnData] = useState(
    Array(imageFiles.length).fill(null)
  );

  const canvasRefs = useRef([]);
  const containerRef = useRef(null);

  const [added, setAdded] = useState(false);

  const [done, setDone] = useState(false);

  const [isEraserActive, setIsEraserActive] = useState(false);

  const scrollSensitivity = 1; // Adjust this value to control the scroll sensitivity

  useEffect(() => {
    const canvasElements = canvasRefs.current;
    if (canvasElements.length > 0) {
      canvasElements.forEach((canvas, index) => {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (drawnData[index]) {
          ctx.putImageData(drawnData[index], 0, 0);
        }
      });
    }
  }, [drawnData]);

  const saveDrawnData = (index, ctx) => {
    const canvasData = ctx.getImageData(
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height
    );
    const updatedDrawnData = [...drawnData];
    updatedDrawnData[index] = canvasData;
    setDrawnData(updatedDrawnData);

    console.log("drawnData:", updatedDrawnData);
  };

  const handleScroll = (event) => {
    const deltaY = event.deltaY;

    if (deltaY > 0) {
      setCurrentImageIndex((prevIndex) =>
        Math.min(prevIndex + 1, imageFiles.length - 1)
      ); // Scroll down
    } else if (deltaY < 0) {
      setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Scroll up
    }

    if (event.cancelable) {
      event.preventDefault();
    }
    containerRef.current.scrollTop += deltaY * scrollSensitivity;
  };

  const handleKeyDown = (event) => {
    console.log("handleKeyDown");
    if (event.key === "ArrowDown") {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = Math.min(prevIndex + 1, imageFiles.length - 1);
        console.log("newIndex:", newIndex); // Log the updated index
        return newIndex;
      });
    } else if (event.key === "ArrowUp") {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = Math.max(prevIndex - 1, 0);
        console.log("newIndex:", newIndex); // Log the updated index
        return newIndex;
      });
    }
  };

  const handleMouseLeave = () => {
    window.removeEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "auto";
  };

  const handleCanvasDraw = (index, ctx, isEraserOn) => {
    console.log("handleCanvasDraw");

    // if (done) {return() => {};};
    // console.log('done:', done);

    let isDrawing = false;

    canvasRefs.current[index].style.cursor = "crosshair";

    const startDrawing = (e) => {
      if (e.button !== 0) return; // Only draw on left click (0
      isDrawing = true;
      const rect = canvasRefs.current[index].getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const rect = canvasRefs.current[index].getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.lineWidth = 3;
      ctx.lineCap = "round";

    //   console.log(isEraserOn);

    //   const img = new Image();
    //   img.src = "circle_cursor.png";
    //   img.onload = () => console.log("Image loaded successfully");
    //   img.onerror = () => console.log("Error loading image");

      if (isEraserOn) {
        ctx.globalCompositeOperation = "destination-out"; // Set composite operation to erase
        ctx.strokeStyle = "rgba(0,0,0,1)";
        // ctx.lineWidth = 20;
        // canvasRefs.current[index].style.cursor = 'url(circle_cursor_2.png), auto';
      } else {
        ctx.globalCompositeOperation = "source-over"; // Reset to default drawing
        ctx.strokeStyle = "blue"; // Set drawing color
        // ctx.lineWidth = 1;
        ctx.lineCap = "round";
      }

    //   if (done) {
    //     ctx.globalCompositeOperation = "source-over"; // Reset to default drawing
    //     ctx.strokeStyle = 'red';
    //     console.log('done:', done);
    //   }
    //   else {
    //     console.log('done:', done);
    //   }
      

      ctx.lineTo(x, y);
      ctx.stroke();

      // ctx.fillStyle = 'red';
      // ctx.beginPath();
      // ctx.arc(x, y, .5, 0, Math.PI * 2);
      // ctx.fill();
    };

    const stopDrawing = () => {
      isDrawing = false;
      ctx.globalCompositeOperation = "source-over"; // Reset to default drawing
    };

    if (!added) {
      window.addEventListener("keydown", handleKeyDown);
    }
    setAdded(true);
    document.body.style.overflow = "hidden";

    canvasRefs.current[index].addEventListener("mousedown", startDrawing);
    canvasRefs.current[index].addEventListener("mousemove", draw);
    canvasRefs.current[index].addEventListener("mouseup", stopDrawing);
    canvasRefs.current[index].addEventListener("mouseleave", stopDrawing);

    return () => {
      canvasRefs.current[index].removeEventListener("mousedown", startDrawing);
      canvasRefs.current[index].removeEventListener("mousemove", draw);
      canvasRefs.current[index].removeEventListener("mouseup", stopDrawing);
      canvasRefs.current[index].removeEventListener("mouseleave", stopDrawing);
    };
  };

  const putOverlay = async () => {
    // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    if (currentImageIndex !== 29) return;

    // setDone(true);
    // setIsEraserActive(false);
    const loadImage = (src, index) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ img, index });
        img.onerror = () => reject(index);
        img.src = src;
      });
    };

    const putOverlayOnCanvas = async (canvas, index) => {
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        console.error(`2D context not available for canvas at index ${index}`);
        return;
      }

      const imgSrc = `overlayPhotos/Overlay_${index + 1}.png`;

      try {
        const { img } = await loadImage(imgSrc, index);
        console.log(
          `Overlay image ${index + 1} loaded for canvas at index ${index}`
        );

        // Wait for the image to load before proceeding
        await new Promise((resolve) => setTimeout(resolve, 0));

        await ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);

        // saveDrawnData(index, ctx); // Save drawn data after overlay is added

        // const canvasData = await ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
        // const updatedDrawnData = [...drawnData];
        // updatedDrawnData[index] = canvasData;
        // setDrawnData(updatedDrawnData);

        // Save or perform any other actions with the modified canvas here
      } catch (errorIndex) {
        console.error(
          `Failed to load overlay image for canvas at index ${errorIndex}`
        );
      }
    };

    const canvasElements = canvasRefs.current;

    if (!canvasElements) {
      console.error("Canvas elements not found");
      return;
    }

    for (let index = 0; index < canvasElements.length; index++) {
      try {
        await putOverlayOnCanvas(canvasElements[index], index);
        //change the marker color to transparent
        const ctx = canvasElements[index].getContext("2d");
        // ctx.globalCompositeOperation = "source-over"; // Reset to default drawing
        // ctx.strokeStyle = 'transparent';
      } catch (error) {
        console.error("Error loading overlay image:", error);
      }
      // await delay(100);
    }

    console.log("All overlay images loaded successfully.");
    
  };

  return (
    <div>
    <div class="contour-top">
      <div
        className="canvas-container"
        style={{ height: "500px", overflowY: "auto" }}
        onWheel={handleScroll}
        ref={containerRef}
      >
        {imageFiles.map((imageFile, index) => (
          <canvas
            key={index}
            ref={(el) => (canvasRefs.current[index] = el)}
            width={888.88}
            height={500}
            style={{
              display: index === currentImageIndex ? "block" : "none",
              width: "888.88px",
              height: "500px",
              backgroundImage: `url(${imageFile})`, // Set image as canvas background
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => {
            //   if (done) {
            //     return;
            //   }
              const ctx = canvasRefs.current[index].getContext("2d");
              if (isEraserActive) {
                handleCanvasDraw(index, ctx, true);
              } else {
                handleCanvasDraw(index, ctx, false);
              }
            }}
            onMouseLeave={() => {
              const ctx = canvasRefs.current[index].getContext("2d");
              // saveDrawnData(index, ctx); // Save drawn data on mouse leave
              handleMouseLeave();
            }}
          />
        ))}
      </div>
      <div class="icons">
        <div class = "icon_button"><button onClick={() => setIsEraserActive(true)}><img class = "contour_icon" src = "eraser_icon.svg" /></button>Eraser</div>
        <div class = "icon_button"><button onClick={() => setIsEraserActive(false)}><img class = "contour_icon" src = "marker_icon.png" /></button>Marker</div>
      </div>
    </div>
    <button onClick={putOverlay}>Overlay All Images</button>
    </div>
  );
};

export default Contourslide;
