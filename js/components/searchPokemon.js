import { renderPokemon } from "./renderPokemon.js";
import { displayMessage } from "./displayMessage.js";

const search = document.querySelector(".search");

export function searchPokemon(pokemon) {
  search.addEventListener("keyup", function (event) {
    const searchValue = event.target.value.trim();
    let filteredPokemon = [];

    pokemon.forEach((pokemonName) => {
      if (pokemonName.name.includes(searchValue)) {
        filteredPokemon.push(pokemonName);
      }
    });

    if (filteredPokemon.length > 0) {
      renderPokemon(filteredPokemon);
    } else {
      displayMessage("error", "No results..", ".result-container");
    }
  });
}
