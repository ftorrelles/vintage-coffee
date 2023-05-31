import ContentTestimonials from "../compenents/ContentTestimonials";
import Differential from "../compenents/Differential";
import PhotoGallery from "../compenents/PhotoGallery";

const Testimonials = () => {
    return (
        <>
            <div style={{ height: "5rem", background: "#201e1e" }}></div>
            <ContentTestimonials />
            <PhotoGallery />
            <Differential />
        </>
    );
};

export default Testimonials;
