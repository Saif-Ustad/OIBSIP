import Navbar from "../../components/HomeSection/Navbar/Navbar";
import TrackOrderPage from "../../components/TrackOrderPage/TrackOrderPage";
import "./TrackOrder.scss";

const TrackOrder = () => {
    return (
        <div className="trackOrder">
            <Navbar />
            <TrackOrderPage />
        </div>
    );
}

export default TrackOrder;
