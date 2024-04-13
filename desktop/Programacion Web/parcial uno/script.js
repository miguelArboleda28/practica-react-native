// Función para obtener la lista de nombres de Pokémon
async function getPokemonNames() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1000"
    );
    const pokemonList = response.data.results;
    const selectElement = document.getElementById("pokemon-select");

    pokemonList.forEach((pokemon) => {
      const option = document.createElement("option");
      option.value = pokemon.name;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error("Error al obtener la lista de nombres de Pokémon:", error);
  }
}

// Función para obtener la información del Pokémon seleccionado
async function getPokemonInfo() {
  try {
    const selectedPokemon = document.getElementById("pokemon-select").value;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    );
    const pokemon = response.data;

    const pokemonInfo = `
            <p><strong>Nombre:</strong> ${pokemon.name}</p>
            <p><strong>Altura:</strong> ${pokemon.height}</p>
            <p><strong>Peso:</strong> ${pokemon.weight}</p>
            <p><strong>Tipo:</strong> ${pokemon.types
              .map((type) => type.type.name)
              .join(", ")}</p>
            <p><strong>Habilidades:</strong> ${pokemon.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}</p>
            <p><strong>Estadísticas:</strong> ${pokemon.stats
              .map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
              .join(", ")}</p>
        `;

    document.getElementById("pokemon-info").innerHTML = pokemonInfo;
  } catch (error) {
    console.error("Error al obtener la información del Pokémon:", error);
  }
}

// Llamada a la función para cargar la lista de nombres de Pokémon al cargar la página
getPokemonNames();
