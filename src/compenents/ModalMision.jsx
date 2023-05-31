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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sint quisquam odio sed mollitia sunt aspernatur
                        vitae voluptas molestiae aliquam ex! Illo cumque
                        consequuntur officiis temporibus commodi nihil, nam
                        tempora ipsam. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Mollitia, hic illum voluptates
                        accusamus modi nobis enim eaque libero minima debitis
                        doloribus corrupti accusantium numquam, officia
                        temporibus. Illo facere deserunt dolorem.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalMision;
