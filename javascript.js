

let box = document.querySelector('#box');
let mouseDown = false;
let sizing = document.querySelector('#customRange2');
let clear = document.getElementById('clear btn');
let eraser = document.getElementById('btn-check-2-outlined');
const children = box.querySelectorAll('.newDiv');

// Event delegation 

box.addEventListener('mousedown', function (e) {
    mouseDown = true;

    if (e.target.classList.contains('newDiv')) {
        e.target.style.backgroundColor = 'black';
    }
});

box.addEventListener('mouseup', function () {
    mouseDown = false;
});

box.addEventListener('mouseover', function (e) {
    if (mouseDown && e.target.classList.contains('newDiv')) {
        e.target.style.backgroundColor = 'black';
    }
});


// changing box size
function createDiv(size) {
    box.style.gridTemplateColumns = `repeat(${size / 2}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size / 2}, 1fr)`;

    // Clear existing content
    box.innerHTML = '';
    let resized = size **2;
    // Add new divs with the class 'newDiv'
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
    // Iterate over each child element and change its background color
    children.forEach(child => {
        child.style.backgroundColor = 'white';
    });
});

// Eraser Btn 
let eraserMode = false;

// Event listener for the eraser button
document.getElementById('btn-check-2-outlined').addEventListener('click', function() {
    // Toggle the eraser mode
    eraserMode = !eraserMode;

    // If eraser mode is enabled, change the event listeners to act as an eraser
    if (eraserMode) {
        box.addEventListener('mousedown', eraserMouseDown);
        box.addEventListener('mouseup', eraserMouseUp);
        box.addEventListener('mouseover', eraserMouseOver);
    } else {
        // If eraser mode is disabled, revert back to the original behavior
        box.removeEventListener('mousedown', eraserMouseDown);
        box.removeEventListener('mouseup', eraserMouseUp);
        box.removeEventListener('mouseover', eraserMouseOver);
    }
});

// Event listener functions for eraser mode
function eraserMouseDown(e) {
    mouseDown = true;

    if (e.target.classList.contains('newDiv')) {
        e.target.style.backgroundColor = 'white'; // Change to white for eraser
    }
}

function eraserMouseUp() {
    mouseDown = false;
}

function eraserMouseOver(e) {
    if (mouseDown && e.target.classList.contains('newDiv')) {
        e.target.style.backgroundColor = 'white'; // Change to white for eraser
    }
}
///////




