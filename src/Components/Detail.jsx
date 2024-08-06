import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Api } from "../assets/Api"


const Detail = () => {

    const [pokemonShow,setPokemonShow] = useState([])

    const {id} = useParams()

    const pokemonDeatil = async (apiUrl) => {
        try {
            const res = await fetch(apiUrl)
            const data = await res.json()

            const findPokemonDetail = data.results.map( async (pokemonDetails) => {
                const res = await fetch(pokemonDetails.url)
                const data = await res.json()
                return data
            } )

            const responsePokemonDetail = await Promise.all(findPokemonDetail)
            setPokemonShow(responsePokemonDetail)
            // console.log(responsePokemonDetail)
            
        } catch (error) {
            console.log(error)
        }

        
        
    }

    useEffect(() => {
        pokemonDeatil(`${Api}?id=${id}`)
    },[])
  return (
    <>
    <div>
        {pokemonShow.name}
    </div>
    <div>
        {pokemonShow.height}
    </div>
    </>
  )
}

export default Detail