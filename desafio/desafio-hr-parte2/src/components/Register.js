import React, { useState } from "react";

import { Button, Form, Col, Row, Alert } from "react-bootstrap";

function Register() {
    const [userName, setUserName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [sucesso, setSucesso] = useState(false);

    function handleForm(res) {
        res.preventDefault();
        let data = {
            nome: userName,
            email: userEmail,
        };

        localStorage.setItem("users", JSON.stringify(data));
        setUserName("");
        setEmail("");
        setSucesso(true);
    }
    return (
        <Col className="d-flex justify-content-center">
            <Form onSubmit={handleForm}>
                <br></br>
                {sucesso ? (
                    <Alert key="success" variant="success">
                        Você se cadastrou com sucesso!
                    </Alert>
                ) : (
                    ""
                )}
                <Form.Label>
                    Inscreva-se abaixo para receber novidades e promoções!
                </Form.Label>
                <br></br>
                <Row>
                    <Col>
                        <Form.Control
                            type="name"
                            placeholder="Insira seu nome"
                            name="name"
                            required
                            onChange={(res) => setUserName(res.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="email"
                            placeholder="Insira seu e-mail"
                            name="email"
                            required
                            onChange={(res) => setEmail(res.target.value)}
                        />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Col>
                </Row>
                <br></br>
            </Form>
        </Col>
    );
}

export default Register;
