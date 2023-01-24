import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useQuery } from "react-query";

import { pokemonService } from "@/_services";
import { Link } from "react-router-dom";

import "@/components/styles/pages_admin.css";

const Pokemon = () => {
  // let navigate = useNavigate();
  const flag = useRef(false);
  const [pokemons, setPokemons] = useState([]);

  // const { isLoading, data } = useQuery("pokemons", () =>
  //   pokemonService.getAllPokemons()
  // );
  // const pokemons = data;
  // console.log(pokemons);

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  //useEffect stop double appel
  useEffect(() => {
    if (flag.current === false) {
      pokemonService
        .getAllPokemons()
        .then((res) => {
          setPokemons(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
  }, []);

  const delPokemon = (pokemonID) => {
    console.log(pokemonID);
    pokemonService
      .deletePokemon(pokemonID)
      .then((res) => {
        setPokemons((current) =>
          current.filter((pokemon) => pokemon.id !== pokemonID)
        );
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pokemon_list">
      Pokemon List
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Name</th>
            <th>HP</th>
            <th>CP</th>
            <th>Type</th>
            <th>Picture</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <tr key={pokemon.id}>
              <td>
                <span
                  className="del_btn"
                  onClick={() => delPokemon(pokemon.id)}
                >
                  X
                </span>
              </td>
              <td>
                <Link to={`../edit/${pokemon.id}`}>{pokemon.id}</Link>
              </td>
              <td>{pokemon.name}</td>
              <td>{pokemon.hp}</td>
              <td>{pokemon.cp}</td>
              <td>{pokemon.types.join(", ")}</td>
              <td>
                <img src={pokemon.picture} alt={pokemon.name}></img>
              </td>
              <td>{pokemon.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pokemon;
