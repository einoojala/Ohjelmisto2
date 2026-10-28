"use strict";
const maara = Number(prompt("Noppien lukumäärä"));
const tavoite = Number(prompt("minkä silmälukujen summan todennäköisyyden haluat selvittää?"));
let osumat = 0;
const heitot = 10000;

for (let i = 0; i < heitot; i++) {
    let summa = 0;
    for (let j = 0; j < maara; j++) {
        const silmaluku = Math.floor(Math.random() * 6) + 1;
        summa += silmaluku;
    }
    if (summa === tavoite) {
        osumat++;
    }
}
const todennakoisyys = (osumat / heitot) * 100;
document.querySelector("#target").textContent =
    "Todennäköisyys saada summa " + tavoite + ", " +
    maara + " nopalla, on " + todennakoisyys.toFixed(2) + "%";