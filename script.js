let firstNumber = 0;
let secondNumber = 0;
let operator = ""; 
let rawDisplay = "";
let result;

const display = document.querySelector(".display");
const operands = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const btns = document.querySelectorAll(".btn");
const equals = document.querySelector(".equals");

getNumbers();
getOperator();
equals.addEventListener("click", () => calculate(firstNumber, secondNumber, operator));



function getNumbers() {
    for (let operand of operands) {
        operand.addEventListener("click", () => {
            printToDisplay(operand);
            if (operator === ""){
                firstNumber = parseFloat(firstNumber + operand.textContent);
            } else {
                secondNumber = parseFloat(secondNumber + operand.textContent);
            }
        });
    }
}
function getOperator() {
    for (let symbol of operators) {
        symbol.addEventListener("click", () => {
            display.textContent = symbol.textContent;
            rawDisplay = symbol.textContent;
            operator = symbol.textContent;
        }, {once : true});
    }
}

function printToDisplay(e) {
    rawDisplay += e.textContent;
    display.textContent = rawDisplay;
}

function clear() {

}

function calculate(firstNumber, secondNumber, operator) {
    if (operator == "+") rawDisplay = add(firstNumber, secondNumber);
    if (operator == "-") rawDisplay = substract(firstNumber, secondNumber);
    if (operator == "*") rawDisplay = multiply(firstNumber, secondNumber);
    if (operator == "/") rawDisplay = divide(firstNumber, secondNumber);
    display.textContent = rawDisplay;
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