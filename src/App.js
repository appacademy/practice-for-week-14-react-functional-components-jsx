import Showcase from "./Showcase";

function App() {
  let favPokemon = "Bulbasaur";
  return (
    <div>
      <h1>{favPokemon}'s</h1>
      <Showcase />
    </div>
  );
}

export default App;
