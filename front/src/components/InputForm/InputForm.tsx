import styles from "./InputForm.module.scss";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";


const InputForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label className={styles.label}>Tap message</Form.Label>
                <div className={styles.inputWrapper}>
                    <Form.Control type="text" placeholder="send message" />
                    <Button className={styles.btnSubmit} variant="primary" type="submit">
                         Submit
                    </Button>
                </div>
                <Form.Text className="text-muted ">
                    We'll never share your message with anyone else.
                </Form.Text>

            </Form.Group>
        </Form>
    )}

    export default InputForm