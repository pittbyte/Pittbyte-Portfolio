import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

const Resume = () => (
  <Container id="resume">
    <Row className="my-5">
      <Col>
        <h2>Resume</h2>
        <Button variant="primary" href="link-to-resume.pdf" target="_blank">Download PDF</Button>
        {/* Optionally display your resume content here */}
      </Col>
    </Row>
  </Container>
);

export default Resume;