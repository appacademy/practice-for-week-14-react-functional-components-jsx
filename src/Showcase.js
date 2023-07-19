import BulbasaurImg from "./images/bulbasaur.jpg";

function Showcase() {
  let favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine whip"
  };

  return (
    <div className="main-wrapper">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        style={{ height: 500, width: 500, padding: 20, borderRadius: "50%" }}
        src={BulbasaurImg}
        alt="Bulbasaur"
      ></img>
      <h2>
        <span className="type">{pokeCharacteristics.type}</span>
      </h2>
      <h2>
        <span className="move">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
