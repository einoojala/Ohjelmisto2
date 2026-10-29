"use strict";
function heitaNoppaa(tahkot) {
    return Math.floor(Math.random() * tahkot) + 1;
}
const tahkot = Number(prompt("Tahkojen määrä: "));
let tulos = 0;
const lista = document.querySelector("#noppa");

while (tulos !== tahkot) {
    tulos = heitaNoppaa(tahkot);
    let kohta = document.createElement("li");
    kohta.textContent = tulos;
    lista.appendChild(kohta);
}