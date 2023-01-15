import { PokemonClient } from "pokenode-ts";
import { Request, Response } from "express";

// interfaces
interface PokemonData {
    id: number,
    name: string
}


export const getPokemon = async (req: Request, res: Response) => {
    const pokiApi = new PokemonClient()
    let randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    try {
        const response = await pokiApi.getPokemonById(randomNumber)
        const pokemon = {
            id: response?.id,
            name: response?.name,
            image: response?.sprites?.front_default
        }
        res.status(200).json({
            success: true,
            data: pokemon
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            error: 'not able to generate pokemon'
        })
        console.log(e)
    }
}

export const clickedPokemon = async (req: Request, res: Response) => {
    const { id, name } = req.body as PokemonData

}