import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./Footer.module.scss";



const Footer = () => {

    const currentYear = new Date();

    return (
        <Container fluid className={styles.footerWrapper}>
            <Row>
                <Col>{currentYear.getFullYear()} &#169;</Col>
            </Row>
        </Container>
    )
}

export default Footer