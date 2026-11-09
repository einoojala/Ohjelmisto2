'use strict';
const input = document.getElementById("calculation");
const resultElement = document.getElementById("result");
const button = document.getElementById("start");

function calculate() {
    const calculation = input.value;
    let number1;
    let number2;
    let result;
    if (calculation.includes("+")) {
        const numbers = calculation.split("+");
        number1 = Number(numbers[0]);
        number2 = Number(numbers[1]);
        result = number1 + number2;
    } else if (calculation.includes("-")) {
        const numbers = calculation.split("-");
        number1 = Number(numbers[0]);
        number2 = Number(numbers[1]);
        result = number1 - number2;
    } else if (calculation.includes("*")) {
        const numbers = calculation.split("*");
        number1 = Number(numbers[0]);
        number2 = Number(numbers[1]);
        result = number1 * number2;
    } else if (calculation.includes("/")) {
        const numbers = calculation.split("/");
        number1 = Number(numbers[0]);
        number2 = Number(numbers[1]);
        result = number1 / number2;
    }
    resultElement.textContent = result;
}
button.addEventListener("click", calculate);