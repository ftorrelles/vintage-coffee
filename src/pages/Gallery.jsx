import PhotoGallery from "../compenents/PhotoGallery";
import "../styles/gallery.css";
import SocialInnovation from "../compenents/SocialInnovation";

const Gallery = () => {
    return (
        <>
            <div style={{ height: "5rem", background: "#201e1e" }}></div>
            <div className="container_gallery">
                <PhotoGallery />
            </div>
            <SocialInnovation />
        </>
    );
};

export default Gallery;
