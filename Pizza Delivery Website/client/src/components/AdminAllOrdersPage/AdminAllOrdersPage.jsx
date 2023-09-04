import { useEffect } from "react";
import "./AdminAllOrdersPage.scss";
import { FaOpencart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { GetAllAdminOrders, UpdateOrderStatus } from "../../Action/AdminAction";

const AdminAllOrdersPage = () => {

    //redux
    const dispatch = useDispatch();

    const AllOrdersData = useSelector((state) => state.adminReducer.adminOrders);

    useEffect(() => {
        dispatch(GetAllAdminOrders());
    }, [dispatch])

    const handleChange = (orderId, status, userId) => {
        dispatch(UpdateOrderStatus(orderId, userId, status));

    }

    return (
        <div className="AdminAllOrdersPage">
            <div className="container">
                <div className="title">
                    <FaOpencart />
                    <span>All Orders</span>
                </div>
                <hr />
                <div className="table_wrapper">
                    <div className="table-head">
                        <div className="heading">Orders</div>
                        <div className="heading">Customer</div>
                        <div className="heading">Address</div>
                        <div className="heading">Status</div>
                        <div className="heading">Placed</div>
                    </div>
                    <div className="table-content">
                        
                        {AllOrdersData?.map((order, id) => {
                            return (
                                <div className="table_data" key={id}>
                                    <div className="content orders_detail">
                                        <span className="id">{order._id}</span>
        
                                        {order.orders.map((item, id)=>{
                                            return (
                                                <span key={id}>{item.productName} - {item.quantity} pcs</span>
                                            )
                                        })}
                                    </div>
                                    <div className="content">{order.customer}</div>
                                    <div className="content">{order.address}</div>
                                    <div className="content">
                                        <select defaultValue={order.status} onChange={(e) => handleChange(order._id, e.target.value, order.userId)}>
                                            <option value="placed">Placed</option>
                                            <option value="confirmed" >Confirmed</option>
                                            <option value="prepared" >Prepared</option>
                                            <option value="out for delivery" >Out for Delivery</option>
                                            <option value="complete" >Complete</option>
                                        </select>
                                    </div>
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

export default AdminAllOrdersPage;