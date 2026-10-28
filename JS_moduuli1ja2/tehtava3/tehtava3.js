"use strict";
let luku1str = prompt("1 luku.");
let luku2str = prompt("2 luku.");
let luku3str = prompt("3 luku.");

let luku1 = parseFloat(luku1str);
let luku2 = parseFloat(luku2str);
let luku3 = parseFloat(luku3str);

let summa = luku1 + luku2 + luku3;
let tulo = luku1 * luku2 * luku3;
let keskiarvo = summa / 3;

document.querySelector("#target").innerHTML =
    "Summa: " + summa + "<br>" +
    "Tulo: " + tulo + "<br>" +
    "Keskiarvo: " + keskiarvo + "<br>";