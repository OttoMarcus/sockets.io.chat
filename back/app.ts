import express from "express";
import chatRouting from "./src/api/chat/routes"

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/chat", chatRouting)

export default app;
