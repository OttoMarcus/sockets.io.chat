import { Namespace } from "socket.io";

const userSocketHandler = (namespace: Namespace) => {
    namespace.on("connection", (socket) => {
        //"connection" - used on server side, "connect" - used on client side

        if (socket.connected) {
        console.log("Connected to user namespace", socket.id);


        socket.on("User:message", (data: string) => {
            try {
                console.log("Message from user:", data);
                // Логіка для обробки даних, якщо потрібна
                const response = `Hello, Guest! Received your message: ${data}`;

                // Відправлення відповіді клієнту
                socket.emit("welcome", response);
            } catch (error) {
                console.error("Error processing message:", error);
            }
        });

        } else {
            alert("Connection lost. Please try again.");
        }


        // socket.on("disconnect", () => {
        //     console.log("User disconnected", socket.id);
        // })
    })
}

export default userSocketHandler