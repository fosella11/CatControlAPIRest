"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//We're gonna use the db here
const database_1 = __importDefault(require("../database"));
class ControllerAdmin {
    //Is better said that we're gonna execute a promise but 
    //this request wont response anything. That we can do it with this on the method 
    // (): Promise<void>
    list_check_users(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT * FROM check_work WHERE company_id= ?', [id]);
            res.json(users);
        });
    }
    list_tasks_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT * FROM tasks WHERE company_id= ? LIMIT 7', [id]);
            res.json(users);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.default.query('SELECT * FROM users WHERE unique_id= ?', [req.params.unique_id]);
            if (user.length >= 1) {
                res.send({ message: 'User already exist on the database', code: '001' });
            }
            else {
                yield database_1.default.query('INSERT INTO users set ?', [req.body]);
                res.send({ message: 'Saved User', code: '000' });
            }
        });
    }
    delete(req, res) {
        res.send({ text: 'deleting a user :' + req.params.id });
    }
    send_daily(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield database_1.default.query('SELECT * FROM messages WHERE id_admin = ? AND username = ?', [req.body.id_admin, req.body.username]);
            if (message.length >= 1) {
                yield database_1.default.query('UPDATE messages SET ? WHERE id_admin = ? AND username = ?', [req.body, req.body.id_admin, req.body.username]);
                res.send({ message: 'updated message daily to:' + req.body.username, code: '000' });
            }
            else {
                yield database_1.default.query('INSERT INTO messages set ?', [req.body]);
                res.send({ message: 'Saved message', code: '000' });
            }
        });
    }
    clog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT * FROM users_a WHERE unique_id= ?', [id]);
            res.json(users);
        });
    }
}
exports.controllerAdmin = new ControllerAdmin();
