import * as AdminAPI from "../API/AdminRequest";


export const GetAllAdminOrders = () => async (dispatch) => {
    try {
        const { data } = await AdminAPI.getAllAdminOrders();
        console.log(data);
        dispatch({ type: "All_ADMIN_ORDERS_SUCCESS", adminOrdersData: data });
    } catch (error) {
        console.log(error);
    }

};



export const UpdateOrderStatus = (orderId, userId, status) => async (dispatch) => {
    try {
        console.log(orderId, userId, status)
        const { data } = await AdminAPI.updateOrderStatus(orderId, userId, status);
        console.log(data);
        // window.location.reload();
        // window.location.reload();
    } catch (error) {
        console.log(error);
    }

};