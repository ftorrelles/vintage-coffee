import Modal from "react-bootstrap/Modal";

const ModalMision = ({ showMision, handleCloseMision }) => {
    return (
        <>
            <Modal
                className="modal-lg"
                show={showMision}
                onHide={handleCloseMision}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Mision</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: "black" }}>
                        Somos un emprendimiento dedicado a elaborar y
                        comercializar galletas, rescatando el valor del café,
                        comprometiéndonos a producir galletas de calidad, siendo
                        competitivos y eficaces en el mercado. Además, de contar
                        con el respaldo de un equipo de trabajo que se apasiona
                        por ser mejor cada día, orientados al cumplimiento de
                        objetivos y a la satisfacción de los consumidores.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalMision;
