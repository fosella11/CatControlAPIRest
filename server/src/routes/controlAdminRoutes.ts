//We're gonna use this class like router
import { Router } from 'express';

//We have to import the controllers to use in the router
import { controllerAdmin } from '../controllers/ControllerAdmin';


class ControlAdmin {

    public router: Router = Router();

    constructor () {

        this.config();

    } 

    config (): void {

        this.router.get('/work/:id', controllerAdmin.list_check_users);
        this.router.get('/tasks/:id', controllerAdmin.list_tasks_user);

        this.router.post('/', controllerAdmin.create);
        this.router.delete('/:id', controllerAdmin.delete);
        this.router.post('/send_daily', controllerAdmin.send_daily);
        this.router.get('/:id', controllerAdmin.clog);

    }
}

const controlAdminRouter = new ControlAdmin();
export default controlAdminRouter.router;