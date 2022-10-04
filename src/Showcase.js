import image from "./images/bulbasaur.jpg";
import "./index.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div
      className="background"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 40
      }}
    >
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        style={{ height: 500, width: 500, padding: 20, borderRadius: "50%" }}
        src={image}
        alt="bulbasaur"
      ></img>
      <h2>
        {favPokemon}'s type is {pokeCharacteristics.type} and one of their moves
        is {pokeCharacteristics.move}.{" "}
      </h2>
    </div>
  );
}

export default Showcase;
