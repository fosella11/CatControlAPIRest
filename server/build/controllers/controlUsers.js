"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControlUsers {
    index(req, res) {
        res.send('Hello');
    }
}
const controlUsers = new ControlUsers();
exports.default = controlUsers;
