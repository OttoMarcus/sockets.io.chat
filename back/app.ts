import express from "express";
import chatRouting from "./src/api/chat/routes"
import cors from "cors";

const app = express();
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/chat", chatRouting)

export default app;
