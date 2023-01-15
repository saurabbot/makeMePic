import express from 'express'
import { getPokemon } from '../controllers/pokemonController'
const pokemonRouter = express.Router()
pokemonRouter.get('/newPokemon', getPokemon)
export default pokemonRouter