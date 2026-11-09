'use strict';
const buttonElement = document.querySelector("button");
function Alert() {
    alert("Button Clicked");
}
buttonElement.addEventListener("click", Alert);