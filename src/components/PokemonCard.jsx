import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

const PokemonCard = ({ pokemon: { name, url } }) => {
  return (
    <div className='relative flex flex-col items-center  opacity-70 bg-gray-400 text-purple-600  font-semibold text-xl w-fit p-3 rounded-md hover:scale-110 ease duration-200 cursor-pointer'>
      <MdFavoriteBorder
        size={25}
        className='absolute top-2 right-2 fill-red-700 '
      />
      <div className='bg-gray-200 min-h-[150px] w-1/2 min-w-[150px] rounded-full border-current transition group-hover:border'>
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
          alt='Pokemon'
          className='w-full scale-125 object-cover'
          loading='lazy'
        />
      </div>
      <h1 className='capitalize'>{name}</h1>
    </div>
  )
}

export { PokemonCard }
