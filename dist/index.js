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
require("reflect-metadata");
const body_parser_1 = __importDefault(require("body-parser"));
const typeorm_1 = require("typeorm");
const cors_1 = __importDefault(require("cors"));
const port = process.env.PORT || 8000;
const Main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    try {
        yield (0, typeorm_1.createConnection)({
            type: "postgres",
            host: "flora.db.elephantsql.com",
            port: 5432,
            username: "vicjbbls",
            password: "iBRTV9-Er9kKeBKppJb5lwa5L4nliD40",
            database: "vicjbbls",
            synchronize: true,
        });
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use((0, body_parser_1.default)());
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
        app.get('/', (_req, res) => {
            return res.send('Express Typescript on Vercel ashok');
        });
    }
    catch (error) {
        console.log(error);
        throw new Error("Coonection Faild To Database");
    }
});
Main();
//# sourceMappingURL=index.js.map