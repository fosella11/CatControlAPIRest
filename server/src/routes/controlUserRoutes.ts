//We're gonna use this class like router
import { Router } from 'express';

//We have to import the controller
import { controllerUsers } from '../controllers/ControllerUsers';

class controlUserRoutes {

    public router: Router = Router();

    constructor () {

        this.config();

    } 

    config (): void {

        this.router.post('/', controllerUsers.check_in);
        this.router.post('/tasks/', controllerUsers.create);

        this.router.put('/', controllerUsers.check_out);

        this.router.get('/clog/:id', controllerUsers.clog);
        this.router.get('/get_daily/:id_admin/:username', controllerUsers.get_daily);

    }
}

const controlUserRouter = new controlUserRoutes();
export default controlUserRouter.router;