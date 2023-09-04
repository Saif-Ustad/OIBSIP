import * as CartAPI from "../API/CartRequest";

export const AddToCart = (product, userId) => async (dispatch) => {

    // console.log(product);
    // console.log(userId)
    dispatch({ type: "CART_ITEM_ADDING_START" });
    try {
        const { data } = await CartAPI.addToCart(product, userId);
        // console.log(data);
        dispatch({ type: "CART_ITEM_ADDING_SUCCESS", cartItems: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "CART_ITEM_ADDING_FAIL" });
    }

};


export const RemoveFromCart = (productId, userId) => async (dispatch) => {

    try {
        // console.log(productId)
        // console.log(userId)
        const productIdData = {
            productId: productId 
        };

        await CartAPI.removeFromCart(productIdData, userId);

        window.location.reload();
    } catch (error) {
        console.log(error);
    }

};


export const GetAllCartItems = (userId) => async (dispatch) => {
    try {
        const { data } = await CartAPI.getAllCartItems(userId);
        // console.log(data);
        dispatch({ type: "All_CART_PRODUCTS_SUCCESS", userCartItems: data });
    } catch (error) {
        console.log(error);
    }

};