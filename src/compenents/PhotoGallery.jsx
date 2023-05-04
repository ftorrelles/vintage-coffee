import Slider from "react-slick";
import "../styles/photoGallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoGallery = () => {
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
            <h2 className="photo-gallery-title">Nuestra galería</h2>
            <Slider {...settings}>
                <div className="photo-gallery-slide">
                    <img src="/1.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/2.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/3.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/4.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/5.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/6.png" />
                </div>
                <div className="photo-gallery-slide">
                    <img src="/7.png" />
                </div>
            </Slider>
        </div>
    );
};

export default PhotoGallery;
