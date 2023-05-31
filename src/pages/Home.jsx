import Differential from "../compenents/Differential";
import SocialInnovation from "../compenents/SocialInnovation";
import PhotoGallery from "../compenents/PhotoGallery";
import AboutText from "../compenents/AboutText";
import ContentTestimonials from "../compenents/ContentTestimonials";
import ContentHome from "../compenents/ContentHome";

const Home = () => {
    return (
        <>
            <ContentHome />
            <AboutText />
            <Differential />
            <SocialInnovation />
            <ContentTestimonials />
            <PhotoGallery />
        </>
    );
};

export default Home;
