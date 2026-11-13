"use strict";
const tvForm = document.querySelector("#tv-form");
tvForm.addEventListener("submit", async function (evt) {
    evt.preventDefault();
    const value_from_input = document.querySelector("#query").value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    }
});