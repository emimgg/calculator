let firstNumber = "";
let secondNumber = "";
let operator = ""; 
let result = "";

const calculator = document.querySelector(".btn-container")
const display = document.querySelector(".display");
const operands = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

calculator.addEventListener("click", getOperands(), getOperator());
equalsBtn.addEventListener("click", () => calculate(firstNumber, secondNumber, operator));
clearBtn.addEventListener("click", () => clear())


function getOperands() {
    for (let operand of operands) {
        operand.addEventListener("click", () => {
            if (display.textContent === `= ${result}` && operator === "") {
                firstNumber = "";
                firstNumber += operand.textContent;
                firstNumber = firstNumber;
                display.textContent = firstNumber;
            } else if (operator === "") {
                firstNumber += operand.textContent;
                firstNumber = firstNumber;
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
        symbol.addEventListener("click", () => {
            removeColorFromOperator(symbol);
            if (operator !== "" && secondNumber !== "") {
                calculate(firstNumber, secondNumber, operator);
            }
            operator = symbol.textContent;
            addSelectedColorToOperator(symbol);
        });
    };
}   

function clear(op) {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    display.textContent = "";
    removeColorFromOperator(operator);
}

function calculate(firstOperand, secondOperand, op) {
    firstNumber = parseFloat(firstOperand);
    secondNumber = parseFloat(secondOperand);
    removeColorFromOperator(op);

    if (isNaN(firstNumber)) {
        display.textContent = display.textContent;
        secondNumber = "";
        operator = "";
        firstNumber = "";
        return;
    
    } else if (isNaN(secondNumber)) {
            display.textContent = firstNumber;
            secondNumber = "";
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
            display.textContent = `= ${result}`;
            firstNumber = result;
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

function addSelectedColorToOperator(symbol) {
    symbol.classList.add("active-operator");
}
function removeColorFromOperator(symbol) {
    operators.forEach(symbol => symbol.classList.remove("active-operator"));
}

// function limitChars(input) {
//     let max = 9;
//     if (input.length > max) {
//         input.value = input.value.splice(0,8);
//         return input;
//     } else {
//         return input;
//     }
    

// }