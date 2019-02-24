"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControlAdmin {
    index(req, res) {
        res.send('Hello Admin');
    }
}
const controlAdmin = new ControlAdmin();
exports.default = controlAdmin;
