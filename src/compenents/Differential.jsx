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
                        inView ? "animate__fadeInDown" : ""
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
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Expedita, sequi totam
                                        cum est incidunt eum a quas quia
                                        exercitationem dolorem quibusdam facere
                                        saepe voluptatem reprehenderit qui
                                        cumque non doloremque et?
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
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
                                    <i className="bx bx-recycle"></i>
                                    <Card.Title>
                                        Cuidado del medio ambiente
                                    </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Provident, debitis
                                        earum tempore perferendis qui ea
                                        pariatur soluta repellendus vel
                                        aspernatur animi, aperiam ipsa nostrum
                                        expedita numquam quos consequatur, quae
                                        officiis!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
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
                                    <i className="bx bx-box"></i>
                                    <Card.Title>
                                        Diseño elegante y práctico
                                    </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Perspiciatis
                                        repudiandae hic atque itaque vero qui
                                        explicabo, velit repellendus ut animi
                                        aut cum porro fuga nam neque adipisci,
                                        sit, optio blanditiis?
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
