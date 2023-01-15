import express from 'express'
import openAiRouter from './routes/openAiRout'
import pokemonRouter from './routes/getPokemon'
const app = express()
// setup
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/openai', openAiRouter)
app.use('/pokemon', pokemonRouter)

app.listen(process.env.PORT, () => {
  return console.log(`Expressstening at http://localhost ${process.env.PORT}`)
})
