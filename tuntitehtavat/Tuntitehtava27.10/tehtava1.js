"use strict";
document.getElementById("calc").addEventListener("click", () => {
    let nameInput = document.querySelector("#name");
    let gradeInput = document.querySelector("#grade");
   
    const name = nameInput.value;
    const grade = gradeInput.value;
    console.log(name + ": " + grade);
});