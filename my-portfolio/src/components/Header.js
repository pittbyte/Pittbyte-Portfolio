import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';

const Header = ({ setShowAbout, setShowProjects, setShowResume, setShowContact }) => (
  <Navbar expand="lg" fixed="top" className="navbar-transparent">
    <Navbar.Brand href="/" className="navbar-brand-custom">Your Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto pr-5">
        <Nav.Link onClick={() => setShowAbout(true)}>About</Nav.Link>
        <Nav.Link onClick={() => setShowProjects(true)}>Projects</Nav.Link>
        <Nav.Link onClick={() => setShowResume(true)}>Resume</Nav.Link>
        <Nav.Link onClick={() => setShowContact(true)}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
