import React from "react";
import "../styles/socialInnovation.css";
import "animate.css/animate.min.css";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const SocialInnovation = () => {
    //logica libreria react-intersection-observer
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    return (
        <section className="social-innovation">
            <h2
                className={`section-title animate__animated ${
                    inView ? "animate__fadeInDown" : ""
                }`}
                ref={ref}
            >
                Innovación social
            </h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="octagon-wrapper">
                            <div className="octagon octagon-4">
                                <h3 className="octagon-title">
                                    Nuestras mujeres
                                </h3>
                                <p className="octagon-description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Porro id nemo, quam soluta
                                    ipsa doloribus beatae blanditiis omnis
                                    dicta, fuga voluptates modi enim corrupti
                                    veniam iusto est tempore culpa expedita.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="octagon-wrapper">
                            <div className="octagon octagon-4">
                                <h3 className="octagon-title">Oportunidades</h3>
                                <p className="octagon-description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Rerum facere ipsa maxime
                                    natus dicta voluptate fugiat provident porro
                                    nulla inventore, quo rem officia libero
                                    beatae fuga suscipit hic at non.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="octagon-wrapper">
                            <div className="octagon octagon-4">
                                <h3 className="octagon-title">Economia</h3>
                                <p className="octagon-description">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Sapiente qui sint nam,
                                    blanditiis consequatur nulla accusamus
                                    dolore quisquam quam voluptatibus
                                    exercitationem fuga ratione, dicta, unde
                                    maxime omnis quas possimus veniam?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialInnovation;
