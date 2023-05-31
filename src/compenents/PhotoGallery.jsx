import Slider from "react-slick";
import "../styles/photoGallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "animate.css/animate.min.css";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const PhotoGallery = () => {
    //logica libreria react-intersection-observer
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="photo-gallery-container">
            <h2
                className={`photo-gallery-title animate__animated ${
                    inView ? "animate__fadeInDown" : ""
                }`}
                ref={ref}
            >
                Nuestra galería
            </h2>
            <Slider {...settings}>
                <div className="photo-gallery-slide">
                    <img src="/8.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/9.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/10.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/11.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/12.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/13.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/14.png" />
                </div>
            </Slider>
        </div>
    );
};

export default PhotoGallery;
