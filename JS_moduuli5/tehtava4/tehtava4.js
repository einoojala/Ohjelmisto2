"use strict";
const tvForm = document.querySelector("#tv-form");
tvForm.addEventListener("submit", async function (evt) {
  evt.preventDefault();
  const value_from_input = document.querySelector("#query").value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
    const jsonData = await response.json();
    const resultsDiv = document.querySelector("#results");
    resultsDiv.innerHTML = "";
    for (const tvShow of jsonData) {
      const article = document.createElement("article");

      let image;
      if (tvShow.show.image) {
        image = tvShow.show.image.medium;
      } else {
        image = "https://placehold.co/210x295?text=Not%20Found";
      }
      article.innerHTML = `
        <h2>${tvShow.show.name}</h2>
        <a href="${tvShow.show.url}" target="_blank">Lisätiedot</a>
        <img src="${image}" alt="${tvShow.show.name}">
        <div>${tvShow.show.summary}</div>
      `;
      resultsDiv.appendChild(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});