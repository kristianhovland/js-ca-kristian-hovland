import { getExistingFavs } from "./utils.favFunctions.js";

const favourites = getExistingFavs();

const resultsContainer = document.querySelector(".result-container");

if (favourites.length === 0) {
  resultsContainer.innerHTML = "You have not selected any favourite cards yet.";
}

favourites.forEach((favourite) => {
  resultsContainer.innerHTML += `<div class="pokemon">
                                    <h4>${favourite.name}</h4>
                                    <i class"fa fa-heart"></i>
                                    </div>`;
});
