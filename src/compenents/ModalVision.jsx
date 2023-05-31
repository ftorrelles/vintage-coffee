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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Neque quisquam nemo eos repellendus quibusdam quae
                        aperiam provident. Adipisci nostrum, quibusdam ab,
                        ducimus earum, quasi aspernatur sit officiis consectetur
                        debitis vel. Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Suscipit deserunt, pariatur,
                        repellendus voluptatem, maiores nulla voluptatibus nam a
                        nostrum aut laudantium nihil aliquam impedit? Blanditiis
                        quasi quae illo est ab.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalVision;
