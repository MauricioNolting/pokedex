import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import HeaderPokedex from "../component/layout/HeaderPokedex"
import { bgByType } from "../constants/pokemons"

const PokemonDetail = () => {

  const [pokemon, setPokemon] = useState(null)

  const { pokemonId } = useParams()

  const colorType = pokemon?.types?.[0].type.name

   const getPorcentStat = (statValue) => {
     const MAX_STAT_VALUE = 255
     const percentStat = ((statValue * 100) / MAX_STAT_VALUE).toFixed(1)
     return `${percentStat}%`
   }
  
useEffect(() => {
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  .then(({data}) => setPokemon(data) )
  .catch((err) => console.log(err))
}, [])
  axios

  return (
    <main className="text-center capitalize">
      <HeaderPokedex/>
        <article className={`max-w-[500px] py-10 mx-auto border-4 rounded-xl border-black my-4 ${bgByType[colorType]}`}>
          <header className="" >
          <img className="max-w-[200px] mx-auto" src={pokemon?.sprites?.other["official-artwork"].front_default} alt="" />
          </header>
          <h3 className={` font-bold ${bgByType[colorType] === "bg-gradient-to-t from-[#5A5E5D] to-[#0D1211]" ? "text-white" : "text-black"}`}>#{pokemon?.id}</h3>
          <h2 className={`font-bold uppercase italic ${bgByType[colorType] === "bg-gradient-to-t from-[#5A5E5D] to-[#0D1211]" ? "text-white" : "text-black"}`}>{pokemon?.name}</h2>

          {/* hacer lo de las habilidades */}

          <section className={`${bgByType[colorType] === "bg-gradient-to-t from-[#5A5E5D] to-[#0D1211]" || bgByType[colorType] === "bg-gradient-to-t from-[#BC6B7C] to-[#7C3F4C]" ? "text-white" : "text-black"} bg-[#fff0] font-semibold px-3`}>
            <h3 className="text-start">Stats</h3>
         <ul className="grid gap-4">
             {
              pokemon?.stats?.map((stat) => <li className="capitalize" key={stat.stat.name}>
                <div className="flex justify-between items-center" >
                <h5>{stat.stat.name}</h5>
                  <span>{stat.base_stat}/255</span>
                </div>
                 
                  {/* total bar */}
                  <div className="bg-slate-200 rounded-md h-6">
                    {/* bar progress */}
                    <div style={{width: getPorcentStat(stat?.base_stat)}} className="bg-yellow-400  rounded-md w-10 h-6 border-2 border-black rounded-r-none"></div>
                  </div>
               
              </li>)
             }
          </ul>
          </section>
        </article>


    </main>
  )
}
export default PokemonDetail