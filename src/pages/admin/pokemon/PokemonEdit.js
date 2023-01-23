import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pokemonService } from "@/_services";
// import { useQuery } from "react-query";

const PokemonEdit = () => {
  const [pokemon, setPokemon] = useState([]);
  const flag = useRef(false);
  const navigate = useNavigate();

  // Recuperation Id Pokemon
  const { uid } = useParams();
  // console.log(uid);

  // const { isLoading, data } = useQuery("pokemon", () =>
  //   pokemonService.getPokemon(uid)
  // );
  // const pokemon = data;
  // console.log(pokemon);

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  // Handle modification dans le formulaire
  const onChange = (e) => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
  };

  // Soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(pokemon);
    pokemonService
      .updatePokemon(pokemon)
      .then(navigate("../index"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (flag.current === false) {
      pokemonService
        .getPokemon(uid)
        .then((res) => {
          setPokemon(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="PokemonEdit">
      Pokemon Edit
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
          <label htmlFor="cp">CP</label>
          <input
            type="text"
            name="cp"
            value={pokemon.cp || ""}
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
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            value={pokemon.types || ""}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <button>Modifier</button>
        </div>
      </form>
    </div>
  );
};

export default PokemonEdit;
