import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3">
    <Container>
      <Row>
        <Col>
          <p className="footer-text">&copy; {new Date().getFullYear()} Crystal Pittman. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;