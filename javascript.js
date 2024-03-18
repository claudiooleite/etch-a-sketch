

let box = document.querySelector('#box');
let mouseDown = false;
let sizing = document.querySelector('#customRange2');
let clear = document.getElementById('clear btn');
let eraser = document.getElementById('btn-check-2-outlined');
const children = box.querySelectorAll('.newDiv');
let currentColor = 'black';

// Event delegation 

box.addEventListener('mousedown', function (e) {
    mouseDown = true;

    if (e.target.classList.contains('newDiv')) {
        e.target.style.backgroundColor = currentColor;
    }
});

box.addEventListener('mouseup', function () {
    mouseDown = false;
});

box.addEventListener('mouseover', function (e) {
    if (mouseDown && e.target.classList.contains('newDiv')) {
        e.target.style.backgroundColor = currentColor;
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
    if (eraserMode) {
        currentColor = 'white';
    } else {
        currentColor = 'black'
    }
});


// Select color
const colorPicker = document.getElementById("color-picker");

colorPicker.addEventListener("input", function(e) {  
    const selectedColor = e.target.value;
    currentColor = selectedColor;
});

// Rainbow mode

function generateRandomColor(){
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

const rainbowBtn = false;
const rainbowMode = document.getElementById("random-color btn");
rainbowMode.addEventListener('click', function(){
    rainbowBtn = !rainbowBtn;

    if(rainbowBtn){
        currentColor = generateRandomColor();
        
        box.addEventListener('mousemove', function(e){
            // Generate a random color
            const currentColor = generateRandomColor();
            
            // Check if the mouse button is pressed
            if (mouseDown) {
                // Change the background color of the hovered element to the random color
                if (e.target.classList.contains('newDiv')) {
                    e.target.style.backgroundColor = currentColor;
                }
            }
        });
        
        // Define a variable to track mouse button state
        let mouseDown = false;
        
        // Add event listeners for mouse down and mouse up events on the document
        document.addEventListener('mousedown', function () {
            mouseDown = true;
        });
        
        document.addEventListener('mouseup', function () {
            mouseDown = false;
        });
    } else {
        currentColor = 'black';
    }
    
})






