'use strict';
const form = document.getElementById("source");
const firstName = document.querySelector('input[name="firstname"]');
const lastName = document.querySelector('input[name="lastname"]');
const target = document.getElementById("target");

function showName(evt) {
    evt.preventDefault();
    const name = firstName.value;
    const surname = lastName.value;
    target.textContent = "Nimesi on " + name + " " + surname;
}
form.addEventListener("submit", showName);