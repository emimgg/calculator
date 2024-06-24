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
            } else {
                secondNumber += operand.textContent;
                display.textContent = secondNumber;
            }
        })
    }
}

function getOperator() {
    for (let symbol of operators) {
        if (operator !== "") {
            symbol.addEventListener("click", () => {
                secondOperator = symbol.textContent;
            });
        } else {
            symbol.addEventListener("click", () => {
                operator = symbol.textContent;
            })
        }
    }   
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
    firstNumber = parseFloat(firstOperand);
    secondNumber = parseFloat(secondOperand);

    if (operator === "") display.textContent = firstNumber;
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
                result = firstNumber;
            } else {
                result = divide(firstNumber, secondNumber);
            }
            break;
        default:
            result = firstNumber;
            break;
    }
    display.textContent = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
    result = "";
    // getOperator();
    // console.log(rawDisplay);
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

function pushToArray() {
    rawDisplay.push(firstNumber);
    rawDisplay.push(operator);
    rawDisplay.push(secondNumber);
}

// function getNumbers() {
//     for (let operand of operands) {
//         operand.addEventListener("click", () => {
//             if (operator === null){
//                 firstNumber = parseFloat(firstNumber + operand.textContent);
//                 display.textContent = firstNumber;
//             } else {
//                 rawDisplay = "";
//                 secondNumber = parseFloat(secondNumber + operand.textContent);
//                 display.textContent = secondNumber;
//             }
//         });
//     }
// }
// function getOperator() {
//     for (let symbol of operators) {
//         symbol.addEventListener("click", () => {
//             display.textContent = symbol.textContent;
//             operator = symbol.textContent;
//         }, {once : true});
//     }
// }

// function printToDisplay(e) {
//     display.textContent += e.textContent;
//     // display.textContent = rawDisplay;
// }