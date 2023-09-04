import "./ProductPage.scss";
// import ProductImage from "../../Assets/Images/pizza1.png";

import { FaStar } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../Action/ProductAction";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddToCart, GetAllCartItems } from "../../Action/CartAction";

const ProductPage = () => {

    const Navigate = useNavigate();

    //redux
    const dispatch = useDispatch();
    const params = useParams();


    const SinglePizza = useSelector((state) => state.productReducer.selectedProduct)
    const user = useSelector((state) => state.authReducer.authData );
    // console.log(SinglePizza);

    useEffect(() => {
        dispatch(getSingleProduct(params.productId));
    }, [params.productId, dispatch]);

    
    //rating 
    const stars = [];

    for (let i = 0; i < SinglePizza.rating; i++) {
        stars.push(<FaStar key={i} />);
    }


    const [data, setData] = useState({productId: SinglePizza.productId , productName: SinglePizza.name, productPrice: SinglePizza.price, size:"Regular ( Serves 1 )", crust: "New Hand Tossed", toppings: "Grilled Mushroom", extraCheese: "off", quantity: 1});

    
    const handlechange = (e)=> {
        setData({...data, [e.target.name]:e.target.value} )
    }

    const userId = user._id;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddToCart(data, userId));
        // dispatch(GetAllCartItems(userId));
        // Redirect to another page after adding to the cart (you can specify the URL)
        Navigate(`/cart/${user._id}`);
      };

    return (
        <div className="ProductPage">
            <div className="container">
                <div className="productImage">
                    <img src={process.env.REACT_APP_PUBLIC_FOLDER + SinglePizza.image} alt="product-Img" />
                </div>
                <div className="product-Info">
                    <h1>{SinglePizza.name}</h1>
                    <h2>Rs.{SinglePizza.price}</h2>
                    <div className="rating">
                        {/* <div className="starts">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div> */}
                        <div className="starts">
                            {stars}
                        </div>
                        <span>( 4 customer reviews )</span>
                    </div>
                    <p>{SinglePizza.desc}</p>
                    <form onSubmit={handleSubmit} >
                        <div className="pizza-customization">
                            <div >
                                <h3>Change Size </h3>
                                <div class="radio-btns">
                                    <div class="radio-input">
                                        <input type="radio" name="size" id="regular" value="Regular ( Serves 1 )" onChange={handlechange} />
                                        <label for="regular">Regular ( Serves 1 )</label><br />
                                    </div>

                                    <div class="radio-input">
                                        <input type="radio" name="size" id="medium" value="Medium ( Serves 2 )" onChange={handlechange}/>
                                        <label for="medium">Medium ( Serves 2 )</label><br />
                                    </div>

                                    <div class="radio-input">
                                        <input type="radio" name="size" id="large" value="Large ( Serves 4 )" onChange={handlechange}/>
                                        <label for="large">Large ( Serves 4 )</label><br />
                                    </div>
                                </div>

                            </div>
                            <div >
                                <h3>Change Crust </h3>
                                <div class="radio-btns">
                                    <div class="radio-input">
                                        <input type="radio" name="crust" id="hand-tossed" value="New Hand Tossed" onChange={handlechange} />
                                        <label for="hand-tossed">New Hand Tossed</label><br />
                                    </div>

                                    <div class="radio-input">
                                        <input type="radio" name="crust" id="wheat-crust" value="100% Wheat Thin Crust" onChange={handlechange}/>
                                        <label for="wheat-crust">100% Wheat Thin Crust</label><br />
                                    </div>

                                    <div class="radio-input">
                                        <input type="radio" name="crust" id="pan-pizza" value="Fresh Pan Pizza" onChange={handlechange}/>
                                        <label for="pan-pizza">Fresh Pan Pizza</label><br />
                                    </div>
                                </div>

                            </div>
                            <div >
                                <h3>Add veg toppings</h3>
                                <div class="radio-btns">
                                    <div class="radio-input">
                                        <input type="radio" name="toppings" id="mushroom" value="Grilled Mushroom" onChange={handlechange} />
                                        <label for="mushroom">Grilled Mushroom</label><br />
                                    </div>
                                    <div class="radio-input">
                                        <input type="radio" name="toppings" id="onion" value="Onion" onChange={handlechange}/>
                                        <label for="onion">Onion</label><br />
                                    </div>
                                    <div class="radio-input">
                                        <input type="radio" name="toppings" id="tomato" value="Fresh Tomato" onChange={handlechange}/>
                                        <label for="tomato">Fresh Tomato</label><br />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="extra-cheese">
                            <input type="checkbox" name="extraCheese" onChange={handlechange}/>
                            <span>Add Extra Cheese </span>
                        </div>
                        <div className="quantity">
                            <input type="number" min={1} defaultValue={1} name="quantity" onChange={handlechange}/>
                            {/* <button type="submit" onClick={() => Navigate(`/cart/${user._id}`)}>Add to Cart</button> */}
                            <button type="submit" >Add to Cart</button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default ProductPage;