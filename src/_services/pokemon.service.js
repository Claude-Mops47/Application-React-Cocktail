import Axios from "./caller.service";

let getAllPokemons = async () => {
  const { data } = await Axios.get("/api/pokemons");
  return data;
};

let getPokemon = (uid) => {
  return Axios.get("/api/pokemon/" + uid);
};

export const pokemonService = {
  getAllPokemons,
  getPokemon,
};
