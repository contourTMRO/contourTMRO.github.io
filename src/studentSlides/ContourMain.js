const canvas = new fabric.Canvas('canvas', {isDrawingMode: true});

canvas.setBackgroundImage('Picture1.png', canvas.renderAll.bind(canvas));

canvas.freeDrawingBrush.color = 'white';
canvas.freeDrawingBrush.width = 10;