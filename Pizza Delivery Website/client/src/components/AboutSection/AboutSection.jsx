import "./AboutSection.scss";

import aboutImg1 from "../../Assets/Images/about pizza 1.jpg";
import aboutImg2 from "../../Assets/Images/about pizza 2.jpg";

const AboutSection = () => {
    return (
        <div className="aboutSection">
            <div className="container">
                <div className="left">
                    <h1>History </h1>
                    <h2>Welcome to Pizza</h2>
                    <p>We would like to take this opportunity to welc House.We are offering a warm, friendly atmosphere with family and friends at any time</p>
                </div>
                <div className="right">
                    <div className="about-img">
                        <img src={aboutImg1} alt="about-img" />
                    </div>
                    <div className="about-img">
                        <img src={aboutImg2} alt="about-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;