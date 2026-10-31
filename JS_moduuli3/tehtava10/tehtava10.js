"use strict";
let ehdokkaat = [];
const ehdokkaidenMaara = Number(prompt("Ehdokkainen määrä: "));
for (let i = 0; i < ehdokkaidenMaara; i++) {
    let nimi = prompt("Ehdokkaan " + (i + 1) + " nimi");

    let ehdokas = {
        name: nimi,
        votes: 0
    };
    ehdokkaat.push(ehdokas);
}
const aanestajienMaara = Number(prompt("Äänestäjie määrä: "));
for (let i = 0; i < aanestajienMaara; i++) {
    let aanestys = prompt("Ketä äänestät?");

    for (let j = 0; j < ehdokkaat.length; j++) {
        if (aanestys === ehdokkaat[j].name) {
            ehdokkaat[j].votes++;
        }
    }
}
ehdokkaat.sort((a, b) => {
    return b.votes - a.votes;
});
if (ehdokkaat.length > 1 && ehdokkaat[0].votes === ehdokkaat[1].votes) {
    console.log("Äänestys päättyi tasan!");
} else {
    console.log("Voittaja on " + ehdokkaat[0].name + " " + ehdokkaat[0].votes + " äänellä.");
}
console.log("Tulokset:");
for (let i = 0; i < ehdokkaat.length; i++) {
    console.log(ehdokkaat[i].name + ": " + ehdokkaat[i].votes + " ääntä");
}