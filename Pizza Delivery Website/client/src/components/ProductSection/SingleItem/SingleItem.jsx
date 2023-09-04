import "./SingleItem.scss";

// import Pizza from "../../../Assets/Images/pizza1.png";

import {useNavigate} from "react-router-dom";

import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../../Action/ProductAction";



const SingleItem = ({pizza}) => {

    const Navigate = useNavigate();

    const dispatch = useDispatch();

    const handlClick = () => {
        dispatch(setSelectedProduct(pizza))
        Navigate(`/products/${pizza.productId}`)
    }

    return(
        // <div className="singleItem" onClick={()=>Navigate("/products/1")}>
        <div className="singleItem" onClick={ handlClick }>
            <img src={process.env.REACT_APP_PUBLIC_FOLDER + pizza.image} alt="item-img" />
            <h4>{pizza.name}</h4>
            <h3>Rs.{pizza.price}</h3>
        </div>
    );
}

export default SingleItem;