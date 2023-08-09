import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <BootstrapNavbar expand="lg" bg="dark" variant="dark">
            <BootstrapNavbar.Brand href="#">Fonzi</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="navbarNavDropdown" />
            <BootstrapNavbar.Collapse id="navbarNavDropdown">
                <Nav className="ml-auto">
                    <Nav.Link href="#">Registro</Nav.Link>
                    <Nav.Link href="#">Productos</Nav.Link>
                    <Nav.Link href="#">Nosotros</Nav.Link>
                    <Nav.Link href="#">Contacto</Nav.Link>
                </Nav>                
            </BootstrapNavbar.Collapse>
            <CartWidget />
        </BootstrapNavbar>
    );
}

export default Navbar;
