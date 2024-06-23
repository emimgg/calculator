let firstNumber = 0;
let secondNumber = 0;
let operator = ""; 
let rawDisplay = "";
let cleanDisplay = [];

const display = document.querySelector(".display");
const operands = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const btns = document.querySelectorAll(".btn");

getNumbers();
getOperator();

function getNumbers() {
    for (let operand of operands) {
        operand.addEventListener("click", () => {
            printToDisplay(operand);
            if (operator === ""){
                firstNumber += operand.textContent;
            } else {
                secondNumber += operand.textContent;
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
        });
    }
}
function printToDisplay(e) {
    rawDisplay += e.textContent;
    display.textContent = rawDisplay;
}
// function getSecondNumber() {
//     for (let operand of operands) {
//         operand.addEventListener("click", ()=> {
//             rawDisplay = operand.textContent;
//             display.textContent = rawDisplay;
//         });
//     }
// }

// function getUserEquation() {
//     if (operator === "") {
//         getFirstNumber()
//     }
//         getOperator();
//     if (operator !== "") {
//         getSecondNumber();
//     }
//     console.log(firstNumber, secondNumber, operator)
// }

// getUserEquation();











// function printToDisplay() {
//     for (let item of btns) {
//         item.addEventListener("click", () => {
//             rawDisplay.push(item.textContent);
//             display.textContent += item.textContent;
//             cleanDisplayValue(rawDisplay);
//         })
//     }  
// }
// console.log(cleanDisplay);
// function cleanDisplayValue(array) {
//     cleanDisplay = array.join("");
//     return cleanDisplay;
// }

// function printToDisplay(selection) {
//     display.textContent += selection.textContent;
// }

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