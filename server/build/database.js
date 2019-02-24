"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
//We have to init the connection with the db
//We're need to make a file that will be called keys.ts to write the data connections.
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
//Now, we have to use the promise to start the connection
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});
exports.default = pool;
