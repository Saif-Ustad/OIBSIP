import "./CartItem.scss";
import pizza from "../../../Assets/Images/pizza1.png";

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

import { useParams } from "react-router-dom";
import { useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../../../Action/CartAction";

const CartItem = ({ cartItem }) => {
     //    console.log(cartItem)

     const dispatch = useDispatch();
     const params = useParams();

     const userId = useSelector((state)=> state.authReducer.authData._id)

     const handleClick = () => {
          // console.log(cartItem.productId, params.userId)
          dispatch(RemoveFromCart(cartItem.productId, params.userId))
     }

     const [cartItemQuantity, setCartItemQuantity] = useState(cartItem.quantity); // Initialize quantity state

     // const [data, setData] = useState(cartItem);


     const incQuantity = () => {
          const updatedQuantity = cartItemQuantity + 1; // Increment quantity
          setCartItemQuantity(updatedQuantity); // Update state with the incremented quantity
      
          // Create a copy of data with the updated quantity
          const updatedData = { ...cartItem, quantity: updatedQuantity };
      
          // Dispatch AddToCart with the updated data
          dispatch(AddToCart(updatedData, userId));
     };

     const decQuantity = () => {
          if (cartItemQuantity > 1) {
               const updatedQuantity = cartItemQuantity - 1; // Decreament quantity
               setCartItemQuantity(updatedQuantity); // Decrement quantity, but ensure it doesn't go below 1

               // Create a copy of data with the updated quantity
               const updatedData = { ...cartItem, quantity: updatedQuantity };
               
               // Dispatch AddToCart with the updated data
               dispatch(AddToCart(updatedData, userId));

               // setData({...data, quantity: cartItemQuantity } )
          }
     };


     return (
          <div className="cartItem">
               <div className="item-img">
                    <img src={pizza} alt="item-img" />
               </div>
               <div className="item-details">
                    <h3>{cartItem.productName}</h3>
                    <h4>{cartItem.size}</h4>
               </div>
               <div className="quantity">
                    <FaMinus onClick={decQuantity} />
                    <span>{cartItemQuantity}</span>
                    <FaPlus onClick={incQuantity} />
               </div>
               <div className="price">
                    <span>Rs. {cartItem.productPrice * cartItem.quantity}</span>
                    <MdOutlineClose onClick={handleClick} />
               </div>
          </div>
     );
}

export default CartItem;