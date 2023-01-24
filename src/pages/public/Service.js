import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokemonService } from "@/_services/pokemon.service";

const Service = () => {
  const [pokemon, setPokemon] = useState([]);
  let { p_id } = useParams();

  useEffect(() => {
    pokemonService
      .getPokemon(p_id)
      .then((res) => {
        setPokemon(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      Service Run !
      <img src={pokemon.picture} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <h3>{pokemon.hp}</h3>
      <h3>{pokemon.cp}</h3>
      <p>{pokemon.types && pokemon.types.join(", ")}</p>
      <h3>{pokemon.created}</h3>
      {}
    </div>
  );
};

export default Service;
