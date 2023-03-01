import { bulbasaur } from "../src/images/bulbasaur.jpg";
const favPokemon = "Bulbasaur";
const pokeCharacteristics = { type: "grass", move: "Vine Whip" };
function Showcase() {
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src="./images/bulbasaur.jpg" alt="Bulbasaur"></img>
      <h2>
        Bulbasaur's type is <span class="type">{pokeCharacteristics.type}</span>{" "}
        and one of their moves is{" "}
        <span class="move">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
