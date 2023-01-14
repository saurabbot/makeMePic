"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
require('dotenv').config();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(process.env.PORT || port, () => {
    return console.log(`Expressstening at http://localhost${process.env.PORT}`);
});
//# sourceMappingURL=app.js.map