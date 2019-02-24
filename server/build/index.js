"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express from "express"
const express_1 = __importDefault(require("express"));
const controlAdminRoutes_1 = __importDefault(require("./routes/controlAdminRoutes"));
const controlUserRoutes_1 = __importDefault(require("./routes/controlUserRoutes"));
//We're gonna add new modules. This modules will be help to dev
//Morgan will be helping and showing on the console all request and information
const morgan_1 = __importDefault(require("morgan"));
// Cors will be helping to connect servers
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //We're gonna create a new method called config{} in this section we're gonna 
    //set app
    config() {
        //first config, the listen port of server
        //default the port will be 3000 but if the services send the port to the server 
        //we're gonna write the logic to use the port given for the service.
        this.app.set('port', process.env.PORT || 3000);
        //Here we have to add morgan and cors
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        //we have to add 2 important configs more
        //first: json from express, with this option the server will be able to accept 
        // json format from client
        this.app.use(express_1.default.json());
        //The other option is for HTML format with this option from express
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //Also we're goin to use route to set the routes of the API
    routes() {
        this.app.use('/api/admin', controlAdminRoutes_1.default);
        this.app.use('/api/user', controlUserRoutes_1.default);
    }
    //We need to create a new method to init the server
    start() {
        //Here we have to get the variable from the config and then listen on this port
        //Then execute a function to send a consol log saying all ok!
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port: ' + this.app.get('port'));
        });
    }
}
//Now we've to the class and then call the method start
const server = new Server();
server.start();
