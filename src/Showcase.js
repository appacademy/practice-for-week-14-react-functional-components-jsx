import bulbasaur from './images/bulbasaur.jpg';

function Showcase() {
    
  const favPokemon = 'Bulbasaur'
  const pokeCharacteristics = {
  type: "Grass",
  move: "Vine Whipp"
  }

  return (
    <div className="showcase">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaur} />
      <h2>Bulbasaur's type is <span style={{backgroundColor: 'green', color:'white'}}>{pokeCharacteristics.type}</span> and one of their moves is <span style={{backgroundColor: 'white', color: 'green'}}>{pokeCharacteristics.move}</span></h2>
    </div>
  );
}

export default Showcase;