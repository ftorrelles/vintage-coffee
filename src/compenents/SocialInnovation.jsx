import React from "react";
import "../styles/socialInnovation.css";

const SocialInnovation = () => {
    return (
        <section className="social-innovation">
            <h2 className="section-title">Innovación social</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="octagon-wrapper">
                            <div className="octagon octagon-4">
                                <h3 className="octagon-title">
                                    Nuestras mujeres
                                </h3>
                                <p className="octagon-description">
                                    Nuestras galletas de café son elaboradas
                                    artesanalmente por mujeres campesinas de la
                                    vereda Guamal La Coca de Santa Rosa de
                                    Cabal.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="octagon-wrapper">
                            <div className="octagon octagon-4">
                                <h3 className="octagon-title">Oportunidades</h3>
                                <p className="octagon-description">
                                    Brindamos la oportunidad de trabajo a
                                    mujeres que no tienen la posibilidad de
                                    laborar en zona urbana por temas de
                                    movilidad y gastos adicionales.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="octagon-wrapper">
                            <div className="octagon octagon-4">
                                <h3 className="octagon-title">Economia</h3>
                                <p className="octagon-description">
                                    Brindamos accesibilidad, solvencia
                                    económica, independencia y bienestar en su
                                    entorno familiar.
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
