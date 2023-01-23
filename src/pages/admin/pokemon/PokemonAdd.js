import React, { useState } from "react";
import { pokemonService } from "@/_services";
import { useNavigate } from "react-router-dom";

const PokemonAdd = () => {
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  // Handle modification dans le formulaire
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "types") {
      setPokemon({
        ...pokemon,
        types: value.split(","),
      });
    } else {
      setPokemon({ ...pokemon, [name]: value });
    }
  };

  // Soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(pokemon);
    pokemonService
      .addPokemon(pokemon)
      .then(navigate("../index"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="PokemonAdd">
      Pokemon Add
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={pokemon.name || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="hp">HP</label>
          <input
            type="text"
            name="hp"
            value={pokemon.hp || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="cp">CP</label>
          <input
            type="text"
            name="cp"
            value={pokemon.cp || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="picture">Picture</label>
          <input
            type="text"
            name="picture"
            value={pokemon.picture || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="types">Type</label>
          <input
            type="text"
            name="types"
            value={pokemon.types || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <button>Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default PokemonAdd;
