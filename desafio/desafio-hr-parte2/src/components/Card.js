import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Col, Row, Container } from "react-bootstrap";

import Img1 from "./images/returnal.jpg";
import Img2 from "./images/ds.jpg";
import Img3 from "./images/gw.jpg";
import Img4 from "./images/hades.jpg";
import Img5 from "./images/spider-man.jpg";
import Img6 from "./images/horizon.jpg";

function Cards() {
    return (
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center col-sd-4">
                    {/* Card 1 */}
                    <Card style={{ width: "22rem" }}>
                        <Card.Img height="425px" width="544px" src={Img1} />
                        <Card.Body>
                            <Card.Title>Returnal</Card.Title>
                            <Card.Text>Preço: R$ 349,90</Card.Text>
                            <Button variant="primary">Comprar</Button>
                            <p></p>
                            <Button variant="secondary">
                                Adicionar ao carrinho
                            </Button>
                        </Card.Body>
                    </Card>
                    {/* Card 2 */}
                    <Card style={{ width: "22rem" }}>
                        <Card.Img height="425px" width="544px" src={Img2} />
                        <Card.Body>
                            <Card.Title>Demon’s Souls</Card.Title>
                            <Card.Text>Preço: R$ 349,90</Card.Text>
                            <Button variant="primary">Comprar</Button>
                            <p></p>
                            <Button variant="secondary">
                                Adicionar ao carrinho
                            </Button>
                        </Card.Body>
                    </Card>
                    {/* Card 3 */}
                    <Card style={{ width: "22rem" }}>
                        <Card.Img height="425px" width="544px" src={Img3} />
                        <Card.Body>
                            <Card.Title>Ghostwire: Tokyo</Card.Title>
                            <Card.Text>Preço: R$ 299,90</Card.Text>
                            <Button variant="primary">Comprar</Button>
                            <p></p>
                            <Button variant="secondary">
                                Adicionar ao carrinho
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center col-sd-4">
                    {/* Card 4 */}
                    <Card style={{ width: "22rem" }}>
                        <Card.Img height="425px" width="544px" src={Img4} />
                        <Card.Body>
                            <Card.Title>Hades</Card.Title>
                            <Card.Text>Preço: R$ 124,50</Card.Text>
                            <Button variant="primary">Comprar</Button>
                            <p></p>
                            <Button variant="secondary">
                                Adicionar ao carrinho
                            </Button>
                        </Card.Body>
                    </Card>
                    {/* Card 5 */}
                    <Card style={{ width: "22rem" }}>
                        <Card.Img height="425px" width="544px" src={Img5} />
                        <Card.Body>
                            <Card.Title>
                                Marvel's Spider-Man: Miles Morales
                            </Card.Title>
                            <Card.Text>Preço: R$ 249,50</Card.Text>
                            <Button variant="primary">Comprar</Button>
                            <p></p>
                            <Button variant="secondary">
                                Adicionar ao carrinho
                            </Button>
                        </Card.Body>
                    </Card>
                    {/* Card 6 */}
                    <Card style={{ width: "22rem" }}>
                        <Card.Img height="425px" width="544px" src={Img6} />
                        <Card.Body>
                            <Card.Title>Horizon Forbidden West</Card.Title>
                            <Card.Text>Preço: R$ 349,90</Card.Text>
                            <Button variant="primary">Comprar</Button>
                            <p></p>
                            <Button variant="secondary">
                                Adicionar ao carrinho
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Cards;
