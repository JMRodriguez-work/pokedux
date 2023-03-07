import React, { useEffect } from "react";
import { Navbar, PokemonCard, PokemonList, Searcher } from './components/index'
import { usePokemons } from "./hooks/usePokemons";

const API_URL_GET_POKEMONS =
  "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

function App() {

  const { pokemons } = usePokemons(API_URL_GET_POKEMONS);
  
  
  return (
    <div className="bg-[#fffffe] dark:bg-[#0f0e17] h-full ease-in-out duration-200">
      <Navbar />
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
