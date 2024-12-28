import {useState} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import InputForm from "../InputForm/InputForm.tsx";



function StartChat() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} size="lg" className="me-2">
                Start Chat
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Send message</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <InputForm />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default StartChat