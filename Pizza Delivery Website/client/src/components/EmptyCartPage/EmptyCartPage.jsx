import "./EmptyCartPage.scss";
import EmptyCartImg from "../../Assets/Images/Empty cart.png";

const EmptyCartPage = () => {
    return (
        <div className="EmptyCartPage">
            <div className="container">
                <h1>Cart Empty</h1>
                <p>You probably haven't ordered a pizza yet. <br />To order a pizza go to main page. 
                </p>
                <div className="empty-cart-img">
                    <img src={EmptyCartImg} alt="empty-cart-img" />
                </div>
                <div className="btn">Go Back</div>

            </div>
        </div>
    );
}

export default EmptyCartPage;