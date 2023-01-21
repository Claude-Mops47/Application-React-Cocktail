import Axios from "./caller.service";

let getAllPokemons = () => {
  return Axios.get("/api/pokemons");
};

let getPokemon = (uid) => {
  return Axios.get("/api/pokemon/" + uid);
};

export const pokemonService = {
  getAllPokemons,
  getPokemon,
};
