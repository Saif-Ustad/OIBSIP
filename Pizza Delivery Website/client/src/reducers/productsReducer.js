const productReducer = (state = { products: [], selectedProduct: {}, loading: false, error: false}, action) => {
    switch (action.type) {

        case "RETREIVING_START":
            return { ...state, loading: true, error: false };
        case "RETREIVING_SUCCESS":
            return { ...state, products: action.data, loading:false, error: false  };
        case "RETREIVING_FAIL":
            return { ...state,  loading: false, error: true };

        case "SINGLE_PRODUCT_RETREIVING_SUCCESS":
            return { ...state, selectedProduct: action.data, loading:false, error: false };    

        case "SET_SELECTED_PRODUCT":
            return { ...state, selectedProduct: action.selectedProduct, error: false };  
            
        case "LOG_OUT":
            localStorage.clear();
            return { ...state, products: null, selectedProduct: null , loading: false, error: false }        

        default:
            return state;
    }
}

export default productReducer;