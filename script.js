const canvas = document.getElementById("calculatorCanvas");
const ctx = canvas.getContext("2d");

let value = "";
let result = "";
let prevExpression = "";
canvas.width = 350;
canvas.height = 550;

let buttonWidth = 70
let buttonHeight = 70;


// Variables to store circle positions and colors
const circles = [
    { x: 20, color: "#ff5e59", hoverColor: "#ff4a47" },
    { x: 50, color: "#ffbc2f", hoverColor: "#ffb000" },
    { x: 80, color: "#2ac83e", hoverColor: "#28b737" }
];

// Track mouse position
let mouseX = 0;
let mouseY = 0;

// Canvas mouse event listeners to update mouse position
canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
    drawValue(); // Redraw the canvas to check for hover state
});

