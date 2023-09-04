import "./TrackOrderPage.scss";

import { FaOpencart } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { BsCheck2All } from "react-icons/bs";
import { FaPizzaSlice } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

import { useParams } from "react-router-dom";

//redux
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const TrackOrderPage = () => {

    const params = useParams();

    //redux
    const orders = useSelector((state) => state.orderReducer.orders);
    const order = orders.find((order) => order._id === params.orderId);
    // console.log(order);


    // Define a function to determine the CSS class for each step
    const getStatusClass = (step) => {
        const orderStatusIndex = [
            "placed",
            "confirmed",
            "prepared",
            "out for delivery",
            "complete",
        ].indexOf(order.status);
        const stepIndex = [
            "placed",
            "confirmed",
            "prepared",
            "out for delivery",
            "complete",
        ].indexOf(step);

        if (stepIndex === orderStatusIndex) {
            return "active";
        } else if (stepIndex < orderStatusIndex) {
            return "inactive";
        }
        return ""; // Default state
    };




    return (
        <div className="trackOrderPage">
            <div className="container">
                <div className="title">
                    <div className="left">
                        <FaOpencart />
                        <span>Track Delivery Status</span>
                    </div>
                    <div className="right">
                        <span>{order._id}</span>
                    </div>
                </div>
                <div className="tracking">
                    {/* <div className="left">
                        <div className="c1">
                            <BsFillClipboard2CheckFill className="inactive" />
                            <BsCheck2All className="active" />
                            <FaPizzaSlice />
                            <FaTruck />
                            <FaSmile />
                        </div>
                        <div className="c2">
                            <FaCircle className="inactive" />
                            <div className="verticalLine inactive"></div>
                            <FaCircle className="active" />
                            <div className="verticalLine"></div>
                            <FaCircle />
                            <div className="verticalLine"></div>
                            <FaCircle />
                            <div className="verticalLine"></div>
                            <FaCircle />
                        </div>
                        <div className="c3">
                            <span className="inactive">Order Placed</span>
                            <span className="active">Order Confirmation</span>
                            <span>Preparation</span>
                            <span>Out for Delivery</span>
                            <span>Complete</span>
                        </div>
                    </div> */}

                    <div className="left">
                        <div className="c1">
                            <BsFillClipboard2CheckFill className={getStatusClass("placed")} />
                            <BsCheck2All className={getStatusClass("confirmed")} />
                            <FaPizzaSlice className={getStatusClass("prepared")} />
                            <FaTruck className={getStatusClass("out for delivery")} />
                            <FaSmile className={getStatusClass("complete")} />
                        </div>
                        <div className="c2">
                            <FaCircle className={getStatusClass("placed")} />
                            <div className={`verticalLine ${getStatusClass("placed")}`}></div>
                            <FaCircle className={getStatusClass("confirmed")} />
                            <div className={`verticalLine ${getStatusClass("confirmed")}`}></div>
                            <FaCircle className={getStatusClass("prepared")} />
                            <div className={`verticalLine ${getStatusClass("prepared")}`}></div>
                            <FaCircle className={getStatusClass("out for delivery")} />
                            <div className={`verticalLine ${getStatusClass("out for delivery")}`}></div>
                            <FaCircle className={getStatusClass("complete")} />
                        </div>
                        <div className="c3">
                            <span className={getStatusClass("placed")}>Order Placed</span>
                            <span className={getStatusClass("confirmed")}>Order Confirmation</span>
                            <span className={getStatusClass("prepared")}>Preparation</span>
                            <span className={getStatusClass("out for delivery")}>Out for Delivery</span>
                            <span className={getStatusClass("complete")}>Complete</span>
                        </div>
                    </div>
                    <div className="right">
                        <span>{order.placedTime}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackOrderPage;
