import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Img from "./images/logo.png";

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img src={Img} width="7%" border="10px" alt="Logo" />
                    <Navbar.Brand href="#home">Loja de Jogos</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#playstation">Playstation</Nav.Link>
                        <Nav.Link href="#xbox">Xbox</Nav.Link>
                        <Nav.Link href="#nintendo">Nintendo</Nav.Link>
                        <Nav.Link href="#computador">Computador</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
