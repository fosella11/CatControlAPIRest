//import express from "express"
import express, { Application } from "express"

import controlAdminRoutes from './routes/controlAdminRoutes';
import controlUserRoutes from './routes/controlUserRoutes';

//We're gonna add new modules. This modules will be help to dev
//Morgan will be helping and showing on the console all request and information
import morgan from 'morgan';
// Cors will be helping to connect servers
import cors from 'cors';


class Server{

    //The first method called is it.
    //We're gonna to init the express in this method.
    //We're gonna assign the object express to the app 
    //How the app will be the type Express we have to use the type from express
    //We can use the application from express, called that: 
    // import express from "express" -> we're gonna get from express with this line
    // import express, { Application } from "express"
    // How we can use this app on the whole code we have to set public.
    public app: Application;

    constructor(){

        this.app = express();
        this.config();
        this.routes();

    }

    //We're gonna create a new method called config{} in this section we're gonna 
    //set app

    config(): void {

        //first config, the listen port of server
        //default the port will be 3000 but if the services send the port to the server 
        //we're gonna write the logic to use the port given for the service.
        this.app.set('port', process.env.PORT || 3000);

        //Here we have to add morgan and cors
        this.app.use(morgan('dev'));
        this.app.use(cors());
        //we have to add 2 important configs more
        //first: json from express, with this option the server will be able to accept 
        // json format from client
        this.app.use(express.json());
        //The other option is for HTML format with this option from express
        this.app.use(express.urlencoded({extended: false}));


    }

    //Also we're goin to use route to set the routes of the API
    routes(): void {

        this.app.use('/api/admin', controlAdminRoutes);
        this.app.use('/api/user', controlUserRoutes);

    }

    //We need to create a new method to init the server
    start(): void {

        //Here we have to get the variable from the config and then listen on this port
        //Then execute a function to send a consol log saying all ok!
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port: '+this.app.get('port'));
        });
    }

}

//Now we've to the class and then call the method start
const server = new Server();
server.start();