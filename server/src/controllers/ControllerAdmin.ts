import {Request, Response} from 'express';

//We're gonna use the db here
import db from '../database'
import { Result } from 'range-parser';

class ControllerAdmin{

    //Is better said that we're gonna execute a promise but 
    //this request wont response anything. That we can do it with this on the method 
    // (): Promise<void>
    public async list_check_users (req: Request, res: Response): Promise<void>{

        const { id } = req.params;
        const users = await db.query('SELECT * FROM check_work WHERE company_id= ?', [id]);
        res.json(users);
    
    }

    public async list_tasks_user (req: Request, res: Response): Promise<void>{

        const { id } = req.params;
        const users = await db.query('SELECT * FROM tasks WHERE company_id= ? LIMIT 7', [id]);
        res.json(users);
    
    }

    public async create (req: Request, res: Response): Promise<void> {
        const user = await db.query('SELECT * FROM users WHERE unique_id= ?', [req.params.unique_id]);
        if(user.length >= 1){
            res.send({message: 'User already exist on the database', code: '001'});
        }else{
            await db.query('INSERT INTO users set ?', [req.body]);   
            res.send({message: 'Saved User', code: '000'});
        }
    }


    public delete (req: Request, res: Response) {

        res.send({text: 'deleting a user :'+ req.params.id});
    }

    public async send_daily (req: Request, res: Response): Promise<void> {
        const message = await db.query('SELECT * FROM messages WHERE id_admin = ? AND username = ?', [req.body.id_admin, req.body.username]);
        if(message.length >= 1){
            await db.query('UPDATE messages SET ? WHERE id_admin = ? AND username = ?', [req.body, req.body.id_admin, req.body.username]);
            res.send({message: 'updated message daily to:'+ req.body.username, code: '000'});
        }else{
            await db.query('INSERT INTO messages set ?', [req.body]);   
            res.send({message: 'Saved message', code: '000'});
        }
    }

    public async clog (req: Request, res: Response): Promise<void> {

        const { id } = req.params;
        const users = await db.query('SELECT * FROM users_a WHERE unique_id= ?', [id]);
        res.json(users);
    }

}

export const controllerAdmin = new ControllerAdmin();
