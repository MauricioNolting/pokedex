import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import PokemonList from "../component/pokedex/PokemonList"
import HeaderPokedex from "../component/layout/HeaderPokedex"
import { paginateData } from "../utils/pagination"


const Pokedex = () => {
const trainerName = useSelector((store) => store.trainerName)
const [pokemons, setPokemons] = useState([])
const [pokemonName, setPokemonName] = useState("")
const [types, setTypes] = useState([])
const [currentType, setCurrentType] = useState("")
const [currentPage, setCurrentPage] = useState(1)

const pokemonsByName = pokemons.filter((pokemon) => pokemon.name.includes(pokemonName))
console.log(pokemonsByName)

const { itemsInCurrentPage, pagesInCurrentBlock, lastPage} = paginateData(pokemonsByName, currentPage)

const handleSubmit = (e) => {
    e.preventDefault()
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim())
}

// currentType al seleccionarlo
const handleChangeType = (e) => {
   setCurrentType(e.target.value)
}

const handleNextPage = () => {
    const newCurrentPage = currentPage + 1
    if (newCurrentPage <= lastPage) {
        setCurrentPage(newCurrentPage)
    }
}
const handlePreviustPage = () => {
    const newCurrentPage = currentPage - 1
    if (newCurrentPage >= 1) {
        setCurrentPage(newCurrentPage)
    }
}

console.log(currentType)

// trae todos los pokemons
useEffect(() => {
 axios
 .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
 .then(({data}) => setPokemons(data.results) )
 .catch((err) => console.log(err))
}, [])


// trae todos los tipos
useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/type")
    .then(({data}) => setTypes(data.results) )
    .catch((err) => console.log(err))
   }, [])
   
// solucion bug paginas al cambiar de tipo
   useEffect(() => {
 setCurrentPage(1)
   }, [currentType])
   
// trae todos los pokemons en base a un tipo
useEffect(() => {
    if(currentType !== "") {
        axios
        .get(`https://pokeapi.co/api/v2/type/${currentType}/`)
        .then(({data}) => {
          setPokemons( data.pokemon.map((pokemon) => pokemon.pokemon))
        })
        .catch((err) => console.log(err))
    } else {
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
        .then(({data}) => setPokemons(data.results) )
        .catch((err) => console.log(err))
    }
}, [currentType])


  return (
    <main>
        <HeaderPokedex/>
        <section>
            <p>
                <span className="text-red-500">Welcome {trainerName},</span> here you can find your favorite pokemon.
            </p>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="pokemonName"/>
                    <button>Search</button>
                </div>

                <select onChange={handleChangeType}>
                    <option value="">All pokemons</option>
                    {
                        types.map((type) => <option value={type.name} key={type?.name}>{type?.name}</option>)
                    }
                </select>
            </form>
        </section>

        <PokemonList pokemons={itemsInCurrentPage}/>

                    <ul className="flex justify-center gap-4 flex-wrap">
                      {
                        currentPage !== 1 &&
                          <li>
                          <button onClick={handlePreviustPage}>{"<"}</button>
                          </li>
                      }
                        {
                        pagesInCurrentBlock.map((page) => (<li key={page}><button onClick={() => setCurrentPage(page)} className={`p-2 text-white font-bold rounded-md ${currentPage === page ? "bg-red-500" : "bg-red-400"}`}>{page}</button></li>))
                        }
                        {
                            currentPage !== lastPage && <li>
                            <button onClick={handleNextPage}>{">"}</button>
                            </li>
                        }
                    </ul>


    </main>
  )
}
export default Pokedex