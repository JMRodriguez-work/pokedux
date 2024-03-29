/* eslint-disable camelcase */
import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../actions'

const PokemonCard = ({ name, image, types, isFavorite, id }) => {
  const dispatch = useDispatch()
  const pokemonTypes = types.map(item => item.type.name)
  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }

  return (
    <div className='relative flex flex-col items-center outline-current group bg-gray-400 text-gray-800 dark:text-slate-200 font-semibold text-xl w-fit p-3 rounded-md hover:scale-110 hover:outline ease-out duration-100 cursor-pointer'>
      {isFavorite
        ? <MdFavorite
            size={25}
            className=' absolute top-2 right-2 fill-red-600'
            onClick={handleFavorite}
          />
        : <MdFavoriteBorder
            size={25}
            className='absolute top-2 right-2 fill-red-600 '
            onClick={handleFavorite}
          />}
      <div className='bg-gray-200 min-h-[150px] w-1/2 max-w-[200px] min-w-[150px]  rounded-full border-current transition group-hover:outline'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover'
          loading='lazy'
        />
      </div>
      <h1 className='capitalize text-2xl group-hover:font-bold'>{name}</h1>
      <div className='bg-gray-300 rounded-md px-2 items-center text-md my-2 text-slate-500 group-hover:outline outline-1'>
        <span className=''>{pokemonTypes.join(' - ')}</span>
      </div>

    </div>
  )
}

export { PokemonCard }
