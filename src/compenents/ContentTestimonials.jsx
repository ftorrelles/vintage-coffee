import "../styles/testimonials.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonials.css";
import { Container } from "react-bootstrap";

import "animate.css/animate.min.css";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const testimonies = [
    {
        photo: "https://randomuser.me/api/portraits/men/14.jpg",
        name: "John Doe",
        text: "¡Las galletas de Caffe Crunch son deliciosas! Nunca he probado unas tan sabrosas y crujientes. ¡Las recomiendo completamente!",
    },
    {
        photo: "https://randomuser.me/api/portraits/women/90.jpg",
        name: "Jane Smith",
        text: "Estoy enamorado de las galletas de Caffe Crunch. Son mi merienda favorita, siempre encuentro nuevos sabores para disfrutar.",
    },
    {
        photo: "https://randomuser.me/api/portraits/women/20.jpg",
        name: "Maria Lopez",
        text: "Las galletas de Caffe Crunch son una verdadera delicia para el paladar. ¡No puedo resistirme a su sabor único!",
    },
    {
        photo: "https://randomuser.me/api/portraits/men/46.jpg",
        name: "David Johnson",
        text: "¡Simplemente adoro las galletas de Caffe Crunch! Siempre me alegran el día y son perfectas para compartir con amigos.",
    },
    {
        photo: "https://randomuser.me/api/portraits/women/33.jpg",
        name: "Laura Davis",
        text: "Cada vez que pruebo las galletas de Caffe Crunch, me transportan a un mundo de sabores exquisitos. Son irresistibles.",
    },
    {
        photo: "https://randomuser.me/api/portraits/men/30.jpg",
        name: "Robert Brown",
        text: "Como amante de las galletas, puedo decir sin dudarlo que las de Caffe Crunch son las mejores que he probado. ¡Son increíbles!",
    },
    {
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        name: "Emma Wilson",
        text: "Las galletas de Caffe Crunch son mi debilidad. Me encanta la variedad de sabores y su textura crujiente. ¡No puedo tener suficientes!",
    },
    {
        photo: "https://randomuser.me/api/portraits/men/55.jpg",
        name: "Michael Thompson",
        text: "Caffe Crunch ofrece las galletas más deliciosas que he probado. Siempre están frescas y son perfectas para cualquier ocasión.",
    },
];

const ContentTestimonials = () => {
    //logica libreria react-intersection-observer
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Muestra 3 testimonios en versión de escritorio
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Muestra 2 testimonios en versión de tablet
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Muestra 1 testimonio en versión móvil
                },
            },
        ],
    };
    return (
        <>
            <div className="spikes">
                <Container fluid className="content-testimonials">
                    <h2
                        style={{
                            textAlign: "center",
                            paddingTop: "5rem",
                            color: "#f05a36",
                        }}
                        className={`animate__animated ${
                            inView ? "animate__fadeInDown" : ""
                        }`}
                        ref={ref}
                    >
                        Testimonios
                    </h2>
                    <Slider {...settings} className="testimonial-slider">
                        {testimonies.map((testimonial, index) => (
                            <div key={index} className="testimonial-container">
                                <img
                                    src={testimonial.photo}
                                    alt={testimonial.name}
                                    className="testimonial-photo"
                                />
                                <h3 className="testimonial-name">
                                    {testimonial.name}
                                </h3>
                                <p className="testimonial-text">
                                    {testimonial.text}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </Container>
                <br />
                <br />
            </div>
        </>
    );
};

export default ContentTestimonials;
