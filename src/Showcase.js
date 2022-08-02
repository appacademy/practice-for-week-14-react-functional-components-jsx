import { findByLabelText } from "@testing-library/react";
import bulbImage from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbImage} alt={favPokemon} />
      <h2>
        {favPokemon}'s type is{" "}
        <span className="type">{pokeCharacteristics.type}</span> and one of
        their moves is <span className="move">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
