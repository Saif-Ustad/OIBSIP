import * as OrderAPI from "../API/OrderRequest";

export const MakeOrder = (orderDetails, userId) => async (dispatch) => {

    try {
        const { data } = await OrderAPI.makeOrder(orderDetails, userId);
        console.log(data);
        dispatch({ type: "ORDER_SUCCESS", OrderData: data });
    } catch (error) {
        console.log(error);
    }

};


export const GetAllOrders = (userId) => async (dispatch) => {
    try {
        const { data } = await OrderAPI.getAllOrders(userId);
        // console.log(data);
        dispatch({ type: "GET_All_ORDERS_SUCCESS", userAllOrders: data });
    } catch (error) {
        console.log(error);
    }

};
