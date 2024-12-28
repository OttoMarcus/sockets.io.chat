import React, { useState, useEffect } from "react";
import styles from "./InputForm.module.scss";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { io } from "socket.io-client";



const InputForm = () => {
    const PORT = import.meta.env.VITE_PORT || "http://localhost:3000";
    const socket = io(`${PORT}/userChat`); // Простір імен userChat
    const [message, setMessage] = useState("");
    useEffect(() => {
        // Логування підключення
        socket.on("connect", () => {
            console.log("Connected to /userChat namespace:", socket.id);
        });

        // Очищення сокета при розмонтуванні компонента
        return () => {
            socket.disconnect();
        };
    }, [socket]);


    // Обробник зміни тексту у полі вводу
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
        console.log(message)
    };

    // Обробник подання форми
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (message.trim()) {
            socket.emit("User:message", message);
            console.log("Відправлене повідомлення:", message);
            setMessage("");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicMessage">
                <div className={styles.inputWrapper}>
                    <Form.Control
                        type="text"
                        value={message}
                        onChange={handleInputChange}
                    />
                    <Button
                        className={styles.btnSubmit}
                        variant="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
                <Form.Text className="text-muted">
                    {message ? "...": "We'll never share your message with anyone else"}
                </Form.Text>
            </Form.Group>
        </Form>
    );
};

export default InputForm
