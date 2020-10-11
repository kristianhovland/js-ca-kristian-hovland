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

  const favButtons = document.querySelectorAll(".result i");

  favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;

    const currentFavs = getExistingFavs();

    const pokemonExists = currentFavs.find(function (fav) {
      return fav.id === id;
    });

    if (!pokemonExists === undefined) {
      const pokemon = { id: id, name: name };
      currentFavs.push(pokemon);
      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveFavs(newFavs);
    }

    console.log("pokemonExists", pokemonExists);

    const pokemon = { id: id, name: name };

    currentFavs.push(pokemon);

    saveFavs(currentFavs);
  }

  function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
  }
}
