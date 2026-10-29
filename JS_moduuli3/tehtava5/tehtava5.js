"use strict";
let luvut = [];
let luku = Number(prompt("Anna luku:"));

while (!luvut.includes(luku)) {
    luvut.push(luku);
    luku = Number(prompt("Anna luku:"));
}
alert("Luku on jo annettu.");
luvut.sort((a, b) => a - b);
for (let i = 0; i < luvut.length; i++) {
    console.log(luvut[i]);
}