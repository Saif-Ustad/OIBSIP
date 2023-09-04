import { useSelector } from "react-redux";
import CardDetails from "./CardDetails/CardDetails";
import CartItem from "./CartItem/CarItem";
import "./FullCartPage.scss";
import { FaOpencart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllCartItems } from "../../Action/CartAction";
import { useParams } from "react-router-dom";

const FullCartPage = () => {

    const dispatch = useDispatch();
    const params = useParams();

    const  cartItems  = useSelector((state)=> state.cartReducer.CartItems);
    // console.log(cartItems);

    let sum=0;
    cartItems?.map((item)=>{
        sum = sum + (item.productPrice * item.quantity)
    })
    // console.log(sum);

    useEffect(()=> {
        dispatch(GetAllCartItems(params.userId))
    },[params.userId, dispatch]);

    const [address, setAddress] = useState("");
    

    const handleChange = (e) => {
        setAddress(e.target.value);
    }

    return (
        <div className="FullCartPage">
            <div className="container">
                <div className="title">
                    <FaOpencart />
                    <span>Orders</span>
                </div>
                <hr />
                <div className="cart">
                    <div className="left">
                        <div className="item-wrapper">
                            {/* <div className="items">
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                
                            </div> */}
                            <div className="items">
                                {cartItems?.map((item, id)=>{
                                    return (
                                        <CartItem cartItem={item} key={id}/>
                                    )   
                                })}
                                
                            </div>
                        </div>
                        
                        <div className="cart-bill">
                            <hr />
                            <div className="total">
                                <div className="total_center">
                                    <h3>Total Amount :<span>Rs. {sum}</span></h3>
                                    <input type="text" onChange={handleChange} placeholder="Address" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <CardDetails address={address}/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default FullCartPage;