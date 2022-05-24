import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Img from "./images/logo.png";

function HeaderLogado() {
    var user = JSON.parse(localStorage.getItem("users"));
    var nome = user.nome;
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img src={Img} width="7%" border="10px" alt="Logo" />
                    <Navbar.Brand href="/">Loja de Jogos</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#playstation">Playstation</Nav.Link>
                        <Nav.Link href="#xbox">Xbox</Nav.Link>
                        <Nav.Link href="#nintendo">Nintendo</Nav.Link>
                        <Nav.Link href="#computador">Computador</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Item className="ml-auto">
                            <Nav.Link href="/logado">Olá, {nome}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="ml-auto">
                            <Nav.Link href="/">Sair</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default HeaderLogado;
