let firstNumber = 0;
let secondNumber = 0;
let operator = ["+", "-", "*", "/"]; 












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