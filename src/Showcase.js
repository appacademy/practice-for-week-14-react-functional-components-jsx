import picture from "./images/bulbasaur.jpg";
import "./index.css";
import "./Showcase.css";

const Showcase = () => {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = { type: "Grass", move: "Vine Whip" };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img alt="bulbasaur" src={picture} />
      <h2>
        <span className="type">Type: {pokeCharacteristics.type}</span>
        <span className="move">Move: {pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
};

export default Showcase;
