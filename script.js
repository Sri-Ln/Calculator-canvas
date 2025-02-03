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

// Function to check if the mouse is hovering over a circle
const isHovering = (circle) => {
    const distance = Math.sqrt(Math.pow(mouseX - circle.x, 2) + Math.pow(mouseY - 70, 2));
    return distance < 10; // Radius of the circle is 10
};

// Function to draw circles with hover effect
const drawCircles = () => {
    circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, 70, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = isHovering(circle) ? circle.hoverColor : circle.color; // Use hover color if hovering
        ctx.fill();
    });
};

// Input and output values display
const drawValue = () => {
    ctx.clearRect(0, 50, canvas.width, 100);

    // Set the background color
    ctx.fillStyle = "#4c5051"; // Background color
    ctx.fillRect(0, 50, canvas.width, 100); // Fill background

    // Set text properties
    ctx.fillStyle = "white"; // Text color
    ctx.textAlign = "right";

    ctx.font = "15px Arial";
    ctx.fillText(prevExpression, canvas.width - 10, 90);
    ctx.font = "20px Arial";
    ctx.fillText(value, canvas.width - 10, 125);

    // Draw circles with hover effect
    drawCircles();
};


