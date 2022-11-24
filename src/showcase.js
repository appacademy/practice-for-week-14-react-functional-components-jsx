import React from 'react';
import bulbasaur from './images/bulbasaur.jpg';

function Showcase() {
    
  const favPokemon = "Bulbasaur";
  
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip",
  };
  
  
  
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaur} alt={favPokemon} />
      <h2>
        {favPokemon}'s type is <span style={{ backgroundColor: '#009f44', color: '#ffffff'}}>{pokeCharacteristics.type}</span> and one of their moves
        is <span style={{ backgroundColor: '#ffffff', color: '#009f44'}}>{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
