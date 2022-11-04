
const Pokemon = ({ Pokemon })  =>{
  return (
    <div className="pokemon">
      <h3>{Pokemon.name}</h3>

      <img src={Pokemon.url} alt={Pokemon.name}></img>

      <div>{Pokemon.type}</div>
    </div>
  );
}



const PokemonTypes = PropTypes.exact({
    id: PropType.number,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string
})

Pokemon.propTypes = {
    pokemon: PokemonTypes,
}
  
