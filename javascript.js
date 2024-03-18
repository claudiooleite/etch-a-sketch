

const box = document.querySelector('#box');
let mouseDown = false;
const sizing = document.querySelector('#customRange2');
const clear = document.getElementById('clear btn');
const eraser = document.getElementById('btn-check-2-outlined');
const colorPicker = document.getElementById("color-picker");
const rainbowMode = document.getElementById("random-color btn");
let currentColor = 'black';

// Event delegation 

function handleMouseDown(e) {
    mouseDown = true;
    if (e.target.classList.contains('newDiv')) {
        e.target.style.backgroundColor = currentColor;
    }
}

function handleMouseUp() {
    mouseDown = false;
}

function handleMouseOver(e) {
    if (mouseDown && e.target.classList.contains('newDiv')) {
        e.target.style.backgroundColor = currentColor;
    }
}

box.addEventListener('mousedown', handleMouseDown);
box.addEventListener('mouseup', handleMouseUp);
box.addEventListener('mouseover', handleMouseOver);

// Create divs based on size
function createDiv(size) {
    box.style.gridTemplateColumns = `repeat(${size / 2}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size / 2}, 1fr)`;
    box.innerHTML = '';
    let resized = size **2;
    for (let i = 1; i <= resized; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'newDiv';
        box.appendChild(newDiv);
    }
}

// sizing slider

sizing.addEventListener('input', (e)=>{
    createDiv(e.target.value)
});

// Clear btn
clear.addEventListener('click', function() {
    removeRainbowMode();
    clearBox();
});

function clearBox(){
    const children = box.querySelectorAll('.newDiv');
    children.forEach(child => {
        child.style.backgroundColor = 'white';
    });
}

// Eraser Btn

// Event listener for the eraser button
eraser.addEventListener('click', () => {
    removeRainbowMode();
    toggleEraserMode();
});

let eraserMode = false;

function toggleEraserMode() {
    eraserMode = !eraserMode;
    currentColor = eraserMode ? 'white' : 'black';
}


// Select color
colorPicker.addEventListener("input", function(e) { 
    removeRainbowMode(); 
    currentColor = e.target.value;
});

// Rainbow mode

// Function to handle rainbow mode
rainbowMode.addEventListener('click', function(){
    handleRainbowMode();
});

function handleRainbowMode() {
    box.addEventListener('mousemove', handleMouseMove);
}

// Function to remove rainbow mode
function removeRainbowMode() {
    box.removeEventListener('mousemove', handleMouseMove);
}


function handleMouseMove(event) {
    const currentColor = generateRandomColor();
    if (mouseDown && event.target.classList.contains('newDiv')) {
            event.target.style.backgroundColor = currentColor;
    }
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}



