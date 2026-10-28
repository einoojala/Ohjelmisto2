"use strict";
const alkuvuosi = Number(prompt("Anna alkuvuosi:"));
const loppuvuosi = Number(prompt("Anna loppuvuosi:"));
let tulos = "<ul>";

for (let vuosi = alkuvuosi; vuosi <= loppuvuosi; vuosi++) {
    if (
        vuosi % 400 === 0 ||
        (vuosi % 4 === 0 && vuosi % 100 !== 0)
    ) {
        tulos += "<li>" + vuosi + "</li>";
    }
}
tulos += "</ul>";
document.querySelector("#target").innerHTML = tulos;