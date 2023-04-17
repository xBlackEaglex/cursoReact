import Link from "next/link"

const Pokemon = ({pokemon}) => {
  const id = pokemon.url.split('/').filter(x => x).pop()
  return(
    <li><Link href={`pokemones/${id}`}>{pokemon.name}</Link></li>
  )
}

const getData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')

  if(!response.ok){
    throw new Error('Failed to fetch data');
  }

  const data = await response.json()
  
  return data.results
}

export default async function Pokemones() {

  const pokemones = await getData()

  return (
    <main>
      <p>pokemones</p>
      <ul>
        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon} />)}
      </ul>
    </main>
  )
}