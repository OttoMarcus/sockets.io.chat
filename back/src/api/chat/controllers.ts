import { Request, Response } from "express";
import ActiveUsersServices from "./services";

const activeUsersServices = new ActiveUsersServices();

class ActiveUsersController {

    async getActiveUsersController (req: Request, res: Response) {
        try {
            const activeUsers = await activeUsersServices.getActiveUsers();
            res.json(activeUsers);
        } catch (err) {
            const errMsg = `Error fetching active users: ${err}`;
            res.status(500).json({error: errMsg});
        }
    }

    async addActiveUserController (req: Request, res: Response) {
        try {
            const userList = await activeUsersServices.addActiveUser(req.body);
            res.json(userList);
        } catch (err) {
            const errMsg = `Error adding active user: ${err}`;
            res.status(500).json({error: errMsg});
        }
    }

    async removeActiveUserController (req: Request, res: Response) {
        try {
            const doUserOffline = await activeUsersServices.removeActiveUser(req.body);
            res.json(doUserOffline);
        } catch (err) {
            const errMsg = `Error removing active user: ${err}`;
            res.status(500).json({error: errMsg});
        }
    }
}

export default ActiveUsersController