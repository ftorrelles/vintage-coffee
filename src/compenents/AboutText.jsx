import { Button } from "react-bootstrap";
import "../styles/aboutText.css";
import ModalVision from "./ModalVision";
import { useState } from "react";
import ModalMision from "./ModalMision";

import "animate.css/animate.min.css";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const AboutText = () => {
    //logica libreria react-intersection-observer
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
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
                <h2
                    className={`animate__animated ${
                        inView ? "animate__fadeInDown" : ""
                    }`}
                    ref={ref}
                >
                    ¿Quiénes SOMOS?
                </h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque accusantium doloribus velit pariatur maiores quia,
                    consequuntur itaque facilis sint dolorem quaerat nihil
                    cupiditate ipsum possimus perferendis ipsa qui, sequi
                    deserunt? Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ab quidem nisi repellendus soluta
                    necessitatibus. Placeat, dolores. Ipsam praesentium tempore
                    atque tempora quam odio, nihil, odit optio enim
                    reprehenderit assumenda soluta.
                    <br />
                    <br />
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
