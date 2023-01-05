import bulbasaur from "./images/bulbasaur.jpg";
function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = { type: "Grass", move: "Vine Whip" };
  return (
    <div className="background">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        src={bulbasaur}
        alt="bulbasaur"
        style={{ width: 200, height: 200, borderRadius: 100 }}
        className="bulbasaur"
      />
      <h2>
        Bulbasur's type is{" "}
        <span className="type">{pokeCharacteristics.type}</span> and one of
        their moves is <span className="moves">{pokeCharacteristics.move}</span>
        .
      </h2>
    </div>
  );
}
export default Showcase;
