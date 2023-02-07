import React, {useState} from 'react'
import { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const MenuNavbar = () => {
    const [usershow, setUsershow] = useState('Invitado');
    const navigate = useNavigate();
    useEffect (()=> {
        setUsershow(localStorage.getItem('username'))
        console.log(localStorage.getItem('username'))
    },[])

    const logout = () =>{
        localStorage.clear();
        setUsershow('Invitado');
        navigate("/login");
    }


    return (
        <Navbar bg="dark" expand="md" variant="dark">
            <Container>
                <Navbar.Brand href="/prueba">EMPACAR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="SALAS" id="basic-nav-dropdown">
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showSalas">SALAS</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showReuniones">REUNIONES</NavDropdown.Item>
                            {/* <NavDropdown.Item className="dropdown-item" as={Link} to="/showAdmin">ADMINISTRADORES</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <Nav className="d-flex">                    
                                <h4 className="text-white mx-2">{usershow}</h4>
                                <Nav.Link href="/login" className='ml-4'>LOGIN </Nav.Link>       
                                <Nav.Link onClick={logout} className='ml-4'>LOGOUT </Nav.Link>                                                            
                    </Nav>     
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default MenuNavbar;