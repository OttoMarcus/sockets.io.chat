import express, { Request, Response } from "express";
import { join } from "path";

const app = express();

// Middleware
app.use(express.json());

// Головна сторінка
app.get("/", (req: Request, res: Response) => {
    res.sendFile(join(__dirname, "public", "index.html"));
});



export default app;
