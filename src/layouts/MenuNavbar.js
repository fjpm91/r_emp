import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MenuNavbar = () => {
    return (
        <Navbar bg="dark" expand="md" variant="dark">
            <Container>
                <Navbar.Brand href="/home">EMPACAR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="SALAS" id="basic-nav-dropdown">
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showSalas">SALAS</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showReuniones">REUNIONES</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default MenuNavbar;