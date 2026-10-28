"use strict";
const vastaus = confirm("Lasketaanko neliöjuuri?");

if (vastaus === true) {
    const luku = Number(prompt("Anna luku:"));
    if (luku < 0) {
        document.querySelector("#target").textContent =
            "Negatiivisen luvun neliöjuurta ei ole määritelty.";
    } else {
        const juuri = Math.sqrt(luku);
        document.querySelector("#target").textContent =
            "Neliöjuuri on " + juuri;
    }
} else {
    document.querySelector("#target").textContent =
        "Neliöjuurta ei lasketa.";
}