'use strict'

var gCanvas;
var gCtx;
var gCurrShape = 'squares'
var gColor = 'black';
var gBackgroundColor;
var gShape = 'squares';
var gIsMouseDown = false;


function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')

}


function mouseMove(event) {
    document.onmousedown = function () { gIsMouseDown = true };
    document.onmouseup = function () { gIsMouseDown = false };
    document.onmousemove = function () { if (gIsMouseDown) { draw(event) } };

}

function changeColor(color) {
    console.log(color);
    gColor = color;
}

function changeBackgroundColor(color) {
    gBackgroundColor = color;
    document.getElementById('my-canvas').style.backgroundColor = gBackgroundColor;
}

function changeShape(shape) {
    gShape = shape;
}

function draw(event) {

    switch (gShape) {
        case 'squares':
            drawSquares(event.x, event.y);
            break;

        case 'circles':
            drawCircles(event.x, event.y);
            break;

        default:
            break;
    }
}

function drawSquares(x, y) {
    var int = getRandomInt(20, 101);

    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.moveTo(x, y)
    gCtx.lineTo(x + int, y)
    gCtx.lineTo(x + int, y + int * 1.3)
    gCtx.lineTo(x, y + int * 1.3)
    gCtx.closePath()
    // gCtx.lineTo(x, y)
    gCtx.strokeStyle = gColor;
    gCtx.stroke()
}

function drawCircles(x, y) {
    var int = getRandomInt(20, 101);

    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.arc(x, y, int, 0, 2 * Math.PI);
    gCtx.strokeStyle = gColor;
    gCtx.stroke();



}


function clearCanvas() {

    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function saveToLocalStorage() {
    localStorage.canvas = canvas.toDataURL("image/png")
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-canvas'
}