"use strict";
const jokeForm = document.querySelector("#joke-form");
jokeForm.addEventListener("submit", async function (evt) {
  evt.preventDefault();
  const value_from_input = document.querySelector("#query").value;

  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
    const jsonData = await response.json();
    const resultsDiv = document.querySelector("#results");
    resultsDiv.innerHTML = "";
    for (const joke of jsonData.result) {
      const article = document.createElement("article");
      article.innerHTML = `
        <p>${joke.value}</p>
      `;
      resultsDiv.appendChild(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});
