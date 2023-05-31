import AboutText from "../compenents/AboutText";
import Differential from "../compenents/Differential";
import "../styles/about.css";
import Team from "./Team";
const About = () => {
    return (
        <>
            <div className="about_container">
                {" "}
                <AboutText />
            </div>
            <Team />
            <Differential />
        </>
    );
};

export default About;
