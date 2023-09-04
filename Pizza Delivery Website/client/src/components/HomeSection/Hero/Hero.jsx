import "./Hero.scss";

import Hero_Image from "../../../Assets/Images/hero-img.png";

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="left">
                    <h1>Be The Fastest In Delivering Your <span>Pizza</span></h1>
                    <p>Our Mission is to filling your tummy with delicious food and with fast and free delivering.</p>
                    <div className="btn">Get Started</div>
                </div>
                <div className="right">
                    <img src={Hero_Image} alt="hero-img" />
                </div>
            </div>

        </div>
    )
}

export default Hero;