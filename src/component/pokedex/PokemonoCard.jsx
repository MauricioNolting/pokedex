import axios from "axios"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { bgByType, borderByType, hoverBorderByType } from "../../constants/pokemons"


const PokemonoCard = ({pokemonUrl}) => {



    const [pokemon, setPokemon] = useState([])
    const colorType = pokemon?.types?.[0].type.name
    const types = pokemon?.types?.map((type) => type.type.name).join(" / ")
    

    useEffect(() => {
        axios
        .get(pokemonUrl)
        .then(({data}) => setPokemon(data) )
        .catch((err) => console.log(err))
       }, [])


  return (
   <Link to={`/pokedex/${pokemon?.id}`} className={` capitalize border-8 rounded-lg text-center ${borderByType[colorType]} transition-all ${hoverBorderByType[colorType]} `}>
        <header className={`${bgByType[colorType]} h-[140px]`}></header>
        <div className="relative pt-10">
            <div className="absolute w-full -translate-y-[95%] ">
                <img className="max-w-[180px] mx-auto" src={pokemon?.sprites?.other["official-artwork"].front_default} alt="" />
            </div>

            <h3 className="font-semibold text-xl">{pokemon?.name}</h3>
            <span className="text-sm font-semibold">{types}</span>
            <h5 className="font-emibold text-slate-400 text-xs mb-2">Type</h5>
            <ul className="grid grid-cols-2 gap-4">
                {
                pokemon?.stats?.slice(0, 4).map((stat) => 
                               ( 
                               <li className="grid m-1" key={stat.stat.name}>
                                    <h6 className="font semi-bold">{stat.stat.name}</h6>
                                    <hr />
                                    <span className="font-bold">{stat.base_stat}</span>
                                </li> 
                                ))
                }
            </ul>
        </div>
   </Link>
  )
}
export default PokemonoCard

