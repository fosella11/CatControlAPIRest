"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControlCatController {
    index(req, res) {
        res.send('Hello');
    }
}
const controlCatController = new ControlCatController();
exports.default = controlCatController;
