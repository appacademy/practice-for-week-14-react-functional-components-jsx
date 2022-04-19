import picture from "./images/bulbasaur.jpg";

const Showcase = () => {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = { type: "Grass", move: "Vine Whip" };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img alt="bulbasaur" src={picture} />
      <h2>
        <span style={{ backgroundColor: "green", color: "white" }}>
          Type: {pokeCharacteristics.type}
        </span>
        <span style={{ backgroundColor: "white", color: "green" }}>
          Move: {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
};

export default Showcase;
