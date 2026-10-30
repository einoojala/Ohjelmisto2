"use strict";
let nimet = [];
for (let i = 0; i < 5; i++) {
    let nimi = prompt("Anna nimi:");
    nimet.push(nimi);
}
document.querySelector("#nimet").textContent = nimet.join(", ");

let vikaNimi = nimet.pop();
document.querySelector("#viimeinen").textContent = vikaNimi;
nimet.push(vikaNimi);

nimet.sort();
document.querySelector("#ensimmainen").textContent = nimet[0];

nimet.shift();
document.querySelector("#poistettu").textContent = nimet.join(", ");