import express, { Request, Response } from "express";
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {Server} from "socket.io";

const app = express();
// @ts-ignore
// const __dirname = dirname(fileURLToPath(import.meta.url));

const io = new Server(server)

// Налаштування директорії для статичних файлів
app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});


export default app