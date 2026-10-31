"use strict";
function concat(taulukko) {
    let merkkijono = "";
    for (let i = 0; i < taulukko.length; i++) {
        merkkijono += taulukko[i];
    }
    return merkkijono;
}
const nimet = ["Johnny", "DeeDee", "Joey", "Marky"];
document.querySelector("#tulos").textContent = concat(nimet);