"use strict";
const vuosi = parseInt(prompt("Anna vuosiluku:"));

if (vuosi % 400 === 0) {
    document.querySelector("#target").textContent =
        vuosi + " on karkausvuosi.";
} else if (vuosi % 100 === 0) {
    document.querySelector("#target").textContent =
        vuosi + " ei ole karkausvuosi.";
} else if (vuosi % 4 === 0) {
    document.querySelector("#target").textContent =
        vuosi + " on karkausvuosi.";
} else {
    document.querySelector("#target").textContent =
        vuosi + " ei ole karkausvuosi.";
}