"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//We're gonna use this class like router
const express_1 = require("express");
class controlCatRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Thanks control Router!'));
    }
}
const controlCatRouter = new controlCatRoutes();
exports.default = controlCatRouter.router;
