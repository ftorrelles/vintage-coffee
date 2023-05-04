import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer_container">
                    <div className="footer-content">
                        <h3 style={{ textAlign: "center" }}>Sobre nosotros</h3>
                        <div style={{ textAlign: "center" }}>
                            <ul>
                                <li>
                                    <Link to="/">Mision</Link>
                                </li>
                                <li>
                                    <Link to="/">Vision</Link>
                                </li>
                                <li>
                                    <Link to="/">Diferencial</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content">
                        <h3 style={{ textAlign: "center" }}>
                            <a href="/#">
                                <strong>Vintage Coffee</strong>
                            </a>
                        </h3>
                    </div>
                    <div className="footer-content">
                        <h3 style={{ textAlign: "center" }}>Redes sociales</h3>
                        <div className="div_icons_contact">
                            <a
                                href="https://www.linkedin.com/in/biupoll-sas-4971a1273/"
                                target="_blank"
                            >
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a
                                href="https://api.whatsapp.com/message/LOR4BMDYHZ3GJ1?autoload=1&app_absent=0"
                                target="_blank"
                            >
                                <i className="bx bxl-whatsapp"></i>
                            </a>
                            <a href="" target="_blank">
                                <i className="bx bxl-facebook-circle"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <p className="footer_copy">
                        © Vintage Coffee. All rigths reserved{" "}
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
