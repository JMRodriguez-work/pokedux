import { useState, useEffect } from "react";

const usePokemons = (URL) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setPokemons(data.results);
    };
    fetchData();
  }, [URL]);

  return {
    pokemons,
  };
};

export { usePokemons };
