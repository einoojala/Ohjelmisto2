"use strict";
const maara = Number(prompt("Montako kertaa noppaa heitetään?"));
let summa = 0;

for (let i = 0; i < maara; i++) {
    const silmaluku = Math.floor(Math.random() * 6) + 1;
    summa += silmaluku;
}
document.querySelector("#target").textContent =
    "Heittojen silmälukujen summa on " + summa;