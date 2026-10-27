import { useEffect, useState } from 'react'

interface Pokemon {
    id: number
    name: string,
    imageUrl : string
}

interface Props {
    id:number
}

export const usePokemon = ({id}:Props) => {
  
    const [pokemon, setpokemon] = useState<Pokemon | null>(null)
    const [isLoading, setisLoading] = useState(true)

    const getPokemonById = async (id: number) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()

        setpokemon({
            id: id,
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });

        setisLoading(false)
    }
    
    useEffect(() => {
      
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPokemonById(id)
      
    }, [id])
    




    return {isLoading,pokemon}
}
