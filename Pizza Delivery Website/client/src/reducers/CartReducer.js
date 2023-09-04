const cartReducer = (state = { CartItems: [], loading: false, error: false}, action) => {
    switch (action.type) {

        case "CART_ITEM_ADDING_START":
            return { ...state, loading: true, error: false };
        case "CART_ITEM_ADDING_SUCCESS":
            return { ...state, CartItems: action.cartItems, error: false };
        case "CART_ITEM_ADDING_FAIL":
            return { ...state,  loading: false, error: true }; 

        case "All_CART_PRODUCTS_SUCCESS":
            return { ...state, CartItems: action.userCartItems, error:false };     

        case "LOG_OUT":
            localStorage.clear();
            return { ...state, CartItems: null, loading: false, error: false }    

        default:
            return state;
    }
}

export default cartReducer;