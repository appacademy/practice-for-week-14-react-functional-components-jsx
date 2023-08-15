import React from "react";
import bulbasaurImage from "./images/bulbasaur.jpg";

function Showcase() {
  let favPokemon = "Bulbasaur";
  let pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  const greenBackground = {
    backgroundColor: "green",
    color: "white",
    padding: "0.2em"
  };

  const whiteBackground = {
    backgroundColor: "white",
    color: "green",
    padding: "0.2em"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaurImage} alt="Bulbasaur" />
      <h2>
        Bulbasaur's type is{" "}
        <span style={greenBackground}>{pokeCharacteristics.type}</span> and one
        of their moves is
        <span style={whiteBackground}>{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;
