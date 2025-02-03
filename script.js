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


// styling the button in the calculator
const drawButton = (x, y, text, color, width = buttonWidth) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, buttonHeight);
    ctx.strokeStyle = "#4b4f4e";
    ctx.lineWidth = 0.5;
    ctx.strokeRect(x, y, width, buttonHeight); // Use the custom width
    ctx.fillStyle = "white";
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x + width / 2, y + buttonHeight / 2); // Adjust text position
};

// this function draws the button on which the values are displayed such as numbers nad symbols
const drawCalculator = () => {
    drawValue();
    drawButton(0, 150, "", "#5f6065");
    drawButton(buttonWidth, 150, "", "#5f6065");
    drawButton(buttonWidth * 2, 150, "AC", "#5f6065");
    drawButton(buttonWidth * 3, 150, "%", "#5f6065");
    drawButton(buttonWidth * 4, 150, "/", "orange");

    drawButton(0, 150 + buttonHeight, "(", "#797a7e");
    drawButton(buttonWidth, 150 + buttonHeight, "7", "#797a7e");
    drawButton(buttonWidth * 2, 150 + buttonHeight, "8", "#797a7e");
    drawButton(buttonWidth * 3, 150 + buttonHeight, "9", "#797a7e");
    drawButton(buttonWidth * 4, 150 + buttonHeight, "x", "orange");

    drawButton(0, 150 + buttonHeight * 2, ")", "#797a7e");
    drawButton(buttonWidth, 150 + buttonHeight * 2, "4", "#797a7e");
    drawButton(buttonWidth * 2, 150 + buttonHeight * 2, "5", "#797a7e");
    drawButton(buttonWidth * 3, 150 + buttonHeight * 2, "6", "#797a7e");
    drawButton(buttonWidth * 4, 150 + buttonHeight * 2, "-", "orange");

    drawButton(0, 150 + buttonHeight * 3, "Back", "#797a7e");
    drawButton(buttonWidth, 150 + buttonHeight * 3, "1", "#797a7e");
    drawButton(buttonWidth * 2, 150 + buttonHeight * 3, "2", "#797a7e");
    drawButton(buttonWidth * 3, 150 + buttonHeight * 3, "3", "#797a7e");
    drawButton(buttonWidth * 4, 150 + buttonHeight * 3, "+", "orange");

    // Make the "0" button span across two button widths
    drawButton(0, 150 + buttonHeight * 4, "0", "#797a7e", buttonWidth * 3);
    drawButton(buttonWidth * 3, 150 + buttonHeight * 4, ".", "#797a7e");
    drawButton(buttonWidth * 4, 150 + buttonHeight * 4, "=", "orange");
};

// adds values side by side
const addValue = (newValue) => {
    value += newValue;
    drawValue();
}

const clearAllValue = () => {
    value = ""; // Clear the current value
    prevExpression = ""; // Clear the previous expression
    drawValue(); // Redraw the canvas
}

// clears value using back button
const deleteValue = () => {
    const lowerValue = value.toString().toLowerCase();
    if (
        lowerValue.includes("invalid expression") || 
        lowerValue.includes("nan") || 
        lowerValue.includes("infinity")
    ) {
        clearAllValue(); // Corrected function name to match convention
    } else {
        value = value.slice(0, -1);
        drawValue();
    }            
};

