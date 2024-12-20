import express, { Request, Response } from "express";
import { join } from 'node:path';
import { io } from "./server";


const app = express();

// const __dirname = dirname(fileURLToPath(import.meta.url));

// Налаштування директорії для статичних файлів
app.use(express.static(join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

io.of('/admin').on("connection", (socket) => {
    console.log("Admin connected");
    socket.on("Admin:message", (data: string) => {
        console.log(`Message from admin: ${data}`);
    })
})

io.of('/user').on('connection', (socket) => {
    console.log("User connected");
    socket.on("User:message", (data: string) => {
        console.log(`Message from user: ${data}`);
    })
})



export default app;
