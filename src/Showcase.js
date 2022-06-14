import pic from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    move: "Vine Whip",
    type: "Grass"
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={pic} alt="pic of thing"></img>
      <h2>
        {favPokemon}'s type is {pokeCharacteristics.type} and one of their moves
        is {pokeCharacteristics.move}
      </h2>
    </div>
  );
}

export default Showcase;
