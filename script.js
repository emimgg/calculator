let firstNumber = "";
let secondNumber = "";
let operator = ""; 
let secondOperator = "";
let rawDisplay = "";
let result = "";

const calculator = document.querySelector(".btn-container")
const display = document.querySelector(".display");
const operands = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const btns = document.querySelectorAll(".btn");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

calculator.addEventListener("click", getOperands(), getOperator());
equalsBtn.addEventListener("click", () => calculate(firstNumber, secondNumber, operator));
clearBtn.addEventListener("click", () => clear())


function getOperands() {
    for (let operand of operands) {
        operand.addEventListener("click", () => {
            if (operator === "") {
                firstNumber += operand.textContent;
                display.textContent = firstNumber;
                // if (result === firstNumber) {
                    // secondNumber = parseFloat(getOperands());
                // }
            } else {
                secondNumber += operand.textContent;
                display.textContent = secondNumber;
            }
        })
    }
}

function getOperator() {
    for (let symbol of operators) {
        symbol.addEventListener("click", () => {
            if (operator !== "" && secondNumber !== "") {
                calculate(firstNumber, secondNumber, operator);
            }
            operator = symbol.textContent;
        });
    };
}   


function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    display.textContent = "";
}

function calculate(firstOperand, secondOperand, op) {
    firstNumber = parseFloat(firstOperand);
    secondNumber = parseFloat(secondOperand);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        display.textContent = display.textContent;
        return;
    } else {
        switch (op) {
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
                    result = roundDecimals(divide(firstNumber, secondNumber));
                }
                break;
            default:
                result = firstNumber;
                break;
            }
            display.textContent = result;
            firstNumber = display.textContent;
            secondNumber = "";
            operator = "";
        }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function roundDecimals(num) {
    return Math.round(num * 100) / 100;
  }