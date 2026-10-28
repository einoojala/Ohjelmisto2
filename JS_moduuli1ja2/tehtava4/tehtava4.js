"use strict";
const nimi = prompt("Mikä sinun nimesi on?");
const luku = Math.floor(Math.random() * 4) + 1;
let tupa;
if (luku === 1) {
    tupa = "Rohkelikko";
} else if (luku === 2) {
    tupa = "Luihuinen";
} else if (luku === 3) {
    tupa = "Puuskupuh";
} else {
    tupa = "Korpinkynsi";
}
document.querySelector("#target").textContent =
    nimi + ", sinä olet " + tupa + ".";