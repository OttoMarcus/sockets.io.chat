import "dotenv/config";
import { createServer } from "http";
import { Server } from "socket.io";
import app from "./app";
import adminSocketHandler from "./src/socket/admin";
import userSocketHandler from "./src/socket/user";

const PORT = parseInt(process.env.PORT || "3000", 10);

// Створення HTTP-серверу
const server = createServer(app);

// Налаштування Socket.IO
// const io = new Server(server, {
//     cors: {
//         origin: "*", // Дозволити всі домени, але краще замінити на конкретні
//     },
// });
//
// // Простір імен /admin
// const adminNamespace = io.of("/adminChat");
// adminSocketHandler(adminNamespace);
//
// // Простір імен /user
// const userNamespace = io.of("/userChat");
// userSocketHandler(userNamespace);

// Запуск сервера
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
