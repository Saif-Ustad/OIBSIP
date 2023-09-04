import Navbar from "../../components/HomeSection/Navbar/Navbar";
import Orderpage from "../../components/OrderPage/OrderPage";
import "./Orders.scss";

const Orders = () => {
    return (
        <div className="Orders">
            <Navbar />
            <Orderpage />
        </div>
    );
}

export default Orders;