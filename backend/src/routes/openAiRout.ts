import express from "express";
import { generateImage } from "../controllers/openaiController";

const openAiRouter = express.Router();
openAiRouter.post("/generateimage", generateImage);

export default openAiRouter;