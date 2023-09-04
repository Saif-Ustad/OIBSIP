import * as ProductAPI from "../API/ProductRequest";

export const getAllProducts = () => async (dispatch) => {

    dispatch({ type: "RETREIVING_START" });
    try {
        const { data } = await ProductAPI.getAllProducts();
        // console.log(data);
        dispatch({ type: "RETREIVING_SUCCESS", data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "RETREIVING_FAIL" });
    }

};

export const getSingleProduct = (ProductId) => async (dispatch) => {

    dispatch({ type: "RETREIVING_START" });
    try {
        const { data } = await ProductAPI.getSingleProduct(ProductId);
        // console.log(data);
        dispatch({ type: "SINGLE_PRODUCT_RETREIVING_SUCCESS", data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "RETREIVING_FAIL" });
    }

};

export const setSelectedProduct = (Product) => async (dispatch) => {

    dispatch({ type: "SET_SELECTED_PRODUCT", selectedProduct: Product });

};




