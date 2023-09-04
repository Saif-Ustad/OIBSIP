import "./OfferSection.scss";

import OfferImg from "../../Assets/Images/offer.png";

const OfferSection = () => {
    return (
        <div className="offerSection">
            <div className="container">
                <img src={OfferImg} alt="offer-img" />
            </div>
        </div>
    );
}

export default OfferSection;