export const getPokemons = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}
