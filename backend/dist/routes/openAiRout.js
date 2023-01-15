"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const openaiController_1 = require("../controllers/openaiController");
const openAiRouter = express_1.default.Router();
openAiRouter.post("/generateimage", openaiController_1.generateImage);
exports.default = openAiRouter;
//# sourceMappingURL=openAiRout.js.map