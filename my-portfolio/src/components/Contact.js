import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

const Contact = () => {
  return (
    <Container id="contact">
      <Row className="my-5">
        <Col>
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me via LinkedIn or view my  GitHub, or through email or phone.</p>
          <ul>
            <li><strong>Email:</strong> pittmanbyte82@gmail.com</li>
            <li><strong>Phone:</strong> +1 (123) 456-7890</li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/pittbyte" target="_blank" rel="noopener noreferrer">Pittbyte</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;