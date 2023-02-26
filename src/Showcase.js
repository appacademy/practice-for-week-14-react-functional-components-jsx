import img from "./images/bulbasaur.jpg";

function Showcase() {
  let favPokemon = "Pikachu";
  let pokeCharacteristics = {
    type: "grass",
    move: "fly"
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        style={{ height: 200, borderRadius: 100 }}
        src={img}
        alt={favPokemon}
      />
      <h2>
        {favPokemon}'s type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>grass</span>{" "}
        and one of its move is{" "}
        <span style={{ backgroundColor: "white", color: "green" }}>fly</span>
      </h2>
    </div>
  );
}

export default Showcase;
