import Differential from "../compenents/Differential";
import SocialInnovation from "../compenents/SocialInnovation";
import PhotoGallery from "../compenents/PhotoGallery";
import AboutText from "../compenents/AboutText";
import ContentTestimonials from "../compenents/ContentTestimonials";
import ContentHome from "../compenents/ContentHome";
import Team from "./Team";

const Home = () => {
    return (
        <>
            <ContentHome />
            <AboutText />
            <Differential />
            <SocialInnovation />
            <ContentTestimonials />
            <PhotoGallery />
            <Team />
        </>
    );
};

export default Home;
