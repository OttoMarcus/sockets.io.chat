import {Router} from "express";
import ActiveUsersController from "./controllers";


const chatRouting = Router();
const usersController = new ActiveUsersController();

chatRouting.get("/", usersController.getActiveUsersController);
chatRouting.post("/", usersController.addActiveUserController);
chatRouting.delete("/:id", usersController.removeActiveUserController);

export default chatRouting