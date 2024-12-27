import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import cn from "classnames";
import styles from "./LoginPage.module.scss";


function LoginPage() {


    return (
        <div className={styles.pageWrapper}>
            <div className={styles.formWrapper}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className={styles.label}>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter login" />
                        <Form.Text className="text-muted">
                            We'll keep your data safe.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className={styles.label}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className={cn(styles.linksGroup, "mb-3")}>
                        <Form.Text>
                            <a href="#">Forgot password?</a>
                        </Form.Text>
                        <Form.Text>
                            <a href="#">Don't have an account?</a>
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default LoginPage;