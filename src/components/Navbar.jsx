import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand className="font-bold">Note-Taking</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav" className={`${isMenuOpen ? "show" : ""}`}>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shared" onClick={() => setIsMenuOpen(false)}>
              Shared Tasks
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
