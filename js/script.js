import { displayMessage } from "./components/displayMessage.js";
import { renderPokemon } from "./components/renderPokemon.js";
import { searchPokemon } from "./components/searchPokemon.js";

const url = "https://api.pokemontcg.io/v1/cards";

async function getPokemon() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    const pokemon = results.cards;
    console.log(results.cards);
    renderPokemon(pokemon);
    searchPokemon(pokemon);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".results-container");
  }
}

getPokemon();
