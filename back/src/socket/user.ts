import { Namespace } from "socket.io";

const userSocketHandler = (namespace: Namespace) => {
    namespace.on("connection", (socket) => {
        //"connection" - used on server side, "connect" - used on client side
        console.log("Connected to user namespace", socket.id);

        // socket.emit("welcome", "Hello, Guest!");

        socket.on("User:message", (data: string) => {
            console.log("Message from admin:", data);
        });

        // socket.on("disconnect", () => {
        //     console.log("User disconnected", socket.id);
        // })
    })
}

export default userSocketHandler