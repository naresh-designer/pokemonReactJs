import { NavLink } from "react-router-dom"




const Card = ({curPokemon}) => {
  return (
    <>
    <NavLink to={`/Detail/${curPokemon.id}`} >
        <div className="card" >
            <div className="card_children">
            <figure>
                <img src={curPokemon.sprites.other.dream_world.front_default} alt={curPokemon.name} className="card__img" />
            </figure>
            <h4 className="card__heading" >{curPokemon.name}</h4>
            <p>Height: {curPokemon.height}</p>
            <p>Weight: {curPokemon.weight}</p>
            <p>Abilities: {curPokemon.abilities[0].ability.name}</p>
            <p>Pokemon Types: {curPokemon.types.map((curType) => curType.type.name).join(', ')}</p>
            </div>

        </div>
        </NavLink>
        </>
  )
}

export default Card