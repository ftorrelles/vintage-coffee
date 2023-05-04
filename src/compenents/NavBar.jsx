import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NavBar = () => {
    //efecto cambio de color en el navbar
    useEffect(() => {
        const changeBackground = () => {
            const nav = document.querySelector(".navBar");
            if (window.scrollY >= 100) {
                nav.style.backgroundColor = "#201E1E ";
            } else {
                nav.style.backgroundColor = "transparent";
            }
        };

        window.addEventListener("scroll", changeBackground);

        // Eliminar el evento del DOM cuando se desmonte el componente
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);
    return (
        <Navbar className="navBar" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h2>Vintage Coffee</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/about">
                                <p>Sobre nosotros</p>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/gallery">
                                <p>Galeria</p>
                            </Nav.Link>

                            <Nav.Link as={Link} to="/testimonials">
                                <p>Testimonios</p>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact">
                                <p>Contacto</p>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavBar;
