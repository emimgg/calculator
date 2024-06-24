let firstNumber = 0;
let secondNumber = 0;
let operator = ""; 
let rawDisplay = [];
let result;

const calculator = document.querySelector(".btn-container")
const display = document.querySelector(".display");
const operands = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const btns = document.querySelectorAll(".btn");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

calculator.addEventListener("click", getNumbers(), getOperator());
equalsBtn.addEventListener("click", () => calculate(firstNumber, secondNumber, operator));
clearBtn.addEventListener("click", () => clear())


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
            operator = symbol.textContent;
        }, {once : true});
    }
}

function printToDisplay(e) {
    display.textContent += e.textContent;
    // display.textContent = rawDisplay;
}

function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    display.textContent = "";
    getOperator();
}

function calculate(firstOperand, secondOperand, operator) {
    pushToArray();
    switch (operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            if (secondNumber === 0) {
                result = "XD";
            } else {
                result = divide(firstNumber, secondNumber);
            }
            break;
        default:
            result = "ERR0R";
            break;
    }
    display.textContent = result;
    firstNumber = +result;
    secondNumber = 0;
    operator = "";
    result = "";
    getOperator();
    // console.log(rawDisplay);
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

function pushToArray() {
    rawDisplay.push(firstNumber);
    rawDisplay.push(operator);
    rawDisplay.push(secondNumber);
}