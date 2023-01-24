import React, { useEffect, useRef, useState } from "react";
import { pokemonService } from "@/_services";
import Card from "@/components/public/Card";
import "@/components/styles/pages_public.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const flag = useRef(false);

  useEffect(() => {
    if (flag.current === false) {
      pokemonService
        .getAllPokemons()
        .then((res) => {
          setPokemons(res.data.data);
          setLoad(true);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
  }, []);

  if (!isLoad) {
    return <div className="loader"></div>;
  }

  return (
    <div className="pokemon_home">
      {pokemons.map((data, id) => (
        <Card key={id} pokemon={data} />
      ))}
    </div>
  );
};

export default Home;
