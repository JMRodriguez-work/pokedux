import { SET_POKEMONS } from './types'
import { getPokemonsDetails } from '../api'

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload
})

export const getPokemonsWithDetails =
  (pokemons = []) =>
    async (dispatch) => {
      const pokemonsDetailed = await Promise.all(
        pokemons.map((pokemon) => getPokemonsDetails(pokemon))
      )
      dispatch(setPokemons((pokemonsDetailed)))
    }
