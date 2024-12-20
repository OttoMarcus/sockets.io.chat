import { Namespace } from "socket.io";

const adminSocketHandler = (namespace: Namespace) => {
    namespace.on("connection", (socket) => {
        console.log("Connected to admin namespace", socket.id);

        socket.emit("welcome", "Hello, Admin!");

        socket.on("Admin:message", (data: string) => {
            console.log("Message from admin:", data);
        });

        // socket.on("disconnect", () => {
        //     console.log("Admin disconnected", socket.id);
        // })
    })
}

export default adminSocketHandler