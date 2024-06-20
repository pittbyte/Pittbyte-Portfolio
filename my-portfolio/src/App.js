import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import CustomModalHeader from './components/CustomModalHeader'; // Import the custom modal header
import { Modal } from 'react-bootstrap';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleClose = () => {
    setShowAbout(false);
    setShowProjects(false);
    setShowResume(false);
    setShowContact(false);
  };

  return (
    <div className="app">
      <Header 
        setShowAbout={setShowAbout}
        setShowProjects={setShowProjects}
        setShowResume={setShowResume}
        setShowContact={setShowContact}
      />
      
      <Welcome /> {/* Display the Welcome component */}
      
      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Resume Section */}
      <Resume />

      {/* Contact Section */}
      <Contact />

      <div className="content">
        {/* Modal for About */}
        <Modal show={showAbout} onHide={handleClose}>
          <CustomModalHeader title="About Me" handleClose={handleClose} />
          <Modal.Body>
            <About />
          </Modal.Body>
        </Modal>

        {/* Modal for Projects */}
        <Modal show={showProjects} onHide={handleClose}>
          <CustomModalHeader title="Projects" handleClose={handleClose} />
          <Modal.Body>
            <Projects />
          </Modal.Body>
        </Modal>

        {/* Modal for Resume */}
        <Modal show={showResume} onHide={handleClose}>
          <CustomModalHeader title="Resume" handleClose={handleClose} />
          <Modal.Body>
            <Resume />
          </Modal.Body>
        </Modal>

        {/* Modal for Contact */}
        <Modal show={showContact} onHide={handleClose}>
          <CustomModalHeader title="Contact" handleClose={handleClose} />
          <Modal.Body>
            <Contact />
          </Modal.Body>
        </Modal>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;