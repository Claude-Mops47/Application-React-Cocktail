// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import { pokemonService } from "@/_services";

const Pokemon = () => {
  // let navigate = useNavigate();
  // const flag = useRef(false);
  // const [pokemons, setPokemons] = useState([]);

  const { isLoading, data } = useQuery("pokemons", () =>
    pokemonService.getAllPokemons()
  );
  const pokemons = data || { data: [] };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // useEffect stop double appel
  // useEffect(() => {
  //   if (flag.current === false) {
  //     pokemonService
  //       .getAllPokemons()
  //       .then((res) => {
  //         setPokemons(res.data.data);
  //         console.log(res.data.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  //   return () => (flag.current = true);
  // }, []);

  return (
    <div className="Pokemon">
      Pokemon List
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>hp</th>
            <th>cp</th>
            <th>picture</th>
            <th>created</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.data.map((pokemon) => (
            <tr key={pokemon.id}>
              <td>{pokemon.id}</td>
              <td>{pokemon.name}</td>
              <td>{pokemon.hp}</td>
              <td>{pokemon.cp}</td>
              <td>
                <img src={pokemon.picture} alt="img"></img>
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
