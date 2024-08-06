import { useEffect, useState } from "react"
import { Api } from "../assets/Api"
import Card from "./Card"



const PokemonContainer = () => {

    const [pokemon,setPokemon] = useState([])
    const [search,setSearch] = useState('')
    const [loading,isLoading] = useState(true)

    const pokemonData = async () => {
        try {
            const res = await fetch(Api)
            const data = await res.json()

            const findPokemon = data.results.map( async (pokemonDetail) => {
                const res = await fetch(pokemonDetail.url)
                const data = await res.json()
                return data
            } )

            const responsePokemon = await Promise.all(findPokemon)
            setPokemon(responsePokemon)
            isLoading(false)
            
        } catch (error) {
            console.log(error)
            isLoading(false)
        }
        
    }

    useEffect(() => {
        pokemonData()
    },[])


    // Search Section
    const searchData = pokemon.filter((curSerchPokemon) => {
        return (
            curSerchPokemon.name.toLowerCase().includes(search.toLowerCase())
        )
    } )

    if(loading){
        return(
            <div>Loading....</div>
        )
    }

  return (
    <div>
        <h1>Hello Pokemon List</h1>
        <form className="inputSearch">
            <input type="text" name="search" placeholder="Search Keyword" required value={search} onChange={(e) => setSearch(e.target.value) } />
        </form>
        <div className="wrapper">
            <div className="grid grid_four">
                {
                    searchData.map((curPokemon) => {
                        return(
                                <Card key={curPokemon} curPokemon={curPokemon} />
                        )
                    } )
                }
            </div>
        </div>
    </div>
  )
}

export default PokemonContainer