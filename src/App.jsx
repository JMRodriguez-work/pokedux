import React, { useEffect } from 'react'
import { Navbar, PokemonList, Searcher } from './components/index'
import { setPokemons } from './actions'
import { getPokemons, getPokemonsDetails } from './api'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from './assets/Spinner'

const API_URL_GET_POKEMONS =
  'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

function App () {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemons(API_URL_GET_POKEMONS)
      const pokemonsDetailed = await Promise.all(pokemonRes.map(pokemon => getPokemonsDetails(pokemon)))
      dispatch(setPokemons(pokemonsDetailed))
    }
    fetchPokemons()
  }, [])

  return (
    <div className='min-h-screen bg-[#fffffe] dark:bg-[#0f0e17]'>
      <Navbar />
      <Searcher />
      {!pokemons.length
        ? <Spinner />
        : <PokemonList pokemons={pokemons} />}
    </div>
  )
}

export default App
