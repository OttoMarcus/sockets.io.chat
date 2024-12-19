import "dotenv/config";
import http from "http";
import { Server } from "socket.io";
import app from "./app";

const PORT: number = parseInt(process.env.PORT || "3000", 10);

// Створюємо HTTP-сервер на базі `app`
const server = http.createServer(app);

// Підключаємо Socket.IO до HTTP-сервера
const io = new Server(server, {
    cors: {
        origin: "*", // Налаштуйте для безпеки, якщо необхідно
    },
});

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

// Запускаємо сервер
server.listen(PORT, (err?: Error) => {
    if (err) {
        throw err;
    } else {
        console.log(`Server is listening on port ${PORT}`);
    }
});
