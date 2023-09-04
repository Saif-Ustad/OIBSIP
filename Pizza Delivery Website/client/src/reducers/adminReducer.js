const adminReducer = (state = { adminOrders: [], error: false}, action) => {
    switch (action.type) {

        case "All_ADMIN_ORDERS_SUCCESS":
            return { ...state, adminOrders: action.adminOrdersData, error:false };     

        case "LOG_OUT":
            localStorage.clear();
            return { ...state, adminOrders: null, error: false }    

        default:
            return state;
    }
}

export default adminReducer;