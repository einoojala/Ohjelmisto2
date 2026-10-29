"use strict";
function heitaNoppaa() {
    return Math.floor(Math.random() * 6) + 1;
}
let tulos = 0;
const lista = document.querySelector("#noppa");

while (tulos !== 6) {
    tulos = heitaNoppaa();
    let kohta = document.createElement("li");
    kohta.textContent = tulos;
    lista.appendChild(kohta);
}