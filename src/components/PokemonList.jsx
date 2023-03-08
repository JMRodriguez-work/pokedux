import React from 'react'
import { PokemonCard } from './PokemonCard'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='mx-4 mt-2 flex max-w-[1700px] flex-wrap items-center justify-center gap-10 overflow-hidden py-5 transition-colors duration-500 '>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  )
}

export { PokemonList }
