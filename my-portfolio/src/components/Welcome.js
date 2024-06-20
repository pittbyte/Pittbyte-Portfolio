import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import ProfileImage from './ProfileImage'; // Import the ProfileImage component

const Welcome = () => (
  <Container className="welcome-section text-center">
    <Row>
      <Col>
        <h1>Welcome to My Portfolio</h1>
        <br></br>
        <p>Explore my work and get to know more about me.</p>
        <p>Click on each section to learn more</p>
        <ProfileImage imagePath={`${process.env.PUBLIC_URL}/image0 (6).jpeg`} />
      </Col>
    </Row>
  </Container>
);

export default Welcome;