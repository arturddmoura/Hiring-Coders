import Header from "./Header";
import { Button, Form, Col, Row, Alert } from "react-bootstrap";
import React, { useState } from "react";

function Cadastro() {
    const [userName, setUserName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [CEP, setUserCEP] = useState("");
    const [endereco, setUserEndereco] = useState("");
    const [numero, setUserNumero] = useState("");
    const [complemento, setUserComplemento] = useState("");
    const [bairro, setUserBairro] = useState("");
    const [cidade, setUserCidade] = useState("");
    const [estado, setUserEstado] = useState("");
    const [sucesso, setSucesso] = useState(false);

    function handleForm(res) {
        res.preventDefault();
        let data = {
            nome: userName,
            email: userEmail,
            cep: CEP,
            endereco: endereco,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            senha: userPassword,
        };

        localStorage.setItem("users", JSON.stringify(data));
        setUserName("");
        setEmail("");
        setUserCEP("");
        setUserEndereco("");
        setUserNumero("");
        setUserComplemento("");
        setUserBairro("");
        setUserCidade("");
        setUserEstado("");
        setPassword("");
        setSucesso(true);
    }
    return (
        <div className="App">
            <Header />
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
                    <Form.Label className="d-flex justify-content-center">
                        Preencha os campos abaixo para se cadastrar:
                    </Form.Label>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Control
                                type="name"
                                placeholder="Insira seu nome"
                                name="name"
                                required
                                onChange={(res) =>
                                    setUserName(res.target.value)
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                type="email"
                                placeholder="Insira seu e-mail"
                                name="email"
                                required
                                onChange={(res) => setEmail(res.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                type="password"
                                placeholder="Insira sua senha"
                                name="password"
                                required
                                onChange={(res) =>
                                    setPassword(res.target.value)
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                type="zip"
                                placeholder="Insira seu CEP"
                                name="zip"
                                required
                                onChange={(res) => setUserCEP(res.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Insira seu endereço"
                                name="endereco"
                                required
                                onChange={(res) =>
                                    setUserEndereco(res.target.value)
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="Insira o número"
                                name="number"
                                required
                                onChange={(res) =>
                                    setUserNumero(res.target.value)
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Insira o complemento"
                                name="text"
                                required
                                onChange={(res) =>
                                    setUserComplemento(res.target.value)
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Insira o bairro"
                                name="text"
                                required
                                onChange={(res) =>
                                    setUserBairro(res.target.value)
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Insira a cidade"
                                name="text"
                                required
                                onChange={(res) =>
                                    setUserCidade(res.target.value)
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Insira o estado"
                                name="text"
                                required
                                onChange={(res) =>
                                    setUserEstado(res.target.value)
                                }
                            />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Button
                                style={{ border: "10px" }}
                                variant="primary"
                                type="submit"
                            >
                                Cadastrar
                            </Button>
                        </Col>
                    </Row>
                    <br></br>
                </Form>
            </Col>
        </div>
    );
}
export default Cadastro;
