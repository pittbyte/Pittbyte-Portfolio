import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import '../App.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Sorting structure using REACT',
    imgSrc: '/Screenshot 2024-06-20 112128.png',
    demoLink: 'https://ky8ppq.csb.app/',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    imgSrc: 'link-to-image2',
    demoLink: 'link-to-live-demo2',
  },
];

const Projects = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  return (
    <Container id="projects" className="projects-section">
      <h2>Projects</h2>
      <Row className="my-5">
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={project.imgSrc} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(project)}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedProject && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedProject.imgSrc} alt={selectedProject.title} style={{ width: '100%' }} />
            <p>{selectedProject.description}</p>
            <Button variant="primary" href={selectedProject.demoLink} target="_blank">Live Demo</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default Projects;