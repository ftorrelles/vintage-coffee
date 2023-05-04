import Modal from "react-bootstrap/Modal";

const ModalVision = ({ show, handleClose }) => {
    return (
        <>
            <Modal className="modal-lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Vision</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: "black" }}>
                        En VINTAGE COFFEE queremos ser una de las mejores
                        alternativas para los consumidores de galletas,
                        utilizando la materia prima de nuestra zona cafetera,
                        ofreciendo a nuestros consumidores un producto delicioso
                        y de origen, mediante la elaboración y venta de
                        productos con calidad y excelencia; logrando así un alto
                        nivel de satisfacción a nuestros clientes y con un
                        crecimiento dinámico y rentable.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalVision;
