"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//We're gonna use this class like router
const express_1 = require("express");
//We have to import the controllers to use in the router
const ControllerAdmin_1 = require("../controllers/ControllerAdmin");
class ControlAdmin {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/work/:id', ControllerAdmin_1.controllerAdmin.list_check_users);
        this.router.get('/tasks/:id', ControllerAdmin_1.controllerAdmin.list_tasks_user);
        this.router.post('/', ControllerAdmin_1.controllerAdmin.create);
        this.router.delete('/:id', ControllerAdmin_1.controllerAdmin.delete);
        this.router.post('/send_daily', ControllerAdmin_1.controllerAdmin.send_daily);
        this.router.get('/:id', ControllerAdmin_1.controllerAdmin.clog);
    }
}
const controlAdminRouter = new ControlAdmin();
exports.default = controlAdminRouter.router;
