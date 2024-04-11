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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const exampleHandler_1 = require("./exampleHandler");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/api/products/analysis', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({ foo: 'bar' });
}));
app.get('/orm', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, exampleHandler_1.exampleORM)();
    res.json(data);
}));
app.get('/raw', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, exampleHandler_1.exampleRAW)();
    res.json(data);
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
