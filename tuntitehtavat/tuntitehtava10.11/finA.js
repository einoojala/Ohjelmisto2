async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const response_data = await response.json();
            return response_data;
        } else {
            throw new Error(`HTTP-virhe! Tilakoodi: ${response.status}`);
        }
    } catch (error) {
        console.log(`Virhe datan hakemisessa ${error}`);
    }
}
async function fetchForms(url, pokemonText) {
    try {
        const data = await fetchData(url);
        let formList = document.createElement("ul");
        for (let form of data.forms) {
            let formItem = document.createElement("li");
            formItem.textContent = form.name;
            formList.appendChild(formItem);
        }
        pokemonText.appendChild(formList);
    } catch (error) {
        console.log(`Virhe muotojen hakemisessa ${error}`);
    }
}
async function createPokemonView() {
    const pokemonData = await fetchData("https://pokeapi.co/api/v2/pokemon");
    const pokemonDiv = document.querySelector("#poke-content");
    for (let pokemon of pokemonData.results) {
        let pokemonText = document.createElement("p");
        pokemonText.textContent = pokemon.name;
        pokemonText.style.cursor = "pointer";
        pokemonText.addEventListener("click", function() {
            if (pokemonText.querySelector("ul")) {
                return;
            }
            fetchForms(pokemon.url, pokemonText);
        });
        pokemonDiv.appendChild(pokemonText);
    }
}
createPokemonView();