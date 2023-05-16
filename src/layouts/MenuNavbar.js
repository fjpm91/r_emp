import React, {useState} from 'react'
import { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import empicon from '../img/logoempacar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from "@fortawesome/free-solid-svg-icons";
const MenuNavbar = () => {
    const [usershow, setUsershow] = useState('INVITADO');
    const navigate = useNavigate();
    useEffect (()=> {
        setUsershow((localStorage.getItem('username')) ? localStorage.getItem('username') : 'INVITADO')
        console.log(localStorage.getItem('username'))
    },[])
    useEffect (()=> {
        setUsershow((localStorage.getItem('username')) ? localStorage.getItem('username') : 'INVITADO')
        
    },[localStorage.getItem('username')])
    
    const logoEstilo = {width: '100px'};
    const logout = () =>{
        localStorage.clear();
        setUsershow('INVITADO');
        navigate("/login");
    }
    

    return (
         <Navbar  bg="dark" expand="md" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">EMPACAR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
        <> 
                    
                        <NavDropdown title="OPCIONES" id="basic-nav-dropdown">
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showUsuario">USUARIO</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showPerfil">PERFIL</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showEtiqueta">ETIQUETA</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showResina">RESINA</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/printEtiqueta">IMPRIMIR</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/parChofer">CHOFER</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/parCamion">CAMION</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/parCliente">CLIENTE</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/stock">STOCK</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/boxStock">STOCKBOX</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showParametros">PARAMETROS</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="RESINA" id="basic-nav-dropdown">
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showEtiqueta">ETIQUETA</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showResina">RESINA</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/printEtiqueta">IMPRIMIR</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/stock">STOCK</NavDropdown.Item>
                        </NavDropdown>
                        

                        <NavDropdown title="PREFORMA" id="basic-nav-dropdown">
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showPreforma">PREFORMA</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="PARAMETROS" id="basic-nav-dropdown">
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showChofer">CHOFER</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showCamion">CAMION</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showCliente">CLIENTE</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showParametros">PARAMETROS</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="USUARIOS" id="basic-nav-dropdown">
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showUsuario">USUARIO</NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item" as={Link} to="/showPerfil">PERFIL</NavDropdown.Item>
                        </NavDropdown>
                        
                    </></Nav>
                    <Nav className="d-flex">
                    <Nav.Link className='text-white mx-2'><FontAwesomeIcon icon={faUser} /> {usershow} </Nav.Link>

                    {(
                        (localStorage.getItem('username')) ? 
                        <Nav.Link onClick={logout} className=''>LOGOUT </Nav.Link>:<Nav.Link href="/login" className=''>LOGIN </Nav.Link>)}
                        
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>

        // <Navbar bg="dark" expand="md" variant="dark">
        //     <Container>
        //         {/* <Navbar.Brand href="/home">EMPACAR</Navbar.Brand> */}
        //         <Navbar.Brand as={Link} to="/home"><img src={empicon} style={logoEstilo}/></Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <NavDropdown title="SALAS" id="basic-nav-dropdown">
        //                     <NavDropdown.Item className="dropdown-item" as={Link} to="/showReuniones">REUNIONES</NavDropdown.Item>
        //                     <NavDropdown.Item className="dropdown-item" as={Link} to="/showReunionesTv">REUNIONES(TV)</NavDropdown.Item>
                            
        //                     {(
        //                         (localStorage.getItem('sala_admin') == 1) ?   
        //                     <NavDropdown.Item className="dropdown-item" as={Link} to="/showSalas">SALAS</NavDropdown.Item>:<></>
        //                     )}
                            
        //                     {(
        //                         (localStorage.getItem('sala_admin') == 1) ?   
        //                         <NavDropdown.Item className="dropdown-item" as={Link} to="/showAdmin">ADMINISTRADORES</NavDropdown.Item> :<></>
        //                     )}
        //                 </NavDropdown>
        //                 <NavDropdown title="SALAS" id="basic-nav-dropdown">
        //                     <NavDropdown.Item className="dropdown-item" as={Link} to="/showReuniones">REUNIONES</NavDropdown.Item>
        //                     <NavDropdown.Item className="dropdown-item" as={Link} to="/showReunionesTv">REUNIONES(TV)</NavDropdown.Item>
                            
        //                     {(
        //                         (localStorage.getItem('sala_admin') == 1) ?   
        //                     <NavDropdown.Item className="dropdown-item" as={Link} to="/showSalas">SALAS</NavDropdown.Item>:<></>
        //                     )}
                            
        //                     {(
        //                         (localStorage.getItem('sala_admin') == 1) ?   
        //                         <NavDropdown.Item className="dropdown-item" as={Link} to="/showAdmin">ADMINISTRADORES</NavDropdown.Item> :<></>
        //                     )}
        //                 </NavDropdown>
        //                 <NavDropdown title="SALAS" id="basic-nav-dropdown">
        //                     <NavDropdown.Item className="dropdown-item" as={Link} to="/showReuniones">REUNIONES</NavDropdown.Item>
        //                     <NavDropdown.Item className="dropdown-item" as={Link} to="/showReunionesTv">REUNIONES(TV)</NavDropdown.Item>
                            
        //                     {(
        //                         (localStorage.getItem('sala_admin') == 1) ?   
        //                     <NavDropdown.Item className="dropdown-item" as={Link} to="/showSalas">SALAS</NavDropdown.Item>:<></>
        //                     )}
                            
        //                     {(
        //                         (localStorage.getItem('sala_admin') == 1) ?   
        //                         <NavDropdown.Item className="dropdown-item" as={Link} to="/showAdmin">ADMINISTRADORES</NavDropdown.Item> :<></>
        //                     )}
        //                 </NavDropdown>
        //             </Nav>
        //             <Nav className="d-flex">                    
        //                         <Nav.Link className='text-white mx-2'><FontAwesomeIcon icon={faUser} /> {usershow} </Nav.Link>
                                                                                                               
        //                         {(
        //                         (localStorage.getItem('username')) ?   
        //                         <Nav.Link onClick={logout} className='ml-4'>LOGOUT </Nav.Link> : <Nav.Link as={Link} to="/login" className='ml-4'>LOGIN </Nav.Link>                                                            
        //                     )}
        //             </Nav>     
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>

    );
}

export default MenuNavbar;