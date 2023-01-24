import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <section>
      <Link to={`/service/${pokemon.id}`}>
        <div className="card-container">
          <div className="card">
            <img src={pokemon.picture} alt={pokemon.name} />
            <div className="content">
              <h3>{pokemon.name}</h3>
              <p>CP : {pokemon.cp}</p>
              <p>HP : {pokemon.hp}</p>
              <p>CP : {pokemon.cp}</p>
              <p>TYPE : {pokemon.types.join(", ")}</p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;
