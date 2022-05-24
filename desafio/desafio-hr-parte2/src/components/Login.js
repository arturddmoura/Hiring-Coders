import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Form, Col, Row } from "react-bootstrap";

function Login() {
    let navigate = useNavigate();
    const [loginUser, setloginUser] = useState("");
    const [loginPassword, setloginPassword] = useState("");

    var user = JSON.parse(localStorage.getItem("users"));
    var login = user.email;
    var senha = user.senha;

    const [sucesso, setSucesso] = useState();

    function handleLogin() {
        if (login === loginUser && senha === loginPassword) {
            setSucesso(true);
        } else {
            setSucesso(false);
        }
    }

    return (
        <div className="App">
            <Header />
            <Col className="d-flex justify-content-center">
                <Form onSubmit={handleLogin}>
                    <br></br>
                    {sucesso ? navigate("/logado") : ""}
                    <Form.Label>
                        Insira suas informações para fazer o login:
                    </Form.Label>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Control
                                type="email"
                                placeholder="Insira seu e-mail"
                                name="email"
                                required
                                onChange={(res) =>
                                    setloginUser(res.target.value)
                                }
                            />
                        </Col>
                        <Row></Row>
                        <Col>
                            <Form.Control
                                type="password"
                                placeholder="Insira sua senha"
                                name="password"
                                required
                                onChange={(res) =>
                                    setloginPassword(res.target.value)
                                }
                            />
                        </Col>
                        <Row></Row>
                        <br></br>
                        <Col>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Col>
                    </Row>
                    <br></br>
                </Form>
            </Col>
        </div>
    );
}
export default Login;
