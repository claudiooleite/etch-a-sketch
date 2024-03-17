

let box = document.querySelector('#box');
let mouseDown = false;
let sizing = document.querySelector('#customRange2');
let clear = document.getElementById('clear btn');

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

// Example usage with size 16
// createDiv(100);

// sizing slider

sizing.addEventListener('input', (e)=>{
    createDiv(e.target.value)
});

// Clear btn

clear.addEventListener('click', function() {
    const children = box.querySelectorAll('.newDiv');

    // Iterate over each child element and change its background color
    children.forEach(child => {
        child.style.backgroundColor = 'white';
    });
});


