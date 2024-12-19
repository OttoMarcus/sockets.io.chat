import express, { Request, Response } from "express";
import { join } from 'node:path';


const app = express();

// const __dirname = dirname(fileURLToPath(import.meta.url));

// Налаштування директорії для статичних файлів
app.use(express.static(join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

export default app;
