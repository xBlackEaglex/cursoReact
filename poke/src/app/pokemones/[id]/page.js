import Image from "next/image"
import Link from "next/link"

const getData = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return data
}

const Pokemon = async ({params}) => {
    const idPoke = params.id;
    const data =  await getData(idPoke)

    return (
        <div>
            <h1>{data.name} numero #{data.id}</h1>
            <Image alt={data.name} src={data.sprites.front_default} width={400} height={400} />
            <Link href="/">Volver al Inicio</Link>
        </div>
    );
}


export default Pokemon;