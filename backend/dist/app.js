"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const openAiRout_1 = __importDefault(require("./routes/openAiRout"));
const app = (0, express_1.default)();
// setup
require('dotenv').config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/openai', openAiRout_1.default);
app.listen(process.env.PORT, () => {
    return console.log(`Expressstening at http://localhost ${process.env.PORT}`);
});
//# sourceMappingURL=app.js.map