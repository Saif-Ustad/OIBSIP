import "./FeaturesSection.scss";

import Feature1 from "../../Assets/Images/feature1.png";
import Feature2 from "../../Assets/Images/feature2.png";
import Feature3 from "../../Assets/Images/feature3.png";

const FeaturesSection = () => {
    return (
        <div className="featuresSection">
            <div className="container">
                <div className="top">
                    <h3>WHAT WE SERVE</h3>
                    <h1>Your Favorite Food <br />Delivery Partner</h1>
                </div>
                <div className="bottom">
                    <div className="feature">
                        <div className="feature-img">
                            <img src={Feature1} alt="feature-img" />
                        </div>
                        <h3>Easy to Order</h3>
                        <p>You only need a few steps in<br /> food ordering</p>
                    </div>
                    <div className="feature">
                        <div className="feature-img">
                            <img src={Feature2} alt="feature-img" />
                        </div>
                        <h3>Fast Delivery</h3>
                        <p>Delivery that is always on<br /> time even faster</p>
                    </div>
                    <div className="feature">
                        <div className="feature-img">
                            <img src={Feature3} alt="feature-img" />
                        </div>
                        <h3>Door Step Delivery</h3>
                        <p>Not only fast for us, quality is<br /> also number one</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;