"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImage = void 0;
const openai_1 = require("openai");
const configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new openai_1.OpenAIApi(configuration);
const generateImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt, size } = req.body;
    const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';
    console.log(process.env.OPENAI_API_KEY);
    try {
        // const response = await openai.createImage({
        //   prompt,
        //   n: 1,
        //   size: imageSize
        // })
        const response = yield openai.createCompletion({
            model: 'text-davinci-003',
            prompt: 'Say this is a test',
            temperature: 0,
            max_tokens: 7
        });
        // const imageUrl = response.data.data[0].url
        res.status(200).json({
            success: true,
            data: response
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            error: 'image couldnt be generated'
        });
        if (err.response) {
            console.log(err.response.status);
            console.log(err.response.data);
            //   console.log(process.env.OPENAI_API_KEY)
        }
        else {
            console.log(err.message);
        }
    }
});
exports.generateImage = generateImage;
//# sourceMappingURL=openaiController.js.map