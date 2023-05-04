import { Button } from "react-bootstrap";
import "../styles/aboutText.css";
import ModalVision from "./ModalVision";
import { useState } from "react";
import ModalMision from "./ModalMision";

const AboutText = () => {
    //modal Vision
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //modal Mision
    const [showMision, setShowMision] = useState(false);
    const handleCloseMision = () => setShowMision(false);
    const handleShowMision = () => setShowMision(true);

    return (
        <>
            <div className="about-container">
                <h2>¿Quiénes SOMOS?</h2>
                <p>
                    Somos una empresa que se dedica a la fabricaion de unas
                    crocantes e irresistibles galletas de café. <br />
                    <br />
                    Estas se elaboran artesanalmente con los mejores
                    ingredientes, además del cuidado y dedicación de nuestras
                    colaboradoras que son mujeres campesinas, quienes se
                    caracterizan por su entrega y amor en la fabricación de
                    estas galletas y contribuyen con su talento humano a tener
                    un producto de excelente calidad.
                </p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "1rem",
                    }}
                >
                    <div>
                        <Button type="button" onClick={handleShow}>
                            Vision
                        </Button>
                    </div>
                    <div>
                        <Button type="button" onClick={handleShowMision}>
                            Mision
                        </Button>
                    </div>
                </div>
            </div>
            <ModalVision show={show} handleClose={handleClose} />
            <ModalMision
                showMision={showMision}
                handleCloseMision={handleCloseMision}
            />
        </>
    );
};

export default AboutText;
