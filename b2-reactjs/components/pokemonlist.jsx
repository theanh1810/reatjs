const PokemonList = ({ pokemons}) => {
    const list = pokemons.map((pokemon) => <Pokemon pokemons={pokemon} />)
    return <div className="pokemon-list">{list}</div>
}


PokemonList.propTypes = {
    pokemons : PropTypes.arrayOf(PokemonTypes)
}

