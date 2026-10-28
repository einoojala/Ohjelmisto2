"use strict";
const luku = Number(prompt("Anna kokonaisluku:"));
let alkuluku = true;

if (luku <= 1) {
    alkuluku = false;
} else {
    for (let i = 2; i < luku; i++) {
        if (luku % i === 0) {
            alkuluku = false;
        }
    }
}
if (alkuluku === true) {
    document.querySelector("#target").textContent =
        luku + " on alkuluku.";
} else {
    document.querySelector("#target").textContent =
        luku + " ei ole alkuluku.";
}