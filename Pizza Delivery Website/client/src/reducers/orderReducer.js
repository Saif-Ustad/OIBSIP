const orderReducer = (state = { orders:[]}, action) => {
    switch (action.type) {

        case "ORDER_SUCCESS":
            return { ...state, orders: action.OrderData};

        case "LOG_OUT":
            localStorage.clear();
            return { ...state, orders: null }       

        case "GET_All_ORDERS_SUCCESS":
            return { ...state, orders: action.userAllOrders, error:false };    

        default:
            return state;
    }
}

export default orderReducer;