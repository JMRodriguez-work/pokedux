import React from 'react'
import { PokemonCard } from './PokemonCard'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='mx-4 mt-2 flex max-w-[1700px] flex-wrap items-center justify-center gap-10 overflow-hidden py-5 ease duration-500 '>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.sprites.other['official-artwork'].front_default} types={pokemon.types} />
      ))}
    </div>
  )
}

export { PokemonList }
