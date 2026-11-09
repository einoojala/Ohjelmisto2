'use strict';
const first = document.getElementById("num1");
const second = document.getElementById("num2");
const operationElement = document.getElementById("operation");
const resultElement = document.getElementById("result");
const button = document.getElementById("start");

function calculate() {
    const number1 = Number(first.value);
    const number2 = Number(second.value);
    const operation = operationElement.value;
    let result;
    if (operation === "add") {
        result = number1 + number2;
    } else if (operation === "sub") {
        result = number1 - number2;
    } else if (operation === "multi") {
        result = number1 * number2;
    } else if (operation === "div") {
        result = number1 / number2;
    }
    resultElement.textContent = result;
}

button.addEventListener("click", calculate);