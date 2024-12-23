import fs from "fs/promises";
import { User } from "../interfaces/chat.interfaces";

class GetActiveUsers {
    private filePath = "./src/api/active.json"; // Шлях до файлу JSON

    // Зчитування користувачів
    async getActiveUsers(): Promise<User[]> {
        try {
            const data = await fs.readFile(this.filePath, "utf8");
            return JSON.parse(data); // Парсинг JSON
        } catch (err) {
            console.error("Error reading users:", err);
            throw err;
        }
    }

    // Додавання користувача
    async addActiveUser(user: User): Promise<User[]> {
        try {
            const users: User[] = await this.getActiveUsers(); // Отримання існуючих користувачів
            if (users.some((item) => item.id === user.id)) {
                console.log("User already exists:", user.id);
                return users; // Користувач уже існує
            }
            const updatedUsers = [...users, user]; // Додати нового користувача
            await fs.writeFile(this.filePath, JSON.stringify(updatedUsers, null, 2)); // Запис у файл
            return updatedUsers;
        } catch (err) {
            console.error("Error adding user:", err);
            throw err;
        }
    }

    // Видалення користувача
    async removeActiveUser(userId: number): Promise<User[]> {
        try {
            const users: User[] = await this.getActiveUsers(); // Отримання існуючих користувачів
            const updatedUsers = users.filter((user) => user.id !== userId); // Видалення користувача
            await fs.writeFile(this.filePath, JSON.stringify(updatedUsers, null, 2)); // Запис у файл
            return updatedUsers;
        } catch (err) {
            console.error("Error removing user:", err);
            throw err;
        }
    }
}

export default GetActiveUsers;
