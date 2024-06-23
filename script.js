let firstNumber = 0;
let secondNumber = 0;
let operator = ["+", "-", "*", "/"]; 

const display = document.querySelector(".display");
const operands = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const btns = document.querySelectorAll(".btn");

for (let item of btns) {
    item.addEventListener("click", () => display.textContent += item.textContent)
}




function printToDisplay(selection) {
    display.textContent += selection.textContent;
}

function operate(firstNumber, secondNumber, operator) {
    if (operator == "+") add(firstNumber, secondNumber);
    if (operator == "-") substract(firstNumber, secondNumber);
    if (operator == "*") multiply(firstNumber, secondNumber);
    if (operator == "/") divide(firstNumber, secondNumber);
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}