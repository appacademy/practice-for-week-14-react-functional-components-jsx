import bulbasaur from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = { type: "Grass", move: "Vine Whip" };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaur} alt="bulbasaur" />
      <h2>
        <span> {pokeCharacteristics.type} </span>
        <span> {pokeCharacteristics.move} </span>
      </h2>
    </div>
  );
}

export default Showcase;
