// changing color
let box = document.querySelector('#box');
let newDiv = box.querySelectorAll('.newDiv')

newDiv.forEach(newDiv => {
    newDiv.addEventListener('click', function (e) {
        e.target.style.background = 'black';
    });
});

// changing box size

function createDiv(size){
    box.style.gridTemplateColumns = `repeat(${size/4}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size/4}, 1fr)`;

    for(let i = 1; i <= size; i++){
        newDiv = document.createElement('div');
        newDiv.className = 'newDiv';
        box.appendChild(newDiv);
        newDiv.forEach(newDiv => {
            newDiv.addEventListener('click', function (e) {
                e.target.style.background = 'black';
            });
        });
    }
};


createDiv(16);




