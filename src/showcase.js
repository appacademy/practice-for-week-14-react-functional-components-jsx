import image from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div className="showcase">
      <h1>{favPokemon}'s Showcase Component</h1>

      <img src={image} alt={favPokemon}></img>

      <h2>
        {" "}
        Bulbasaur's type is{" "}
        <span className="type">{pokeCharacteristics.type}</span> and one of
        their moves is <span className="move">{pokeCharacteristics.move}</span>{" "}
      </h2>
    </div>
  );
}

export default Showcase;
