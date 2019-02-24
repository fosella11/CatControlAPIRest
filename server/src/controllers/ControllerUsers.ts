import {Request, Response} from 'express';
//We have to import db to use it.
import db from '../database'

class ControllerUsers{

    public async create (req: Request, res: Response): Promise<void> {
        const user = await db.query('SELECT * FROM tasks WHERE unique_id= ?', [req.body.unique_id]);
        if(user.length >= 1){
            res.send({message: 'The task is on the database', code: '001'});
        }else{
            await db.query('INSERT INTO tasks set ?', [req.body]);   
            res.send({message: 'Saved Task on db', code: '000'});
        }
    }

    //Status: 001 => OPEN 000 => FINISHED
    public async check_in (req: Request, res: Response): Promise<void> {

        const user = await db.query('SELECT * FROM check_work WHERE user_id= ? AND state_check = 001', [req.body.user_id]);
        if(user.length >= 1){
            res.send({message: 'The worker has an unfinished activity.', code: '001'});
        }else{
            await db.query('INSERT INTO check_work set ?', [req.body]);   
            res.send({message: 'Saved Check in', code: '000'});
        }
    }
    public async check_out (req: Request, res: Response): Promise<void> {
        const user = await db.query('SELECT * FROM check_work WHERE user_id= ? AND state_check = 001', [req.body.user_id]);
        if(user.length >= 1){
            await db.query('UPDATE check_work SET state_check = ?, time_check_out = ?, check_longitude_out = ?, check_latitude_out = ? WHERE user_id= ? AND state_check = 001', 
            [req.body.state_check, req.body.time_check_out, req.body.check_longitude_out, req.body.check_latitude_out, req.body.user_id]);  
            res.send({message: 'The last open activity was successfully completed.', code: '000'});
        }else{
            res.send({message: 'No exist activity open', code: '001'});
        }

    }
   /*  public async check_aleatorie (req: Request, res: Response): Promise<void> {

        await db.query('INSERT INTO tasks set ?', [req.body]);    
        res.send({name: 'Saved task'});
    } */

    public async clog (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const users = await db.query('SELECT * FROM users WHERE unique_id= ?', [id]);
        res.json(users);
    }

    public async get_daily (req: Request, res: Response): Promise<void> {
        const { id_admin , username } = req.params;
        const message = await db.query('SELECT * FROM messages WHERE id_admin = ? AND username = ?', [ id_admin, username]);
        if(message.length >= 1){
            res.json(message);
        }else{
            res.send({message: 'No exist message', code: '001'});
        }
    }
}

export const controllerUsers = new ControllerUsers();
