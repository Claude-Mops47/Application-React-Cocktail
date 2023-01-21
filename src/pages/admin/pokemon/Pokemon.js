import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { pokemonService } from "@/_services/pokemon.service";

const Pokemon = () => {
  // let navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const flag = useRef(false);

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

  return (
    <div className="Pokemon">
      Pokemon List
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>hp</th>
            <th>cp</th>
            <th>created</th>
            <th>picture</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <tr key={pokemon.id}>
              <td>{pokemon.id}</td>
              <td>{pokemon.name}</td>
              <td>{pokemon.hp}</td>
              <td>{pokemon.cp}</td>
              <td>{pokemon.created}</td>
              <td>
                <img src={pokemon.picture} alt="img"></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pokemon;
