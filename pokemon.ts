async function fetchKantoPokemon() {
  await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon: any) {
        fetchPokemonData(pokemon);
      });
    });
}
async function fetchPokemonData(pokemon: any) {
  let url = pokemon.url; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
  await fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      console.log(pokeData);
      (
        document.getElementById("main") as HTMLElement
      ).innerHTML += `<div class="pokemonDiv ${pokeData.types[0].type.name}"><h3>${pokeData.name}</h3><img src="${pokeData.sprites.other.home.front_default}" width=100 height=100 /></div>`;
    });
}

fetchKantoPokemon();
