const bgByType ={ 
normal: "bg-gradient-to-t from-[#BC6B7C] to-[#7C3F4C]",
fighting: "bg-gradient-to-t from-orange-800 via-red-500 to-red-400",
flying: "bg-gradient-to-t from-yellow-300 to-yellow-700",
poison: "bg-gradient-to-t from-[#CE9BFF] to-[#5B3184]",
ground: "bg-gradient-to-t from-[#D69638] to-[#895C1A]",
rock: "bg-gradient-to-t from-[#D3D3D3] to-[#8D8D94]",
bug: "bg-gradient-to-t from-[#AAFFA8] to-[#3BB039]",
ghost: "bg-gradient-to-t from-[#454AA8] to-[#323569]",
steel: "bg-gradient-to-t from-[#A8A8A8] to-[#728881]",
fire: "bg-gradient-to-t from-orange-300 to-orange-600",
water: "bg-gradient-to-t from-blue-300 to-blue-600",
grass: "bg-gradient-to-t from-green-300 to-green-600",
electric: "bg-gradient-to-t from-[#7075D9] to-[#2B319B]",
psychic: "bg-gradient-to-t from-purple-400 to-purple-700",
ice: "bg-gradient-to-t from-[#BDEBFE] to-[#64CBF5]",
dragon: "bg-gradient-to-t from-[#A2BEC1] to-[#56A4AE]",
dark: "bg-gradient-to-t from-[#5A5E5D] to-[#0D1211]",
fairy: "bg-gradient-to-t from-[#CD7D98] to-[#C23867]",
unknown: "",
shadow: "",
}
// #62DB60, #3BB039, #AAFFA8
// bg-gradient-to-t from-[] to-[]
const borderByType = { 
    normal: "border-[#7C3F4C]",
    fighting: "border-[#96402A]",
    flying: "",
    poison: "border-[#5B3184]",
    ground: "border-[#895C1A]",
    rock: "border-[#8D8D94]",
    bug: "border-[#3BB039]",
    ghost: "border-[#323569]",
    steel: "border-[#728881]",
    fire: "border-orange-600",
    water: "border-blue-600",
    grass: "border-green-600",
    electric: "border-[#2B319B]",
    psychic: "border-purple-700",
    ice: "border-[#64CBF5]",
    dragon: "border-[#56A4AE]",
    dark: "border-[#0D1211]",
    fairy: "border-[#C23867]",
    unknown: "",
    shadow: "",

    }
    

    const hoverBorderByType ={ 
        normal: "hover:border-[#c05d7291]",
        fighting: "hover:border-[#ff402f99]",
        flying: "",
        poison: "hover:border-[#5b318485]",
        ground: "hover:border-[#895d1a7a]",
        rock: "hover:border-[#8d8d949a]",
        bug: "hover:border-[#3bb03982]",
        ghost: "hover:border-[#3235699a]",
        steel: "hover:border-[#7288819e]",
        fire: "hover:border-orange-400",
        water: "hover:border-blue-400",
        grass: "hover:border-green-400",
        electric: "hover:border-[#2b319ba1]",
        psychic: "hover:border-purple-400",
        ice: "hover:border-[#64ccf583]",
        dragon: "hover:border-[#56a4ae75]",
        dark: "hover:border-[#0d12119a]",
        fairy: "hover:border-[#c238668a]",
        unknown: "",
        shadow: "",
    
        }

export {
    bgByType,
    borderByType,
    hoverBorderByType
}