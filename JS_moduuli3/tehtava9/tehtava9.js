"use strict";
function even(taulukko) {
    let parilliset = [];
    for (let i = 0; i < taulukko.length; i++) {
        if (taulukko[i] % 2 === 0) {
            parilliset.push(taulukko[i]);
        }
    }
    return parilliset;
}
const luvut = [2, 7, 4];
console.log("Alkuperäinen taulukko:", luvut.join(", "));
console.log("Uusi taulukko:", even(luvut).join(", "));