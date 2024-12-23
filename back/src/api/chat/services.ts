import GetActiveUsers from "./dataAccessLayer";
import { User } from "../interfaces/chat.interfaces";


const activeUsers = new GetActiveUsers();

class ActiveUsersServices {
    async getActiveUsers() {
        return await activeUsers.getActiveUsers();
    }
    async addActiveUser(user: User) {
        return await activeUsers.addActiveUser(user);
    }
    async removeActiveUser(user: number) {
        return await activeUsers.removeActiveUser(user);
    }
}

export default ActiveUsersServices