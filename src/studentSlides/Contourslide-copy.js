import './Studentslide.css';
import React, { useState, useRef, useEffect } from 'react';
import { FabricJSCanvas } from 'fabricjs-react';

const Contourslide = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    const backgroundImage = new Image();
    backgroundImage.onload = function () {
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    };

    // Replace 'image-url.jpg' with the path to your background image
    backgroundImage.src = 'Picture1.png';

    const startDrawing = (e) => {
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
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

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
    };
  }, []);

  return <canvas ref={canvasRef} width={500} height={500} />;
};


export default Contourslide;