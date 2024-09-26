const box = document.querySelector("#box");
let mouseDown = false;
let rainbowModeActive = false;
let currentColor = "black";

const sizing = document.querySelector("#customRange");
const clearBtn = document.getElementById("clear-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorPicker = document.getElementById("color-picker");
const rainbowModeBtn = document.getElementById("random-color-btn");

// Create grid dynamically
function createGrid(size) {
  box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  box.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  box.innerHTML = ""; // Clear previous divs
  let totalDivs = size ** 2;
  for (let i = 0; i < totalDivs; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "newDiv";
    newDiv.style.border = "1px solid #e0e0e0";
    box.appendChild(newDiv);
  }

  // Draw the GitHub logo after grid creation
  drawGitHubLogo(size);
}

// Initial grid size and mouse size
createGrid(32); // Start with a 32x32 grid
sizing.value = 40; // Set mouse size slider to a larger default

// Mouse events for painting
box.addEventListener("mousedown", (e) => {
  mouseDown = true;
  if (e.target.classList.contains("newDiv")) {
    e.target.style.backgroundColor = rainbowModeActive
      ? generateRandomColor()
      : currentColor;
  }
});

box.addEventListener("mouseup", () => {
  mouseDown = false;
});

box.addEventListener("mouseover", (e) => {
  if (mouseDown && e.target.classList.contains("newDiv")) {
    e.target.style.backgroundColor = rainbowModeActive
      ? generateRandomColor()
      : currentColor;
  }
});

// Sizing slider
sizing.addEventListener("input", (e) => {
  const gridSize = parseInt(e.target.value / 10); // Adjust grid size for better scaling
  createGrid(gridSize);
});

// Clear button
clearBtn.addEventListener("click", () => {
  const children = box.querySelectorAll(".newDiv");
  children.forEach((child) => {
    child.style.backgroundColor = "white";
  });
  rainbowModeActive = false; // Disable rainbow mode after clearing
});

// Eraser toggle
eraserBtn.addEventListener("click", () => {
  rainbowModeActive = false; // Disable rainbow mode when eraser is selected
  currentColor = eraserBtn.checked ? "white" : colorPicker.value;
});

// Color picker
colorPicker.addEventListener("input", (e) => {
  rainbowModeActive = false; // Disable rainbow mode when a color is selected
  currentColor = e.target.value;
});

// Rainbow mode toggle
rainbowModeBtn.addEventListener("click", () => {
  rainbowModeActive = true;
});

// Generate random color for rainbow mode
function generateRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0").toUpperCase()}`;
}

// Function to draw GitHub logo
function drawGitHubLogo(size) {
  const pixels = document.querySelectorAll(".newDiv");

  // These are approximate positions of pixels to form the GitHub logo shape.
  const logoPixels = [
    
    33, 34, 35, 66, 67, 68, 69, 70, 101, 102, 103, 135, 136, 137, 169, 170, 202,
    203, 235, 236, 237, 269, 270, 302, 303, 335, 336, 337, 369, 370,
  ];

  logoPixels.forEach((index) => {
    pixels[index].style.backgroundColor = "black";
  });
}
