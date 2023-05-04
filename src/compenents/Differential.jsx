import "../styles/differential.css";
//libreria de animaciones
import "animate.css";
import { Card, Col, Container, Row } from "react-bootstrap";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const Differential = () => {
    //logica libreria react-intersection-observer
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    return (
        <section className="differential">
            <div className="differential__content">
                <h2
                    className={`differential__title animate__animated ${
                        inView ? "animate__fadeIn" : ""
                    }`}
                    ref={ref}
                >
                    Lo que nos hace diferentes
                </h2>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        <Col>
                            <Card
                                className={`differential__feature ${
                                    inView
                                        ? "animate__animated animate__fadeIn animate__delay-1s"
                                        : ""
                                }`}
                                ref={ref}
                            >
                                <Card.Body>
                                    <i className="bx bx-cookie"></i>
                                    <Card.Title>
                                        Elaboración artesanal
                                    </Card.Title>
                                    <Card.Text>
                                        Nuestras galletas son elaboradas a mano
                                        con ingredientes de la más alta calidad,
                                        lo que les otorga un sabor especial y
                                        una textura más crocante que cualquier
                                        otra galleta común.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                className={`differential__feature ${
                                    inView
                                        ? "animate__animated animate__fadeIn animate__delay-2s"
                                        : ""
                                }`}
                                ref={ref}
                            >
                                <Card.Body>
                                    <i className="bx bx-recycle"></i>
                                    <Card.Title>
                                        Cuidado del medio ambiente
                                    </Card.Title>
                                    <Card.Text>
                                        Nos preocupamos por el medio ambiente,
                                        por lo que nuestro empaque está
                                        elaborado en su mayoría con cartón
                                        kraft, siendo una empresa consciente con
                                        el cuidado ambiental.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                className={`differential__feature ${
                                    inView
                                        ? "animate__animated animate__fadeIn animate__delay-3s"
                                        : ""
                                }`}
                                ref={ref}
                            >
                                <Card.Body>
                                    <i className="bx bx-box"></i>
                                    <Card.Title>
                                        Diseño elegante y práctico
                                    </Card.Title>
                                    <Card.Text>
                                        Nuestros productos son ideales para
                                        comercializar en los principales nichos
                                        de mercado, para satisfacer los gustos
                                        más exigentes. Además, nuestros empaques
                                        tienen un diseño elegante y práctico.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Differential;
