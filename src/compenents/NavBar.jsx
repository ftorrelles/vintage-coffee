import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
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
                    <h2>Caffe Crunch</h2>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="offcanvasNavbar"
                    style={{
                        color: sidebarOpen ? "#0f1626" : "white",
                        backgroundColor: "white",
                        borderColor: "white",
                    }}
                    onClick={toggleSidebar}
                />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    show={sidebarOpen}
                    onHide={() => setSidebarOpen(false)}
                >
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link
                                as={Link}
                                to="/about"
                                style={{
                                    color: sidebarOpen ? "#0f1626" : "white",
                                }}
                            >
                                <p>Sobre nosotros</p>
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/gallery"
                                style={{
                                    color: sidebarOpen ? "#0f1626" : "white",
                                }}
                            >
                                <p>Galeria</p>
                            </Nav.Link>

                            <Nav.Link
                                as={Link}
                                to="/testimonials"
                                style={{
                                    color: sidebarOpen ? "#0f1626" : "white",
                                }}
                            >
                                <p>Testimonios</p>
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                style={{
                                    color: sidebarOpen ? "#0f1626" : "white",
                                }}
                            >
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
