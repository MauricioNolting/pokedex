/* eslint-disable react/prop-types */
import PokemonoCard from "./PokemonoCard"

const PokemonList = ({pokemons, }) => {
  return (
    <section className="grid max-w-[1200px] mx-auto gap-6 justify-center grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] py-10">
        {
            pokemons.map((pokemon) => <PokemonoCard pokemonUrl={pokemon.url} key={pokemon.url}/>) 
        }
    </section>
  )
}
export default PokemonList