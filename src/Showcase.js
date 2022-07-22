import bulbasaurImage from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";

  const pokeCharacteristics = {
    key: (
      <h2>
        Bulbasaur's type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>Grass</span>{" "}
        \ and one of their moves is{" "}
        <span style={{ backgroundColor: "white", color: "green" }}>
          Vine Whip
        </span>
      </h2>
    )
  };

  return (
    <div>
      <h1>{favPokemon} Showcase Component</h1>
      <img src={bulbasaurImage} alt={favPokemon} />
      {pokeCharacteristics.key}
    </div>
  );
}

export default Showcase;
