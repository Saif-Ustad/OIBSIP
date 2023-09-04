import "./Cart.scss";
import EmptyCartPage from "../../components/EmptyCartPage/EmptyCartPage";
import Navbar from "../../components/HomeSection/Navbar/Navbar";
import FullCartPage from "../../components/FullCartPage/FullCartPage";

const Cart = () => {
    return (
        <div className="Cart">
            <Navbar />
            {/* <EmptyCartPage /> */}
            <FullCartPage />
        </div>
    );
}

export default Cart;