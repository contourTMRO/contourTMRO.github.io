import './Studentslide.css';
import React, { useState, useRef, useEffect } from 'react';

const Contourslide = () => {
    const imageFiles = ['Picture1.png', 'Picture2.png', 'Picture3.png', 'Picture4.png', 'Picture5.png']; // Add your image file names here
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageContainerRef = useRef(null);

    const [added, setAdded] = useState(false);
    const [drawing, setDrawing] = useState(false);
    const canvasRef = useRef(null);
    const [drawnData, setDrawnData] = useState(Array(imageFiles.length).fill(null));

    const scrollSensitivity = 1; // Adjust this value to control the scroll sensitivity

    useEffect(() => {
      if (imageContainerRef.current) {
          imageContainerRef.current.addEventListener('wheel', handleScroll);
          window.addEventListener('keydown', handleKeyDown);
          setAdded(true);
          document.body.style.overflow = 'hidden';
      }

      return () => {
          if (imageContainerRef.current) {
              imageContainerRef.current.removeEventListener('wheel', handleScroll);
              window.removeEventListener('keydown', handleKeyDown);
              document.body.style.overflow = 'auto';
          }
      };
  }, []);

  useEffect(() => {
      if (canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          if (drawnData[currentImageIndex]) {
              ctx.putImageData(drawnData[currentImageIndex], 0, 0);
          }
      }
  }, [currentImageIndex, drawnData]);

    const handleScroll = (event) => {
        const deltaY = event.deltaY;

        if (deltaY > 0) {
            setCurrentImageIndex(prevIndex => Math.min(prevIndex + 1, imageFiles.length - 1)); // Scroll down
        } else if (deltaY < 0) {
            setCurrentImageIndex(prevIndex => Math.max(prevIndex - 1, 0)); // Scroll up
        }
        // Adjust the scroll sensitivity
        event.preventDefault();
        imageContainerRef.current.scrollTop += deltaY * scrollSensitivity;
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

    const handleMouseEnter = () => {
        if (canvasRef.current && imageContainerRef.current) {
            //add event listener for keydown and keyup
            if (!added) {
                imageContainerRef.current.addEventListener('wheel', handleScroll);
                window.addEventListener('keydown', handleKeyDown);
            }
            setAdded(true);
            document.body.style.overflow = 'hidden';
        }
    };

    const handleMouseLeave = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.removeEventListener('wheel', handleScroll);
            //remove event listener for keydown and keyup
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <div
            className="image-gallery"
            style={{ height: '500px', overflowY: 'auto' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={imageContainerRef}
        >
            <div
                className="scroll-container"
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                {imageFiles.map((imageFile, index) => (
                    <img
                        key={index}
                        src={imageFile}
                        alt={imageFile}
                        style={{
                            display: index === currentImageIndex ? 'block' : 'none',
                            width: '500px',
                            height: '500px',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};


export default Contourslide;