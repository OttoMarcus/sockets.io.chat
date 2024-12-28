
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cn from "classnames";
import styles from "./Header.module.scss";

function Header() {


    return (
        <Navbar expand="lg" className={cn(styles.wrapp, "bg-body-primary", "sticky-top")}>
            <Container fluid>
                <Navbar.Brand href="/">Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/chat">Who is online?</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                        <NavDropdown title="Personal area" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">About Me</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                See MyPosts
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Change Avatar
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Button variant="outline-danger" className="ms-3">Sign Out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;