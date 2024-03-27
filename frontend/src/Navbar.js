import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Navbar.css'

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="nav-container">
      <Navbar.Brand href="/">
        <img className="nav-brand nav-logo"
          src="/IntraTrackerLogo.png"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* This is the toggle button */}
      <Navbar.Collapse id="basic-navbar-nav"> {/* Navbar items will be wrapped in this collapsible component */}
        <Nav className="me-auto nav">
          <Nav.Link href="/team">Manage Team</Nav.Link>
          <Nav.Link href="/timer">Timer Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}