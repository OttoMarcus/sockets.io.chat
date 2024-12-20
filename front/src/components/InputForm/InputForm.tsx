import styles from "./InputForm.module.scss";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";

const InputForm = () => {
    const [message, setMessage] = useState("");

    // Обробник зміни тексту у полі вводу
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    // Обробник подання форми
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Відправлене повідомлення:", message);
        setMessage("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label className={styles.label}>Tap message</Form.Label>
                <div className={styles.inputWrapper}>
                    <Form.Control
                        type="text"
                        placeholder="send message"
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
                    {message || "We'll never share your message with anyone else"}
                </Form.Text>
            </Form.Group>
        </Form>
    );
};

export default InputForm;
