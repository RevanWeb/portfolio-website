import react from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col md={4} sm={4}>
              <p>&copy; 2022 All Rights Reserved</p>
            </Col>
            <Col md={4} sm={4}>
              <p>Revansagare@gmail.com</p>
            </Col>
            <Col md={4} sm={4}>
              <p>Designed by Sahil Bhuvad</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
