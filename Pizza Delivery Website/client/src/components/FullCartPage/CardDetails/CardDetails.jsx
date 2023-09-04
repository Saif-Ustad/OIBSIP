import "./CardDetails.scss";

import Ellipse from "../../../Assets/Icons/Ellipse.svg";

import {useNavigate} from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { MakeOrder } from "../../../Action/OrderAction";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CardDetails = ({address}) => {

    // console.log(address)
    //redux
    const dispatch = useDispatch();
    const params = useParams();

    const user = useSelector((state) => state.authReducer.authData);

    const Navigate = useNavigate();


    const userName = user.firstname + " " + user.lastname;
    
    // Get the current time
    let currentTime = new Date().toLocaleTimeString();

    const [data, setData] = useState({customer: userName, address: "", status: "placed" , placedTime: currentTime});

 

    const handleClick = () => {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        console.log(currentTime, data)
        dispatch(MakeOrder({...data, placedTime:currentTime, address: address }, params.userId));
        Navigate(`/orders/${params.userId}`)
    }

    const [cardHolderName, setCardHolderName] = useState("Card Holder Name");
    const [ExpiryDate, setExpiryDate] = useState("Expiry Date")

    return (
        <div className="cardDetails">
            <div className="container1">
                <h2>Card Details</h2>
                <div className="card">
                    <h4>Loren Ipsum</h4>
                    <div className="details">
                        <div className="card-number" >
                            <div className="circles">
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                            </div>
                            <div className="circles">
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                            </div>
                            <div className="circles">
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                            </div>
                            <div className="circles">
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                                <img src={Ellipse} alt="circle" />
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <h5>{ExpiryDate}</h5>
                                <span>{cardHolderName}</span>
                            </div>
                            <div className="right">
                                <h1>VISA</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-holder-details">
                    <div className="in_row name">
                        <input type="text" placeholder="Enter name" onChange={(e)=>setCardHolderName(e.target.value)}/>
                    </div>
                    <div className="in_row card_number_input">
                        <input type="text" placeholder="Enter cart no."/>
                    </div>
                    <div className="in_row date">
                        <input type="date" placeholder="expiration date" onChange={(e)=>setExpiryDate(e.target.value)}/>
                        <input type="number" placeholder="CVV" />
                    </div>
                </div>
                <div className="btn" onClick={handleClick}>
                    Checkout
                </div>
            </div>
        </div>
    )
}

export default CardDetails;