"use strict";
let nimet = [];
for (let i = 0; i < 6; i++) {
    let nimi = prompt("Anna koiran nimi:");
    nimet.push(nimi);
}
nimet.sort().reverse();
const lista = document.querySelector("#koirat");

for (let i = 0; i < nimet.length; i++) {
    let kohta = document.createElement("li");
    kohta.textContent = nimet[i];
    lista.appendChild(kohta);
}