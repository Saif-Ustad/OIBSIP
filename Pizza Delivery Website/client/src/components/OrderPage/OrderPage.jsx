
import "./OrderPage.scss";

import { FaOpencart } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

//redux
import { useDispatch ,useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAllOrders } from "../../Action/OrderAction";

const Orderpage = () => {

    const Navigate = useNavigate();
    const dispatch = useDispatch();

    //redux
    const orders = useSelector((state) => state.orderReducer.orders)
    const user = useSelector((state)=> state.authReducer.authData)

    useEffect(()=>{
        dispatch(GetAllOrders(user._id))
    },[])

    return (
        <div className="OrderPage">
            <div className="container">
                <div className="title">
                    <FaOpencart />
                    <span>Orders</span>
                </div>
                <hr />
                <div className="table_wrapper">
                    <div className="table_wrapper_inner">
                        <div className="table-head">
                            <div className="heading">Order Id</div>
                            <div className="heading">Address</div>
                            <div className="heading">Time</div>
                        </div>
                        {/* <div className="table-content">
                            <div className="content id" onClick={()=>Navigate("/orders/track/1")}>784523158798</div>
                            <div className="content">Kondhwa, Pune</div>
                            <div className="content">3.40 PM</div>
                        </div> */}
                        {orders?.map((order, id) => {
                            return (
                                <div className="table-content" key={id}>
                                    <div className="content id" onClick={() => Navigate(`/orders/${user._id}/track/${order._id}`)}>{order._id}</div>
                                    <div className="content">{order.address}</div>
                                    <div className="content">{order.placedTime}</div>
                                </div>
                            )
                        })
                        }

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Orderpage;