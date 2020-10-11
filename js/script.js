import { displayMessage } from "./components/displayMessage.js";
import { renderPokemon } from "./components/renderPokemon.js";
import { searchPokemon } from "./components/searchPokemon.js";

const url = "https://api.pokemontcg.io/v1/cards";

async function getPokemon() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    const pokemon = results.cards;

    renderPokemon(pokemon);
    searchPokemon(pokemon);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".results-container");
  }
}

getPokemon();

const favButtons = document.querySelectorAll(".result");

favButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  this.classList.toggle("fa");
  this.classList.toggle("far");

  const name = this.dataset.id;
  const name = this.dataset.name;

  const currentFavs = getExistingFavs();
}

function getExistingFavs() {
  const favs = localStorage.getItem("favourites");

  if (favs === null) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}

function saveFavs(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}
