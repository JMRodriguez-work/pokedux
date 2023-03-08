/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react'
import { Navbar, PokemonList, Searcher } from './components/index'
import { setPokemons } from './actions'
import { getPokemons } from './api'
import { useDispatch, useSelector } from 'react-redux'

const API_URL_GET_POKEMONS =
  'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

function App () {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemons(API_URL_GET_POKEMONS)
      await dispatch(setPokemons(pokemonRes))
    }
    fetchPokemons()
  }, [])
  return (
    <div className='bg-[#fffffe] dark:bg-[#0f0e17] h-full ease-in-out duration-200'>
      <Navbar />
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
