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
        <section className="m-2 border-r-2 border-l-2 border-t-2 border-black rounded-2xl italic text-center grid gap-4 max-w-[700px] mx-auto" >
            <p className="">
                <span className="text-red-500 text-center">Welcome {trainerName},</span> here you can find your favorite pokemon.
            </p>
            
            <form onSubmit={handleSubmit} className="grid gap-3 justify-center">
                <div className="">
                    <input className="border-2 border-r-0 px-2 py-1 rounded-xl border-red-400" type="text" name="pokemonName"/>
                    <button className="border-2 border-l-0 px-2 py-1 rounded-xl border-slate-800">Search</button>
                </div>

                <select onChange={handleChangeType} className="w-[250px] h-[40px] px-3 border-2 bg-red-500 rounded-full text-white font-semibold capitalize hover:bg-red-600 cursor-pointer">
                    <option value="" className="text-center">All pokemons</option>
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
                          <button className="bg-red-500 rounded-full w-8 h-8 hover:bg-red-700 border-2 border-black text-center" onClick={handlePreviustPage}>{"<"}</button>
                          </li>
                      }
                        {
                        pagesInCurrentBlock.map((page) => (<li key={page}><button onClick={() => setCurrentPage(page)} className={`p-2 text-white font-bold rounded-tl-none rounded-lg rounded-br-none hover:bg-red-500 border-2 border-black ${currentPage === page ? "bg-red-500" : "bg-red-400"}`}>{page}</button></li>))
                        }
                        {
                            currentPage !== lastPage && <li className="h-full">
                            <button className="bg-red-500 rounded-full w-8 h-8 hover:bg-red-700 border-2 border-black text-center" onClick={handleNextPage}>{">"}</button>
                            </li>
                        }
                    </ul>


    </main>
  )
}
export default Pokedex