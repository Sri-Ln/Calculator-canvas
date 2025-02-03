const canvas = document.getElementById("calculatorCanvas");
const ctx = canvas.getContext("2d");

let value = "";
let result = "";
let prevExpression = "";
canvas.width = 350;
canvas.height = 550;

let buttonWidth = 70
let buttonHeight = 70;
