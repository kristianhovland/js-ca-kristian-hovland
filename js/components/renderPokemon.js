export function renderPokemon(pokemonToRender) {
  const resultsContainer = document.querySelector(".result-container");
  resultsContainer.innerHTML = "";

  pokemonToRender.forEach(function (pokemon) {
    resultsContainer.innerHTML += `<div class="result">
    <h2>${pokemon.name}</h2>
    <h3>${pokemon.types}</h3>
    <h4>${pokemon.set}</h4>
    <i class="far fa-heart" data-id="${pokemon.name}" data-name="${pokemon.name}"></i>
    </div>`;
  });
}
