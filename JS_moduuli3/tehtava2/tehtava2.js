"use strict";
const maara = Number(prompt("Kuinka monta osallistujaa on?"));
let nimet = [];

for (let i = 0; i < maara; i++) {
    let nimi = prompt("Anna osallistujan nimi:");
    nimet.push(nimi);
}
nimet.sort();
const lista = document.querySelector("#osallistujat");
for (let i = 0; i < nimet.length; i++) {
    let kohta = document.createElement("li");
    kohta.textContent = nimet[i];
    lista.appendChild(kohta);
}