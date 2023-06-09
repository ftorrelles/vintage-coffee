import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import axios from "../utils/axios";
import Notification from "../compenents/Notification";

const ContentContact = () => {
    const { register, handleSubmit, reset } = useForm();

    const [notification, setNotification] = useState({
        show: false,
        variant: "",
        message: "",
    });

    const submit = (data) => {
        // setInfoForm(data);
        reset();
        axios
            .post("/emails/contact", data)
            .then(() =>
                setNotification({
                    show: true,
                    variant: "success",
                    message: "Mensaje enviado!",
                })
            )
            .catch(() =>
                setNotification({
                    show: true,
                    variant: "danger",
                    message: "upps hubo un error",
                })
            );
    };
    return (
        <>
            <section className="contact">
                <Row xs={1} md={2} lg={2}>
                    <Col lg={6} className="col_contactInfo">
                        <h2 className="titles_contact">
                            Queremos que nos conozcas
                        </h2>
                        <h6>nos consigues en nuestras redes sociales</h6>

                        <div className="div_icons_contact">
                            <a href="" target="_blank">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a href="" target="_blank">
                                <i className="bx bxl-whatsapp"></i>
                            </a>
                            <a href="" target="_blank">
                                <i className="bx bxl-facebook-circle"></i>
                            </a>
                        </div>
                        <ul style={{ padding: "0" }}>
                            <li>
                                <span style={{ color: "#1c4c96" }}>
                                    Dirección:{" "}
                                </span>
                                <a
                                    style={{ color: "black" }}
                                    href=""
                                    target="_blank"
                                >
                                    Colombia
                                </a>
                            </li>
                            <li>
                                <span style={{ color: "#1c4c96" }}>
                                    Email:{" "}
                                </span>
                                contacto@caffecrunch.com
                            </li>
                            <li>
                                <span style={{ color: "#1c4c96" }}>
                                    telefonos:
                                </span>
                                <a
                                    style={{ color: "black" }}
                                    href=""
                                    target="_blank"
                                >
                                    +57 31080866280
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="col_contact_form" lg={6}>
                        <h4 className="titles_contact">
                            ¿Quieres vender nuestros productos? dejanos tus
                            datos y te contactaremos
                        </h4>{" "}
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="form_field">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="nombre y apellido"
                                    {...register("name", { required: true })}
                                />
                            </div>
                            <div className="form_field">
                                <label htmlFor="phone">Telefono</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="numero telefonico"
                                    {...register("phone", { required: true })}
                                />
                            </div>
                            <div className="form_field">
                                <label htmlFor="email-input">Email</label>
                                <input
                                    type="email"
                                    id="email-input"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="form_field">
                                <label htmlFor="comment">Comentarios</label>
                                <textarea
                                    rows="10"
                                    cols="20"
                                    name="comment"
                                    id="comment"
                                    placeholder="Comentario"
                                    {...register("comment", { required: true })}
                                ></textarea>
                            </div>

                            <Button type="submit" className="bt_contact">
                                enviar
                            </Button>
                        </form>
                    </Col>
                </Row>
            </section>
            <Notification
                {...notification}
                handleClose={() =>
                    setNotification({ ...notification, show: false })
                }
            />
        </>
    );
};

export default ContentContact;
