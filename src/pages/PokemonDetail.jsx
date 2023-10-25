import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import HeaderPokedex from "../component/layout/HeaderPokedex"

const PokemonDetail = () => {

  const [pokemon, setPokemon] = useState(null)

  const { pokemonId } = useParams()

   const getPorcentStat = (statValue) => {
     const MAX_STAT_VALUE = 255
     const percentStat = ((statValue * 100) / MAX_STAT_VALUE).toFixed(1)
     return `${percentStat}%`
   }
  console.log(pokemonId)
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
        <article className="max-w-[500px] py-10 mx-auto">
          <header>
          <img src={pokemon?.sprites?.other["official-artwork"].front_default} alt="" />
          </header>
          <h3>#{pokemon?.id}</h3>
          <h2>{pokemon?.name}</h2>

          {/* hacer lo de las habilidades */}

          <section>
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
                    <div style={{width: getPorcentStat(stat?.base_stat)}} className="bg-yellow-400  rounded-md w-10 h-6"></div>
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