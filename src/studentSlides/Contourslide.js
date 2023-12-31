import './Studentslide.css';
import React, { useState, useRef, useEffect } from 'react';

const CombinedSlide = () => {
  const imageFiles = Array.from({ length: 30 }, (_, index) => `slice_${index + 1}.jpg`);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [drawnData, setDrawnData] = useState(Array(imageFiles.length).fill(null));

    const canvasRefs = useRef([]);
    const containerRef = useRef(null);

    const [added, setAdded] = useState(false);

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

    const handleScroll = (event) => {
        const deltaY = event.deltaY;

        if (deltaY > 0) {
            setCurrentImageIndex(prevIndex => Math.min(prevIndex + 1, imageFiles.length - 1)); // Scroll down
        } else if (deltaY < 0) {
            setCurrentImageIndex(prevIndex => Math.max(prevIndex - 1, 0)); // Scroll up
        }

        event.preventDefault();
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

    const handleCanvasDraw = (index, ctx) => {
        let isDrawing = false;

        const startDrawing = (e) => {
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

            ctx.strokeStyle = 'green';
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';

            ctx.lineTo(x, y);
            ctx.stroke();
        };

        const stopDrawing = () => {
            isDrawing = false;
        };

        if (!added) {
            window.addEventListener('keydown', handleKeyDown);
        }
        setAdded(true);
        document.body.style.overflow = 'hidden';

        canvasRefs.current[index].addEventListener('mousedown', startDrawing);
        canvasRefs.current[index].addEventListener('mousemove', draw);
        canvasRefs.current[index].addEventListener('mouseup', stopDrawing);

        return () => {
            canvasRefs.current[index].removeEventListener('mousedown', startDrawing);
            canvasRefs.current[index].removeEventListener('mousemove', draw);
            canvasRefs.current[index].removeEventListener('mouseup', stopDrawing);
        };
    };

    return (
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
                        height: '540px',
                        backgroundImage: `url(${imageFile})`, // Set image as canvas background
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                    }}
                    onMouseEnter={() => {
                        const ctx = canvasRefs.current[index].getContext('2d');
                        handleCanvasDraw(index, ctx);
                    }}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
};

export default CombinedSlide;
