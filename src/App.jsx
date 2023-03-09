import React, { useEffect } from 'react'
import { Navbar, PokemonList, Searcher } from './components/index'
import { getPokemonsWithDetails } from './actions'
import { getPokemons } from './api'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from './assets/Spinner'

const API_URL_GET_POKEMONS =
  'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

function App () {
  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemons(API_URL_GET_POKEMONS)
      dispatch(getPokemonsWithDetails(pokemonRes))
    }
    fetchPokemons()
  }, [])

  return (
    <div className='min-h-screen bg-[#fffffe] dark:bg-[#0f0e17]'>
      <Navbar />
      <Searcher />
      {loading // Lo seteamos en getPokemonsWithDetails
        ? <Spinner />
        : <PokemonList pokemons={pokemons} />}
    </div>
  )
}

export default App
