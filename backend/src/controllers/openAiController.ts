import { Configuration, OpenAIApi } from 'openai'
import { Request, Response } from 'express'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

interface GenerateImageRequest {
  prompt: string
  size: string
}
export const generateImage = async (req: Request, res: Response) => {
  const { prompt, size } = req.body as GenerateImageRequest
  const imageSize =
    size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024'
  console.log(process.env.OPENAI_API_KEY)

  try {
    // const response = await openai.createImage({
    //   prompt,
    //   n: 1,
    //   size: imageSize
    // })
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Say this is a test',
      temperature: 0,
      max_tokens: 7
    })
    // const imageUrl = response.data.data[0].url
    res.status(200).json({
      success: true,
      data: response
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      error: 'image couldnt be generated'
    })
    if (err.response) {
      console.log(err.response.status)
      console.log(err.response.data)
      //   console.log(process.env.OPENAI_API_KEY)
    } else {
      console.log(err.message)
    }
  }
}
