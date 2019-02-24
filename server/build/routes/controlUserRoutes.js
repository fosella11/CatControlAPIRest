"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//We're gonna use this class like router
const express_1 = require("express");
//We have to import the controller
const ControllerUsers_1 = require("../controllers/ControllerUsers");
class controlUserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', ControllerUsers_1.controllerUsers.check_in);
        this.router.post('/tasks/', ControllerUsers_1.controllerUsers.create);
        this.router.put('/', ControllerUsers_1.controllerUsers.check_out);
        this.router.get('/clog/:id', ControllerUsers_1.controllerUsers.clog);
        this.router.get('/get_daily/:id_admin/:username', ControllerUsers_1.controllerUsers.get_daily);
    }
}
const controlUserRouter = new controlUserRoutes();
exports.default = controlUserRouter.router;
