import './Studentslide.css';
import React, { useState, useRef, useEffect } from 'react';

//todo
//1. get the overlay images from Ria
//2. figure out how to have different overlay for different images (by index)
//3. Add Horzontal scroll bar 
//4. Add image counter
//5. Add zoom functionality (possibly take out touchpad scrolling, or ifgure out another way)
//6. Disable back and next until the user has drawn on all images and clicked done to view the correct contours
//7. content 

const Contourslide = () => {
  const imageFiles = Array.from({ length: 30 }, (_, index) => `slice_${index + 1}.jpg`);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [drawnData, setDrawnData] = useState(Array(imageFiles.length).fill(null));

    const canvasRefs = useRef([]);
    const containerRef = useRef(null);

    const [added, setAdded] = useState(false);

    const [isEraserActive, setIsEraserActive] = useState(false);

    const scrollSensitivity = 1; // Adjust this value to control the scroll sensitivity

    useEffect(() => {
        const canvasElements = canvasRefs.current;
        if (canvasElements.length > 0) {
            canvasElements.forEach((canvas, index) => {
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                if (drawnData[index]) {
                    ctx.putImageData(drawnData[index], 0, 0);
                }
            });
        }
    }, [drawnData]);

    const saveDrawnData = (index, ctx) => {
      const canvasData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
      const updatedDrawnData = [...drawnData];
      updatedDrawnData[index] = canvasData;
      setDrawnData(updatedDrawnData);

      console.log('drawnData:', updatedDrawnData);
    };

    const handleScroll = (event) => {
        const deltaY = event.deltaY;

        if (deltaY > 0) {
            setCurrentImageIndex(prevIndex => Math.min(prevIndex + 1, imageFiles.length - 1)); // Scroll down
        } else if (deltaY < 0) {
            setCurrentImageIndex(prevIndex => Math.max(prevIndex - 1, 0)); // Scroll up
        }

        if (event.cancelable) {
            event.preventDefault();
        }
        containerRef.current.scrollTop += deltaY * scrollSensitivity;
    };

    const handleKeyDown = (event) => {
        console.log("handleKeyDown");
        if (event.key === 'ArrowDown') {
            setCurrentImageIndex(prevIndex => {
                const newIndex = Math.min(prevIndex + 1, imageFiles.length - 1);
                console.log('newIndex:', newIndex); // Log the updated index
                return newIndex;
            });
        } else if (event.key === 'ArrowUp') {
            setCurrentImageIndex(prevIndex => {
                const newIndex = Math.max(prevIndex - 1, 0);
                console.log('newIndex:', newIndex); // Log the updated index
                return newIndex;
            });
        }
    };

    const handleMouseLeave = () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
    };

    const handleCanvasDraw = (index, ctx, isEraserOn) => {
        console.log("handleCanvasDraw")
        let isDrawing = false;

        canvasRefs.current[index].style.cursor = 'crosshair';

        const startDrawing = (e) => {
            if(e.button !== 0) return; // Only draw on left click (0
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

            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            
            console.log(isEraserOn);


            if (isEraserOn) {
                ctx.globalCompositeOperation = 'destination-out'; // Set composite operation to erase
                ctx.strokeStyle = 'rgba(0,0,0,1)';
                ctx.lineWidth = 3;
                canvasRefs.current[index].style.cursor = 'circle_cursor.png 10 10, auto';
            } else {
                ctx.globalCompositeOperation = 'source-over'; // Reset to default drawing
                ctx.strokeStyle = 'red'; // Set drawing color
                ctx.lineWidth = 1;
                ctx.lineCap = 'round';
            }

            ctx.lineTo(x, y);
            ctx.stroke();
        };

        const stopDrawing = () => {
            isDrawing = false;
            ctx.globalCompositeOperation = 'source-over'; // Reset to default drawing
            ctx.strokeStyle = 'red'; // Set drawing color
        };

        if (!added) {
            window.addEventListener('keydown', handleKeyDown);
        }
        setAdded(true);
        document.body.style.overflow = 'hidden';

        canvasRefs.current[index].addEventListener('mousedown', startDrawing);
        canvasRefs.current[index].addEventListener('mousemove', draw);
        canvasRefs.current[index].addEventListener('mouseup', stopDrawing);
        canvasRefs.current[index].addEventListener('mouseleave', stopDrawing);

        return () => {
            canvasRefs.current[index].removeEventListener('mousedown', startDrawing);
            canvasRefs.current[index].removeEventListener('mousemove', draw);
            canvasRefs.current[index].removeEventListener('mouseup', stopDrawing);
            canvasRefs.current[index].removeEventListener('mouseleave', stopDrawing);
        };
    };

    const putOverlay = () => {
      const canvasElements = canvasRefs.current;
      
      if (!canvasElements || !canvasElements[currentImageIndex]) {
        console.error('Canvas element not found');
        console.log(canvasElements); // Log canvas elements to check their structure
        return;
      }
  
    
      const canvas = canvasElements[currentImageIndex];
      console.log(canvas);
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        console.error('2D context not available');
        return;
      }
    
      const img = new Image();
      let num = currentImageIndex + 1;
      console.log('overlayPhotos/Overlay_' + num + '.png');
      img.src = 'overlayPhotos/Overlay_' + num + '.png'; // Path to your overlay image
    
      img.onload = () => {
        ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
        
        const canvasData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
        const updatedDrawnData = [...drawnData];
        updatedDrawnData[currentImageIndex] = canvasData;
        setDrawnData(updatedDrawnData);
    
        // Save or perform any other actions with the modified canvas here
      };
    };

    return (
        <div>
        <div
            className="canvas-container"
            style={{ height: '500px', overflowY: 'auto' }}
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
                        display: index === currentImageIndex ? 'block' : 'none',
                        width: '888.88px',
                        height: '500px',
                        backgroundImage: `url(${imageFile})`, // Set image as canvas background
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                    }}
                    onMouseEnter={() => {
                        const ctx = canvasRefs.current[index].getContext('2d');
                        if(isEraserActive) {
                            handleCanvasDraw(index, ctx, true);
                        }
                        else {
                            handleCanvasDraw(index, ctx, false);
                        }
                    }}
                    onMouseLeave={() => {
                      const ctx = canvasRefs.current[index].getContext('2d');
                      saveDrawnData(index, ctx); // Save drawn data on mouse leave
                      handleMouseLeave();
                    }}
                />
            ))}
        </div>
            <button onClick={putOverlay}>Overlay</button>
            <button onClick={() => setIsEraserActive(true)}>
                Enable Eraser
            </button>
            <button onClick={() => setIsEraserActive(false)}>
                draw
            </button>
        </div>
    );
};

export default Contourslide;
