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
//We have to import db to use it.
const database_1 = __importDefault(require("../database"));
class ControllerUsers {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.default.query('SELECT * FROM tasks WHERE unique_id= ?', [req.body.unique_id]);
            if (user.length >= 1) {
                res.send({ message: 'The task is on the database', code: '001' });
            }
            else {
                yield database_1.default.query('INSERT INTO tasks set ?', [req.body]);
                res.send({ message: 'Saved Task on db', code: '000' });
            }
        });
    }
    //Status: 001 => OPEN 000 => FINISHED
    check_in(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.default.query('SELECT * FROM check_work WHERE user_id= ? AND state_check = 001', [req.body.user_id]);
            if (user.length >= 1) {
                res.send({ message: 'The worker has an unfinished activity.', code: '001' });
            }
            else {
                yield database_1.default.query('INSERT INTO check_work set ?', [req.body]);
                res.send({ message: 'Saved Check in', code: '000' });
            }
        });
    }
    check_out(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.default.query('SELECT * FROM check_work WHERE user_id= ? AND state_check = 001', [req.body.user_id]);
            if (user.length >= 1) {
                yield database_1.default.query('UPDATE check_work SET state_check = ?, time_check_out = ?, check_longitude_out = ?, check_latitude_out = ? WHERE user_id= ? AND state_check = 001', [req.body.state_check, req.body.time_check_out, req.body.check_longitude_out, req.body.check_latitude_out, req.body.user_id]);
                res.send({ message: 'The last open activity was successfully completed.', code: '000' });
            }
            else {
                res.send({ message: 'No exist activity open', code: '001' });
            }
        });
    }
    /*  public async check_aleatorie (req: Request, res: Response): Promise<void> {
 
         await db.query('INSERT INTO tasks set ?', [req.body]);
         res.send({name: 'Saved task'});
     } */
    clog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT * FROM users WHERE unique_id= ?', [id]);
            res.json(users);
        });
    }
    get_daily(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_admin, username } = req.params;
            const message = yield database_1.default.query('SELECT * FROM messages WHERE id_admin = ? AND username = ?', [id_admin, username]);
            if (message.length >= 1) {
                res.json(message);
            }
            else {
                res.send({ message: 'No exist message', code: '001' });
            }
        });
    }
}
exports.controllerUsers = new ControllerUsers();
