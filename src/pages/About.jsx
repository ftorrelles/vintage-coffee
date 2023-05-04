import AboutText from "../compenents/AboutText";
import Differential from "../compenents/Differential";
import "../styles/about.css";
const About = () => {
    return (
        <>
            <div className="about_container">
                {" "}
                <AboutText />
            </div>
            <Differential />
        </>
    );
};

export default About;
