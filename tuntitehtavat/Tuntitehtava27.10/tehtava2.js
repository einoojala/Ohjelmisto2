"use strict";
document.getElementById("calc").addEventListener("click", () => {
    let pythonInput = document.querySelector("#python");
    let projectInput = document.querySelector("#project");
    let mathInput = document.querySelector("#math");

    const python = parseInt(pythonInput.value);
    const project = parseInt(projectInput.value);
    const math = parseInt(mathInput.value);

    let keskiarvo = (python + project + math) / 3;

    let tekstikappale = document.querySelector("#result");
    tekstikappale.textContent = `Keskiarvo: ${keskiarvo}`;
});