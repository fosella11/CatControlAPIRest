"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//We're gonna use this class like router
const express_1 = require("express");
//We have to import the controllers to use in the router
const ControlAdmin_1 = __importDefault(require("../controllers/ControlAdmin"));
class indexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ControlAdmin_1.default.index);
    }
}
const indexRouter = new indexRoutes();
exports.default = indexRouter.router;
