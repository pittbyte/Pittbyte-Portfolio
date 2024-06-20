import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';

const About = () => (
  <Container id="about" className="about-section">
    <Row className="my-5">
      <Col md={{ span: 8, offset: 2 }}>
        <h2>About Me</h2>
        <Image 
          src={`${process.env.PUBLIC_URL}/image0 (6).jpeg`}  
          roundedCircle 
          fluid 
          alt="Your Name" 
          className="profile-img"
        />
        <p>Hello! I'm Crystal Pittman, a dedicated web developer with a foundation in modern web technologies. My hands-on experience spans a variety of projects, from crafting small personal websites to engineering large-scale applications.</p>
        
        <h3 className="padding-top margin-left-adjust">My Expertise Includes</h3>
        <ul>
          <li><strong>React:</strong> Developed dynamic and responsive user interfaces.</li>
          <li><strong>CSS3 and HTML5:</strong> Designed visually appealing, functional, and accessible layouts.</li>
          <li><strong>JavaScript (ES6+):</strong> Utilized modern JavaScript features to enhance web applications.</li>
          <li><strong>Databases:</strong> Worked with both relational (e.g., MySQL) and NoSQL (e.g., MongoDB) databases.</li>
          <li><strong>Operating Systems:</strong> Proficient in Windows, macOS, and Linux.</li>
        </ul>
        
        <h3 className="text-center">What Sets Me Apart</h3>
        <p>I have a proven track record of delivering high-quality, maintainable code on multiple real-world projects. I am committed to continuous learning, staying current with industry trends, and expanding my skill set. I enjoy finding innovative solutions to complex problems and am an effective communicator and collaborator, making me a valuable team player.</p>
        
        <h3 className="text-center">Why You Need Me</h3>
        <p>As a developer, I am eager to contribute to your team. My practical experience, enthusiasm for learning, and dedication to excellence make me an ideal candidate. For more detailed information on my experience and skills, please refer to my resume.</p>
      </Col>
    </Row>
  </Container>
);

export default About;