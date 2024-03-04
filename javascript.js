
const box = document.querySelector('#box');

const newDiv = box.querySelectorAll('.newDiv')

newDiv.forEach(newDiv => {
    newDiv.addEventListener('click', function (e) {
        e.target.style.background = 'black';
    });
});



// function createDiv(size){
//     for(let i = 1; i <= size; i++){
//         newDiv = document.createElement('div');
//         newDiv.className = 'newDiv';
//         newDiv.style.cssText = `background-Color: black; grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`;
//         box.appendChild(newDiv);
//     }
// }

// let sizing = createDiv(16);


