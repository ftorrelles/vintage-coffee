import { Container } from "react-bootstrap";
import "../styles/team.css";

const Team = () => {
    return (
        <>
            <Container fluid>
                <section className="section_team">
                    <div>
                        <h2
                            style={{
                                paddingBottom: "2rem",
                                textAlign: "center",
                            }}
                        >
                            Nuestro equipo
                        </h2>
                    </div>
                    <div className="team">
                        <div className="team_member">
                            <h3 className="member_name">Roberto Martinez</h3>
                            <div className="member_image">
                                <img
                                    src="https://randomuser.me/api/portraits/men/11.jpg"
                                    className="active"
                                    alt=""
                                />
                            </div>
                            <div className="member_description">
                                <p>
                                    CEO
                                    <br />
                                    <br />
                                    Licienciado negocios internacionales <br />
                                    <br />
                                    20 años de experiencia
                                </p>
                            </div>
                        </div>
                        <div className="team_member">
                            <h3 className="member_name">Maria Jimenez</h3>
                            <div className="member_image">
                                <img
                                    src="https://randomuser.me/api/portraits/women/90.jpg"
                                    className="active"
                                    alt=""
                                />
                            </div>
                            <div className="member_description">
                                <p>
                                    VP Ejecutivo
                                    <br />
                                    <br />
                                    Ingeniera industrial <br />
                                    <br />
                                    25 años de experiencia
                                </p>
                            </div>
                        </div>
                        <div className="team_member">
                            <h3 className="member_name">Jhon Doe</h3>
                            <div className="member_image">
                                <img
                                    src="https://randomuser.me/api/portraits/men/52.jpg"
                                    className="active"
                                    alt=""
                                />
                            </div>
                            <div className="member_description">
                                <p>
                                    Gerente OP
                                    <br />
                                    <br />
                                    Ingeniero Mecatronico <br />
                                    <br />
                                    10 años de experiencia
                                </p>
                            </div>
                        </div>
                        <div className="team_member">
                            <h3 className="member_name">Ricardo Mendez</h3>
                            <div className="member_image">
                                <img
                                    src="https://randomuser.me/api/portraits/men/66.jpg"
                                    className="active"
                                    alt=""
                                />
                            </div>
                            <div className="member_description">
                                <p>
                                    Jefe Op
                                    <br />
                                    <br />
                                    Ingeniero Mecanico
                                    <br />
                                    <br />
                                    17 años de experiencia
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default Team;
